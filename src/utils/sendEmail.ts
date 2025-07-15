import { ServerClient } from "postmark";

const client = new ServerClient(process.env.POSTMARK_SERVER_API_TOKEN!);

export async function sendWelcomeEmail(toEmail: string) {
  await client.sendEmail({
    From: "noreply@ziioz.com",
    To: toEmail,
    Subject: "Welcome to ZiiOZ",
    HtmlBody: `
      <h1>Welcome to ZiiOZ 🎉</h1>
      <p>Thanks for joining our platform. We're excited to have you!</p>
    `,
    TextBody: "Welcome to ZiiOZ! Thanks for joining our platform.",
    MessageStream: "outbound" // this is the default transactional stream
  });
}
