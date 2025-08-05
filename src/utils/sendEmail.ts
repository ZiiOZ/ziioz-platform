// src/utils/sendEmail.ts
import { ServerClient } from "postmark";

// Initialize Postmark client with your API token
const client = new ServerClient(process.env.POSTMARK_SERVER_API_TOKEN!);

/**
 * Sends a welcome email using Postmark template.
 * @param to - The recipient's email address.
 * @param verificationLink - The Supabase email verification URL.
 */
export async function sendWelcomeEmail(to: string, verificationLink: string) {
  await client.sendEmailWithTemplate({
    From: "noreply@ziioz.com",
    To: to,
    TemplateAlias: "welcome",
    TemplateModel: {
      action_url: verificationLink,
      year: "2025"
    }
  });
}
