import { NextResponse } from 'next/server'
import postmark from 'postmark'

// Load from Vercel env vars
const serverToken = process.env.POSTMARK_SERVER_API_TOKEN
const fromEmail = process.env.POSTMARK_FROM_EMAIL || 'support@ziioz.com'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!serverToken || !email) {
      return NextResponse.json({ error: 'Missing Postmark token or email' }, { status: 400 })
    }

    const client = new postmark.ServerClient(serverToken)

    await client.sendEmail({
      From: fromEmail,
      To: email,
      Subject: '🚀 Welcome to ZiiOZ!',
      HtmlBody: `
        <div style="font-family: sans-serif; line-height: 1.6">
          <h1 style="color:#111">Welcome to <strong>ZiiOZ</strong> 🎉</h1>
          <p>We’re thrilled to have you on board.</p>
          <p>Start uploading, flicking, and boosting your way to creative success.</p>
          <p style="margin-top:2em;">– The ZiiOZ Team</p>
          <hr style="margin-top:2em;"/>
          <small style="color:#888">This email was sent to ${email}</small>
        </div>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('SendWelcome Error:', error)
    return NextResponse.json({ error: 'Email send failed' }, { status: 500 })
  }
}
