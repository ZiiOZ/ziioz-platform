import { NextApiRequest, NextApiResponse } from "next";
import { sendWelcomeEmail } from "@/utils/sendEmail";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Missing email" });
    }

    const verificationLink = "https://ziioz.com/reset-password/example";

    await sendWelcomeEmail(email, verificationLink);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending reset email:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
