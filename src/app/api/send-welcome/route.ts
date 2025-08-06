import { NextRequest, NextResponse } from "next/server";
import { sendWelcomeEmail } from "../../../utils/sendEmail";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Missing email" },
        { status: 400 }
      );
    }

    const verificationLink = "https://ziioz.com/verify/example";

    await sendWelcomeEmail(email, verificationLink);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
