import { createClient } from "@supabase/supabase-js";
import Stripe from "stripe";

console.log("🚀 Payment function starting...");

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

  if (req.method === "OPTIONS") {
    return new Response(null, { headers });
  }

  try {
    console.log("📥 Received payment request");
    const { code } = await req.json();
    console.log("🔍 Processing code:", code);

    if (!code) {
      return new Response(JSON.stringify({ error: "Payment code is required" }), {
        status: 400,
        headers,
      });
    }

    // Check database for code
    const { data, error } = await supabase
      .from("payment_codes")
      .select("*")
      .eq("code", code)
      .eq("used", false)
      .single();

    if (error || !data) {
      console.log("❌ Code not found or already used");
      return new Response(JSON.stringify({ error: "Invalid or already used payment code" }), {
        status: 400,
        headers,
      });
    }

    console.log("✅ Valid code found:", data);
    const { amount, email, student_name } = data;

    // Create Stripe Checkout session - UPDATED DOMAIN
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Course Payment - ${student_name}`,
              description: `Course enrollment for ${student_name}`
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      // ✅ UPDATED DOMAIN
      success_url: "https://shademy.netlify.app/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "https://shademy.netlify.app/payment",
      metadata: {
        payment_code: code,
        student_name: student_name
      },
      invoice_creation: {
        enabled: true,
      },
    });

    console.log("🎯 Stripe session created:", session.id);

    return new Response(JSON.stringify({ 
      url: session.url,
      session_id: session.id
    }), {
      headers,
    });

  } catch (err) {
    console.error("💥 Server error:", err);
    return new Response(JSON.stringify({ 
      error: "Payment processing failed",
      message: err.message 
    }), {
      status: 500,
      headers,
    });
  }
});