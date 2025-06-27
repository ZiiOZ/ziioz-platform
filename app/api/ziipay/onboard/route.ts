import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16' as any,
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
