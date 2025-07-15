import { NextRequest, NextResponse } from "next/server";
import { sendBasicEmail } from "../../../src/utils/sendEmail";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Missing email" },
        { status: 400 }
      );
    }

    await sendBasicEmail(
      email,
      "Welcome to ZiiOZ",
      "Hi there! Thanks for joining ZiiOZ. We're excited to have you."
    );

    return NextResponse.json({ success: true }); // ✅ This line is REQUIRED
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
