import { NextResponse } from "next/server";
import { sendTestEmail } from "@/utils/sendEmail";

export async function GET() {
  try {
    await sendTestEmail();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) });
  }
}
