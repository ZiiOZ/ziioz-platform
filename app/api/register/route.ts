// app/api/register/route.ts
import { ServerClient } from "postmark";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ success: false, message: "Missing email." }), { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!
    );

    const { error } = await supabase
      .from("user_emails")
      .insert([{ email }]);

    if (error) {
      console.error("Supabase insert error:", error);
      return new Response(JSON.stringify({ success: false, message: "Database error." }), { status: 500 });
    }

    const client = new ServerClient(process.env.POSTMARK_SERVER_API_TOKEN!);

    await client.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL!,
      To: email,
      Subject: "🎉 Welcome to ZiiOZ",
      HtmlBody: `<h1>You're in 🎉</h1><p>Thanks for joining ZiiOZ. Explore now!</p>`,
    });

    return new Response(JSON.stringify({ success: true, message: `Registered ${email}` }), { status: 200 });
  } catch (err) {
    console.error("Error in /api/register:", err);
    return new Response(JSON.stringify({ success: false, message: "Something went wrong." }), { status: 500 });
  }
}
