import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { ServerClient } from 'postmark';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

const postmarkClient = new ServerClient(process.env.POSTMARK_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ success: false, message: 'Invalid email' }, { status: 400 });
    }

    // Insert into users table
    const { error: insertError } = await supabase
      .from('users')
      .insert([{ email }]);

    if (insertError) {
      return NextResponse.json({ success: false, message: 'Database insert error', error: insertError }, { status: 500 });
    }

    // Send welcome email using Postmark
    await postmarkClient.sendEmail({
      From: 'support@ziioz.com',
      To: email,
      Subject: 'Welcome to ZiiOZ',
      HtmlBody: '<h1>Welcome to ZiiOZ 🎉</h1><p>You’ve successfully registered.</p>',
      TextBody: 'Welcome to ZiiOZ! You’ve successfully registered.',
      MessageStream: 'outbound',
    });

    return NextResponse.json({ success: true, message: `Registered ${email}` });
  } catch (err: any) {
    console.error('Error in register route:', err);
    return NextResponse.json({ success: false, message: 'Internal error', error: err.message }, { status: 500 });
  }
}
