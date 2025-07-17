import { NextResponse } from 'next/server'
import postmark from 'postmark'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
)

const serverToken = process.env.POSTMARK_API_KEY!
const fromEmail = 'support@ziioz.com'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!serverToken || !email) {
    return NextResponse.json({ error: 'Missing Postmark token or email' }, { status: 400 })
  }

  // Store user in Supabase
  const { data, error } = await supabase
    .from('users')
    .insert([{ email }])
    .select()

  // If user already exists or insert failed, continue anyway
  if (error && !error.message.includes('duplicate')) {
    return NextResponse.json({ error: 'Failed to register user', detail: error.message }, { status: 500 })
  }

  // Send welcome email
  const client = new postmark.ServerClient(serverToken)

  try {
    await client.sendEmail({
      From: fromEmail,
      To: email,
      Subject: 'Welcome to ZiiOZ 🚀',
      HtmlBody: `
        <h1>Welcome to ZiiOZ!</h1>
        <p>You're in. Your creative journey starts now.</p>
        <p>Thanks for joining!</p>
        <p>– The ZiiOZ Team</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Email send failed', detail: err }, { status: 500 })
  }
}
