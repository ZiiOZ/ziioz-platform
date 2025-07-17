import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email } = await req.json()

  const supabaseKey = process.env.SUPABASE_KEY
  const supabaseUrl = process.env.SUPABASE_URL

  if (!supabaseKey || !supabaseUrl) {
    return NextResponse.json({ error: 'Supabase credentials missing' }, { status: 500 })
  }

  // Example placeholder - you can hook in Supabase Auth or DB logic
  return NextResponse.json({ success: true, message: `Registered ${email}` })
}
