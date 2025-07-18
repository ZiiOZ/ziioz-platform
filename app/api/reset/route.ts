import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { cookies }
    );

    // Optional: check if user exists
    const { data: user, error: userError } = await supabase
      .from('users') // or your users table name
      .select('*')
      .eq('email', email)
      .single();

    if (userError || !user) {
      return NextResponse.json({
        success: false,
        message: 'Email not found.',
      }, { status: 404 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'ZiiOZ Support <support@ziioz.com>',
      to: email,
      subject: 'Reset your password',
      html: `
        <h1>ZiiOZ Password Reset</h1>
        <p>Click the button below to reset your password:</p>
        <a href="https://ziioz.com/reset?email=${encodeURIComponent(email)}" style="padding:10px 20px;background:black;color:white;text-decoration:none;">Reset Password</a>
        <p>If you didn't request this, ignore this email.</p>
      `,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: 'Reset email failed.',
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Reset email sent.',
    });

  } catch (err) {
    console.error('Reset API Error:', err);
    return NextResponse.json({
      success: false,
      message: 'Unexpected error.',
    }, { status: 500 });
  }
}
