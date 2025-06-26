import type { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Missing title' });
  }

  const prompt = `Generate 5 relevant, short, popular hashtags for a video titled: "${title}". Respond as comma-separated tags only, no hashtags symbol.`;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4',
    });

    const hashtags = completion.choices[0].message.content;
    res.status(200).json({ tags: hashtags });
  } catch (error) {
    res.status(500).json({ error: 'Tag generation failed' });
  }
}
