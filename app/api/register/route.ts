import { NextResponse } from 'next/server';

const POSTMARK_API_TOKEN = process.env.POSTMARK_SERVER_API_TOKEN!;
const POSTMARK_FROM_EMAIL = process.env.POSTMARK_FROM_EMAIL!;
const POSTMARK_TEMPLATE_ID = process.env.POSTMARK_TEMPLATE_ID!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, confirmation_url } = body;

    if (!email || !confirmation_url) {
      return NextResponse.json({ success: false, message: 'Email and confirmation URL required.' }, { status: 400 });
    }

    const response = await fetch('https://api.postmarkapp.com/email/withTemplate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-Postmark-Server-Token': POSTMARK_API_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        From: POSTMARK_FROM_EMAIL,
        To: email,
        TemplateId: POSTMARK_TEMPLATE_ID,
        TemplateModel: {
          confirmation_url,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Postmark template error:', error);
      return NextResponse.json({ success: false, message: 'Email send failed.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Confirmation email sent.' });

  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ success: false, message: 'Server error.' }, { status: 500 });
  }
}
