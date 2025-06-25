'use client';
import { useEffect, useState } from 'react';

interface Video {
  id: string;
  url: string;
}

export default function ZiiFlicksPage() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch('/api/ziiflicks')
      .then((res) => res.json())
      .then((data) => setVideos(data as Video[])) // 🔥 Fix: tell TypeScript this is our type
      .catch((err) => {
        console.error('Error loading ZiiFlicks:', err);
        setVideos([]);
      });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">🎬 ZiiFlicks</h1>
      {videos.length === 0 ? (
        <p>📭 No videos yet</p>
      ) : (
        videos.map((video) => (
          <video
            key={video.id}
            src={video.url}
            controls
            className="mb-4 w-full rounded-lg shadow-md"
          />
        ))
      )}
    </div>
  );
}
