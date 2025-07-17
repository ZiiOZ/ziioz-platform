import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 })
  }

  // Placeholder for future password reset logic
  return NextResponse.json({ success: true, message: `Reset link sent to ${email}` })
}
