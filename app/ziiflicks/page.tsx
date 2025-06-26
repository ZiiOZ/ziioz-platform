'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function ZiiFlicksPublicPage() {
  const supabase = createClientComponentClient();
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPublicVideos = async () => {
      const { data, error } = await supabase
        .from('ziiflicks')
        .select('*')
        .eq('is_visible', true)
        .order('created_at', { ascending: false });

      if (!error) {
        setVideos(data);
      }

      setLoading(false);
    };

    fetchPublicVideos();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎥 ZiiFlicks Public Feed</h1>

      {loading ? (
        <p className="text-gray-500">Loading videos...</p>
      ) : videos.length === 0 ? (
        <p className="text-gray-400">No public videos available yet.</p>
      ) : (
        <div className="space-y-6">
          {videos.map((video) => (
            <div key={video.id} className="border rounded-xl p-4 shadow-sm bg-white">
              <video
                src={video.video_url}
                controls
                className="w-full rounded mb-2"
              />
              <p className="text-xs text-gray-500">
                {video.created_at?.slice(0, 19).replace('T', ' ')}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
