import postmark from "postmark";

// Create your Postmark client
const client = new postmark.ServerClient("b8c24e71-926e-41a3-8698-d52a6fabbde2");

// Send the email
client.sendEmail({
  From: "support@ziioz.com",
  To: "wesbuhagiar@gmail.com",
  Subject: "ZiiOZ Test Email",
  TextBody: "This is a test email sent via Postmark."
})
.then(() => {
  console.log("✅ Test email sent!");
})
.catch(error => {
  console.error("❌ Error sending:", error);
});
