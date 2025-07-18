import { NextResponse } from "next/server";
import { ServerClient } from "postmark";

const postmark = new ServerClient(process.env.POSTMARK_API_KEY!);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    const result = await postmark.sendEmail({
      From: "support@ziioz.com", // ✅ Your verified Postmark sender
      To: email,
      Subject: "Reset Your ZiiOZ Password",
      HtmlBody: `<p>Click the link below to reset your password:</p>
                 <p><a href="https://www.ziioz.com/reset?email=${encodeURIComponent(email)}">Reset Password</a></p>`,
      TextBody: `Reset your password by visiting: https://www.ziioz.com/reset?email=${email}`,
      MessageStream: "outbound", // ✅ Default stream unless you're using transactional/bulk
    });

    console.log("Email sent result:", result);

    return NextResponse.json({ success: true, message: "Reset email sent." });
  } catch (error: any) {
    console.error("Postmark error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Reset email failed." },
      { status: 500 }
    );
  }
}
