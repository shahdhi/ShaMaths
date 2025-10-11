// Use imports from deno.json
import Stripe from "stripe";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2024-06-20"
});

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
    const { session_id } = await req.json();

    if (!session_id) {
      return new Response(JSON.stringify({ error: "Session ID is required" }), {
        status: 400,
        headers,
      });
    }

    console.log("🔍 Retrieving invoice for session:", session_id);

    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ['invoice'],
    });

    console.log("✅ Session found, invoice:", session.invoice ? "exists" : "not found");

    if (session.invoice) {
      // Return existing invoice
      return new Response(JSON.stringify({ 
        invoice_url: session.invoice.hosted_invoice_url,
        invoice_pdf: session.invoice.invoice_pdf,
        status: "existing"
      }), { headers });
    } else {
      return new Response(JSON.stringify({ 
        error: "No invoice available for this session yet"
      }), { 
        status: 404,
        headers,
      });
    }

  } catch (err) {
    console.error("💥 Invoice error:", err);
    return new Response(JSON.stringify({ 
      error: "Failed to get invoice",
      details: err.message 
    }), {
      status: 500,
      headers,
    });
  }
});