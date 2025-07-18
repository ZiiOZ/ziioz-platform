// app/api/generate-link/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const { email } = await req.json();

  const { data, error } = await supabase.auth.admin.generateLink({
    type: 'signup',
    email,
    options: {
      redirectTo: 'https://ziioz.com/confirm' // Or wherever your redirect lives
    }
  });

  if (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const confirmation_url = data?.properties?.action_link;

  return NextResponse.json({ confirmation_url });
}
