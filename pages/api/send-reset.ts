import { NextApiRequest, NextApiResponse } from "next";
import { sendWelcomeEmail } from "@/src/utils/sendEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Missing email" });
  }

  try {
  await sendWelcomeEmail(email, "https://ziioz.com/verify/example");

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
