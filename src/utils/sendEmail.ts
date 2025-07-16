import { ServerClient } from "postmark";

// Create Postmark client
const client = new ServerClient(process.env.POSTMARK_SERVER_API_TOKEN!);

// Function to send a simple test email
export async function sendTestEmail() {
  try {
    const result = await client.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL!,
      To: "assist.ziioz@gmail.com", // Replace with your test recipient
      Subject: "ZiiOZ Test Email",
      HtmlBody: "<strong>This is a test email from ZiiOZ.</strong>",
      TextBody: "This is a test email from ZiiOZ."
    });
    console.log("Test email sent:", result);
    return result;
  } catch (error) {
    console.error("Error sending test email:", error);
    throw error;
  }
}

// Function to send a welcome email to a specific recipient
export async function sendWelcomeEmail(recipient: string) {
  try {
    const result = await client.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL!,
      To: recipient,
      Subject: "Welcome to ZiiOZ",
      HtmlBody: `
        <h1>Welcome to ZiiOZ 🎉</h1>
        <p>Thanks for joining our platform. We're excited to have you on board.</p>
      `,
      TextBody: "Welcome to ZiiOZ! Thanks for joining our platform."
    });
    console.log("Welcome email sent:", result);
    return result;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw error;
  }
}
