import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("📘 Incoming request to /api/ziipay/onboard");

  if (req.method !== "POST") {
    console.log("❌ Method not allowed:", req.method);
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    console.log("🔵 Creating Stripe connected account...");
    const account = await stripe.accounts.create({
      type: "standard",
    });
    console.log("✅ Connected account created:", account.id);

    console.log("🔵 Creating Stripe account link...");
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: "https://ziioz.com/ziipay-onboard-retry",
      return_url: "https://ziioz.com/ziipay-onboard-success",
      type: "account_onboarding",
    });
    console.log("✅ Account link created:", accountLink.url);

    return res.status(200).json({
      accountId: account.id,
      url: accountLink.url,
    });
  } catch (err: any) {
    console.error("🔥 Stripe Onboarding error:", err);
    return res.status(500).json({ error: err.message });
  }
}
