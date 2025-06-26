'use client';

import { useEffect, useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

export default function ZiiFlicksAdminPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_KEY) {
      console.error("Missing Supabase env vars.");
      return;
    }

    const client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY
    );
    setSupabase(client);
  }, []);

  useEffect(() => {
    if (!supabase) return;

    const fetchVideos = async () => {
      const { data, error } = await supabase
        .from('ziiflicks')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) setVideos(data);
    };

    fetchVideos();
  }, [supabase]);

  const handleToggleVisibility = async (video: any) => {
    if (!supabase) return;
    await supabase
      .from('ziiflicks')
      .update({ visible: !video.visible })
      .eq('id', video.id);
    location.reload();
  };

  const handleDelete = async (video: any) => {
    if (!supabase) return;
    await supabase.from('ziiflicks').delete().eq('id', video.id);
    location.reload();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🔐 ZiiFlicks Admin Panel</h1>

      {videos.map((video) => (
        <div key={video.id} className="mb-6 border rounded p-4 bg-white shadow">
          <video
            src={video.video_url}
            controls
            className="w-full max-h-[400px] rounded"
          />
          <h3 className="mt-2 font-semibold">{video.title}</h3>
          <p className="text-sm text-gray-500">{video.creator}</p>

          <div className="mt-2 flex gap-4">
            <button
              className={`px-3 py-1 rounded text-white text-sm ${
                video.visible ? 'bg-green-600' : 'bg-gray-400'
              }`}
              onClick={() => handleToggleVisibility(video)}
            >
              {video.visible ? 'Set Private' : 'Set Public'}
            </button>

            <button
              className="bg-red-600 px-3 py-1 rounded text-white text-sm"
              onClick={() => handleDelete(video)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
