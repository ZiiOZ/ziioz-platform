import { NextResponse } from 'next/server'
import postmark from 'postmark'

const serverToken = process.env.POSTMARK_API_KEY
const fromEmail = 'support@ziioz.com'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!serverToken || !email) {
    return NextResponse.json({ error: 'Missing Postmark token or email' }, { status: 400 })
  }

  const client = new postmark.ServerClient(serverToken)

  try {
    await client.sendEmail({
      From: fromEmail,
      To: email,
      Subject: 'Welcome to ZiiOZ 🚀',
      HtmlBody: `
        <h1>Welcome to ZiiOZ!</h1>
        <p>Your creative journey starts now.</p>
        <p>Thanks for joining!</p>
        <p>– The ZiiOZ Team</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
  }
}
