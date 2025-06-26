import { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);


const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Only POST allowed' });

  const { user_id, email } = req.body;
  if (!user_id || !email) return res.status(400).json({ error: 'Missing user_id or email' });

  try {
    const account = await stripe.accounts.create({
      type: 'express',
      email,
      capabilities: { transfers: { requested: true } },
    });

    await supabase
      .from('profiles')
      .update({ stripe_account_id: account.id })
      .eq('id', user_id);

    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: 'https://ziioz.com/ziipay',
      return_url: 'https://ziioz.com/ziipay?success=true',
      type: 'account_onboarding',
    });

    res.status(200).json({ url: accountLink.url });
  } catch (err: any) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: 'Stripe setup failed' });
  }
}
