import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.0";
import Stripe from "https://esm.sh/stripe@16.10.0";

console.log("🔔 Webhook function starting...");

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2024-06-20"
});

const supabase = createClient(
  Deno.env.get("DATABASE_URL")!,
  Deno.env.get("SERVICE_ROLE_KEY")!
);

Deno.serve(async (req) => {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response("No signature", { status: 400 });
    }

    // Verify webhook signature
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      Deno.env.get("STRIPE_WEBHOOK_SECRET")!
    );

    console.log("🔔 Webhook event:", event.type);

    // Handle successful payment
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const paymentCode = session.metadata.payment_code;

      console.log("💰 Payment completed for code:", paymentCode);

      // Mark the code as used in database
      const { error } = await supabase
        .from("payment_codes")
        .update({ used: true })
        .eq("code", paymentCode);

      if (error) {
        console.error("❌ Failed to update code:", error);
      } else {
        console.log("✅ Code marked as used:", paymentCode);
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("💥 Webhook error:", err);
    return new Response(JSON.stringify({ error: "Webhook failed" }), {
      status: 400,
    });
  }
});