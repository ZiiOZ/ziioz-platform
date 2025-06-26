'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function HomePage() {
  const [supabase, setSupabase] = useState<any>(null);
  const [videos, setVideos] = useState<any[]>([]);

  useEffect(() => {
    // Avoid creating client if env vars are missing
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_KEY) {
      console.error('Missing Supabase env vars');
      return;
    }

    const client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY
    );
    setSupabase(client);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      if (!supabase) return;

      const { data, error } = await supabase
        .from('ziiflicks')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) setVideos(data);
    };

    fetchVideos();
  }, [supabase]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🎬 Welcome to ZiiOZ</h1>

      {videos.length === 0 && (
        <p className="text-gray-500">No videos yet. Be the first to upload!</p>
      )}

      {videos.map((video) => (
        <div key={video.id} className="mb-6 border rounded p-4 bg-white shadow">
          <video
            src={video.video_url}
            controls
            className="w-full max-h-[400px] rounded"
          />
          <h3 className="mt-2 font-semibold">{video.title}</h3>
          <p className="text-sm text-gray-500">{video.creator}</p>
        </div>
      ))}
    </div>
  );
}
