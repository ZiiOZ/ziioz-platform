// /app/api/reset/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend'; // or Postmark depending on your setup
import { PostmarkClient } from 'postmark';

const postmark = new PostmarkClient(process.env.POSTMARK_API_KEY!);

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Missing or invalid email' }, { status: 400 });
  }

  const resetLink = `https://ziioz-platform.vercel.app/reset-password?email=${encodeURIComponent(email)}`;

  try {
    const result = await postmark.sendEmailWithTemplate({
      From: 'support@ziioz.com',
      To: email,
      TemplateAlias: 'welcome', // or whatever alias you're using
      TemplateModel: {
        email,
        year: new Date().getFullYear(),
      },
    });

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
