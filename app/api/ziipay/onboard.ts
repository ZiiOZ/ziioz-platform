import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).end("Method Not Allowed");
  }

  try {
    // Create a new connected account
    const account = await stripe.accounts.create({
      type: "standard",
    });

    // Create an account onboarding link
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
    return res.status(500).json({ error: err.message });
  }
}
