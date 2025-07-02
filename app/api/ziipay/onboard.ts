import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const account = await stripe.accounts.create({
      type: "standard",
    });

    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: "https://ziioz.com/ziipay-onboard-retry",
      return_url: "https://ziioz.com/ziipay-onboard-success",
      type: "account_onboarding",
    });

    return res.status(200).json({
      accountId: account.id,
      url: accountLink.url,
    });
  } catch (err: any) {
    console.error("Onboarding error:", err);
    // Always return JSON
    return res.status(500).json({ error: err.message || "Internal Server Error" });
  }
}
