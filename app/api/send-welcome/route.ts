// app/api/send-welcome/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.POSTMARK_SERVER_API_TOKEN);
const FROM_EMAIL = process.env.POSTMARK_FROM_EMAIL || "no-reply@ziioz.com";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: `ZiiOZ <${FROM_EMAIL}>`,
      to: email,
      subject: "Welcome to ZiiOZ 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center; padding: 40px">
          <h1>👋 Welcome to <strong>ZiiOZ</strong></h1>
          <p>You're in. ZiiOZ is the future of social — smart and fast for creators like you.</p>
          <a href="https://ziioz.com" style="padding: 12px 20px; background: black; color: white; border-radius: 5px; text-decoration: none;">Explore ZiiOZ</a>
          <p style="color: #888; font-size: 14px; margin-top: 30px;">Didn’t request this? Ignore this email.</p>
        </div>
      `,
    });

    if (response.error) {
      console.error("📩 Resend Email Error:", response.error);
      return NextResponse.json(
        { success: false, message: "Resend failed.", details: response.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent." });
  } catch (e) {
    console.error("🔥 Server Crash:", e);
    return NextResponse.json(
      { success: false, message: "Internal error.", error: e },
      { status: 500 }
    );
  }
}
