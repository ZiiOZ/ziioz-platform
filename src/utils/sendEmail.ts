import postmark from "postmark";

export async function sendBasicEmail(
  to: string,
  subject: string,
  body: string
) {
  console.log("Loaded Postmark token:", process.env.POSTMARK_SERVER_API_TOKEN);

  const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_API_TOKEN as string);

  const result = await client.sendEmail({
    From: "support@ziioz.com",
    To: to,
    Subject: subject,
    TextBody: body,
  });

  console.log("Postmark send result:", result);

  return result;
}
