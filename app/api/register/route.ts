// app/api/register/route.ts

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

const POSTMARK_API_TOKEN = process.env.POSTMARK_SERVER_API_TOKEN!;
const POSTMARK_FROM_EMAIL = 'support@ziioz.com'; // Verified sender

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required.' }, { status: 400 });
    }

    // Insert email into Supabase table
    const { error } = await supabase.from('registrations').insert([{ email }]);

    if (error) {
      console.error('Supabase insert error:', error.message);
      return NextResponse.json({ success: false, message: 'Database error.' }, { status: 500 });
    }

    // Send welcome email directly to the user
    const response = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-Postmark-Server-Token': POSTMARK_API_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        From: POSTMARK_FROM_EMAIL,
        To: email, // <-- now sending to the user directly
        Subject: '🎉 Welcome to ZiiOZ!',
        HtmlBody: `
          <h2>You're in, ${email}!</h2>
          <p>Thanks for registering — you're now part of the ZiiOZ community 🚀</p>
          <p>Get ready for exclusive creator features, fast content tools, and a powerful new way to share.</p>
          <br />
          <p>See you soon,</p>
          <strong>The ZiiOZ Team</strong>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Postmark send error:', errorData);
      return NextResponse.json({ success: false, message: 'Email sending failed.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Welcome email sent to user.' });

  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ success: false, message: 'Internal server error.' }, { status: 500 });
  }
}
