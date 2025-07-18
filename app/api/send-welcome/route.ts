import { NextResponse } from "next/server";
import { Client } from "postmark";

const postmarkClient = new Client(process.env.POSTMARK_API_KEY!);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const sendResult = await postmarkClient.sendEmail({
      From: "welcome@ziioz.com",
      To: email,
      Subject: "🎉 Welcome to ZiiOZ!",
      HtmlBody: `
        <div style="font-family: sans-serif; text-align: center;">
          <h2>Welcome to ZiiOZ 🎉</h2>
          <p>We're thrilled to have you on board.</p>
          <p>Start creating, exploring, and sharing right now.</p>
          <br/>
          <a href="https://ziioz.com" style="background-color: black; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visit ZiiOZ</a>
          <p style="margin-top: 30px; font-size: 12px; color: gray;">Powered by Street Visual / W&R Buhagiar Family Trust</p>
        </div>
      `,
      TextBody: "Welcome to ZiiOZ! We're thrilled to have you here.",
      MessageStream: "outbound" // Or "broadcast" if you're using a different stream
    });

    return NextResponse.json({ success: true, messageId: sendResult.MessageID });
  } catch (error) {
    console.error("Postmark send error:", error);
    return NextResponse.json({ error: "Failed to send welcome email" }, { status: 500 });
  }
}
