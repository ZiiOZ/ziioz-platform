// app/api/reset/route.ts
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { ServerClient } from 'postmark';

export async function POST(req: Request) {
  const { email } = await req.json();
  
  if (!email) {
    return NextResponse.json({ success: false, message: 'Missing email' }, { status: 400 });
  }

  try {
    const client = new ServerClient(process.env.POSTMARK_API_TOKEN!);

const resetLink = `https://ziioz-platform.vercel.app/reset-password?email=${email}`;

    await client.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL!, // ✅ Use env var
      To: email,
      Subject: 'Reset Your ZiiOZ Password',
      HtmlBody: `
        <p>Hi there 👋</p>
        <p>Click the button below to reset your password:</p>
        <p><a href="${resetLink}" style="background-color:#000;color:white;padding:10px 20px;border-radius:8px;text-decoration:none;">Reset Password</a></p>
        <p>If you didn’t request this, you can ignore this email.</p>
        <p>— The ZiiOZ Team</p>
      `
    });

    return NextResponse.json({ success: true, message: 'Password reset sent.' });
  } catch (error) {
    console.error('Reset email error:', error);
    return NextResponse.json({ success: false, message: 'Reset email failed.' }, { status: 500 });
  }
}
