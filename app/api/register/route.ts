import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  )

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ message: 'User registered', data })
}
