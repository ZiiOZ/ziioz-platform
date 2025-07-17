// app/api/send-welcome/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 });
    }

    const POSTMARK_TOKEN = process.env.POSTMARK_SERVER_API_TOKEN!;
    const FROM_EMAIL = process.env.POSTMARK_FROM_EMAIL || 'no-reply@ziioz.com';

    const res = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-Postmark-Server-Token': POSTMARK_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        From: FROM_EMAIL,
        To: email,
        Subject: 'Welcome to ZiiOZ – Confirm Your Email',
        HtmlBody: `
          <div style="font-family: Arial, sans-serif; padding: 20px;">
            <h2>🎉 Welcome to ZiiOZ!</h2>
            <p>Thanks for signing up! You're now part of something special.</p>
            <p>Let's get started — <strong>your account is ready</strong>.</p>
            <br/>
            <p>❤️ The ZiiOZ Team</p>
          </div>
        `,
        MessageStream: 'defaultTransactional',
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      return NextResponse.json({ error: 'Email send failed', detail: error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Unexpected error', detail: (error as any).message }, { status: 500 });
  }
}
