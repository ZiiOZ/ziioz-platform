import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function POST(req: Request) {
  const requestUrl = new URL(req.url);
  const { email } = await req.json();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { data, error } = await supabase.auth.admin.generateLink({
    type: 'recovery',
    email,
    options: {
      redirectTo: `${requestUrl.origin}/auth/callback`,
    },
  });

  if (error) {
    console.error('Reset link error:', error.message);
    return NextResponse.json({ success: false, message: 'Reset email failed.' }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Reset email sent.' });
}
