const postmark = require("postmark");

(async () => {
  const client = new postmark.ServerClient("b8c24e71-926e-41a3-8698-d52a6fabbde2");
  try {
    const result = await client.sendEmail({
      From: "support@ziioz.com",
      To: "wesbuhagiar@gmail.com",
      Subject: "Postmark Test",
      TextBody: "If you see this, the API token works!"
    });
    console.log("✅ SUCCESS:", result);
  } catch (err) {
    console.error("❌ ERROR:", err);
  }
})();
