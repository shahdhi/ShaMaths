import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.0";
import Stripe from "https://esm.sh/stripe@16.10.0";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2024-06-20"
});

const supabase = createClient(
  Deno.env.get("DATABASE_URL")!,
  Deno.env.get("SERVICE_ROLE_KEY")!
);

Deno.serve(async (req) => {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  try {
    console.log("📅 Received session booking request");
    
    const { courseName, studentName, studentEmail, sessionDate, sessionTime, amount, currency } = await req.json();

    // Validate required fields
    if (!courseName || !studentName || !studentEmail || !sessionDate || !sessionTime) {
      return new Response(JSON.stringify({ 
        error: "Missing required fields: courseName, studentName, studentEmail, sessionDate, sessionTime" 
      }), { 
        status: 400,
        headers 
      });
    }

    console.log("💳 Creating Stripe session for:", studentEmail);

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: studentEmail,
      line_items: [
        {
          price_data: {
            currency: currency || "jpy",
            product_data: {
              name: `Tutoring Session - ${courseName}`,
              description: `One-on-one session on ${sessionDate} at ${sessionTime}`
            },
            unit_amount: amount || 1000, // ¥1000 in smallest units (yen)
          },
          quantity: 1,
        },
      ],
      success_url: "https://shademy.online/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://shademy.online/session-booking",
      metadata: {
        type: "session_booking",
        course_name: courseName,
        student_name: studentName,
        session_date: sessionDate,
        session_time: sessionTime
      },
    });

    console.log("✅ Stripe session created:", session.id);

    // Save booking to database
    const { error: dbError } = await supabase
      .from("session_bookings")
      .insert([{
        course_name: courseName,
        student_name: studentName,
        student_email: studentEmail,
        session_date: `${sessionDate} ${sessionTime}`,
        amount: amount || 1000,
        currency: currency || "jpy",
        stripe_session_id: session.id,
        status: "pending"
      }]);

    if (dbError) {
      console.error("❌ Database error:", dbError);
      // Don't fail the request if DB insert fails, still return Stripe URL
    }

    console.log("💾 Booking saved to database");

    return new Response(JSON.stringify({ 
      url: session.url,
      session_id: session.id
    }), { 
      headers 
    });

  } catch (err) {
    console.error("💥 Session booking error:", err);
    return new Response(JSON.stringify({ 
      error: "Booking failed",
      details: err.message 
    }), { 
      status: 500, 
      headers 
    });
  }
});