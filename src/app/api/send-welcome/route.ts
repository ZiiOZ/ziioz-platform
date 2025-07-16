import { NextRequest, NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/utils/sendEmail";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { success: false, message: "Missing email" },
      { status: 400 }
    );
  }

  const verificationLink = "https://ziioz.com/verify/example";

  // THIS IS THE LINE THAT MUST BE CORRECT:
  await sendWelcomeEmail(email, verificationLink);

  return NextResponse.json({ success: true });
}
