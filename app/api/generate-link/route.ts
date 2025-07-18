import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies as getCookies } from 'next/headers';

export async function POST(req: Request) {
  const requestUrl = new URL(req.url);
  const { email } = await req.json();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      cookies: getCookies() // ✅ CORRECT FORMAT
    }
  );

  const { data, error } = await supabase.auth.admin.generateLink({
    type: 'signup',
    email,
    password: 'temporary-placeholder-password',
    options: {
      redirectTo: `${requestUrl.origin}/auth/callback`
    }
  });

  if (error) {
    console.error('Generate link failed:', error.message);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
