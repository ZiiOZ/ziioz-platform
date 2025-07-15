import { NextApiRequest, NextApiResponse } from "next";
import { sendBasicEmail } from "@/utils/sendEmail";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, resetUrl } = req.body;

  try {
    await sendBasicEmail(
      email,
      "Reset your ZiiOZ password",
      `Click here to reset your password: ${resetUrl}`
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false });
  }
}
