import { NextRequest, NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/utils/sendEmail";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Missing email" },
        { status: 400 }
      );
    }

    // This is a dummy link for testing purposes
    const verificationLink = "https://ziioz.com/verify/test-link";

    // THIS CALL IS CORRECT: it passes both email and link
    await sendWelcomeEmail(email, verificationLink);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
