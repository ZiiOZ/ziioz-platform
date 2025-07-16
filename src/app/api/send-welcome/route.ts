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

    // For now, use a dummy verification link or generate it as you prefer
    const verificationLink = "https://ziioz.com/verify/example";

    // ✅ Call the function with TWO arguments
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
