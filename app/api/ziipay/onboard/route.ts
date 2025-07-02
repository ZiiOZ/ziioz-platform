import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST() {
  try {
    // Create the account
    const account = await stripe.accounts.create({
      type: "standard",
    });

    // Create the onboarding link
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: "https://ziioz.com/reauth",
      return_url: "https://ziioz.com/complete",
      type: "account_onboarding",
    });

    // Return the URL
    return NextResponse.json({ url: accountLink.url });
  } catch (err: any) {
    console.error("Error in onboarding API:", err);
    return NextResponse.json(
      { error: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
