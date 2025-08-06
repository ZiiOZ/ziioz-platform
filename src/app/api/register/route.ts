import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendWelcomeEmail } from '../../../utils/sendEmail';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "https://ziioz.com" // where to redirect after verification
    }
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  // If Supabase provides a session token, create a verification link.
  const verificationLink = data.session?.access_token
    ? `https://ziioz.com/verify?token=${data.session.access_token}`
    : "";

  if (verificationLink) {
    await sendWelcomeEmail(email, verificationLink);
  }

  return NextResponse.json({ message: "Signup successful. Please check your email." });
}
