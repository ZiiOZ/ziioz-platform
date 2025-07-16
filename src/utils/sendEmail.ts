import { ServerClient } from "postmark";

const client = new ServerClient(process.env.POSTMARK_SERVER_API_TOKEN!);

/**
 * Send a welcome email to the new user.
 * @param to The recipient's email address.
 * @param verificationLink The Supabase email verification URL.
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
