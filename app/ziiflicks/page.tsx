'use client';
import { useEffect, useState } from 'react';

export default function ZiiFlicksPage() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/ziiflicks') // or call Supabase directly here
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">🎬 ZiiFlicks</h1>
      {videos.length === 0 ? (
        <p>📭 No videos yet</p>
      ) : (
        videos.map((video) => (
          <video key={video.id} src={video.url} controls className="mb-4 w-full" />
        ))
      )}
    </div>
  );
}
