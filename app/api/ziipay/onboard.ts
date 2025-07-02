import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
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

    // Create an onboarding link
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: "https://ziioz-platform-v4-o26smqu4v-wes-projects-a1c0ced8.vercel.app/ziipay",
      return_url: "https://ziioz-platform-v4-o26smqu4v-wes-projects-a1c0ced8.vercel.app/ziipay",
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
