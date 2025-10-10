import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.0";
import Stripe from "https://esm.sh/stripe@16.10.0";

console.log("🚀 Function starting...");

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
    console.log("📥 Received request");
    const { code } = await req.json();
    console.log("🔍 Looking for code:", code);

    if (!code) {
      return new Response(JSON.stringify({ error: "Code is required" }), {
        status: 400,
        headers,
      });
    }

    // Check Supabase table for the code
    const { data, error } = await supabase
      .from("payment_codes")
      .select("*")
      .eq("code", code)
      .eq("used", false)
      .single();

    if (error || !data) {
      console.log("❌ Code not found or already used:", error);
      return new Response(JSON.stringify({ error: "Invalid or used code" }), {
        status: 400,
        headers,
      });
    }

    console.log("✅ Code found:", data);
    const { amount, email, student_name } = data;

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Course Payment - ${student_name}`
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: "https://shamaths.netlify.app/success",
      cancel_url: "https://shamaths.netlify.app/payment?cancelled=true",
      metadata: { code },
    });

    console.log("🎯 Stripe session created:", session.id);

    return new Response(JSON.stringify({ url: session.url }), {
      headers,
    });

  } catch (err) {
    console.error("💥 Server error:", err);
    return new Response(JSON.stringify({ 
      error: "Server error"
    }), {
      status: 500,
      headers,
    });
  }
});
