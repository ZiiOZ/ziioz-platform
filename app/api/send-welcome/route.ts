// app/api/send-welcome/route.ts

import { NextResponse } from 'next/server';

const POSTMARK_API_TOKEN = process.env.POSTMARK_SERVER_API_TOKEN!;
const POSTMARK_FROM_EMAIL = process.env.POSTMARK_FROM_EMAIL!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required.' }, { status: 400 });
    }

    const response = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-Postmark-Server-Token': POSTMARK_API_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        From: POSTMARK_FROM_EMAIL,
        To: email,
        Subject: '🎉 Welcome back to ZiiOZ!',
        HtmlBody: `<strong>Here's your welcome email again!</strong><br><br>Enjoy the ride.`,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Postmark resend error:', errorResponse);
      return NextResponse.json({ success: false, message: 'Resend failed.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Resent welcome email.' });

  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ success: false, message: 'Internal error.' }, { status: 500 });
  }
}
