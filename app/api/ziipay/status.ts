import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export default async function handler(req, res) {
  const { user_id } = req.query;

  const { data, error } = await supabase
    .from('profiles')
    .select('stripe_payouts_enabled, stripe_details_submitted')
    .eq('id', user_id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
}
