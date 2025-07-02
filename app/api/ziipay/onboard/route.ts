import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16" as any,
});

export async function POST() {
  try {
    // Create a Stripe account
    const account = await stripe.accounts.create({
      type: "standard",
    });

    // Create an onboarding link
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: "https://ziioz.com/ziipay-onboard-retry",
      return_url: "https://ziioz.com/ziipay-onboard-success",
      type: "account_onboarding",
    });

    return NextResponse.json({ url: accountLink.url });
  } catch (err: any) {
    console.error("Stripe onboarding error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
