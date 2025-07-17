// app/api/register/route.ts

import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

const POSTMARK_API_TOKEN = process.env.POSTMARK_SERVER_API_TOKEN!;
const POSTMARK_FROM_EMAIL = process.env.POSTMARK_FROM_EMAIL!;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ success: false, message: 'Email is required.' }, { status: 400 });
    }

    // Insert email to Supabase table `registrations`
    const { error } = await supabase.from('registrations').insert([{ email }]);

    if (error) {
      console.error('Supabase insert error:', error.message);
      return NextResponse.json({ success: false, message: 'Database error.' }, { status: 500 });
    }

    // Send welcome email via Postmark
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
        Subject: '🎉 Welcome to ZiiOZ!',
        HtmlBody: `<strong>You're now registered!</strong><br><br>Stay tuned as we launch ZiiOZ.`,
      }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error('Postmark error:', errorResponse);
      return NextResponse.json({ success: false, message: 'Email sending failed.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Welcome email sent.' });

  } catch (err) {
    console.error('Unexpected error:', err);
    return NextResponse.json({ success: false, message: 'Internal server error.' }, { status: 500 });
  }
}
