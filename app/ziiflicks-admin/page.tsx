'use client';
export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';

export default function ZiiFlicksAdminPage() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();
  const [videos, setVideos] = useState<any[]>([]);

  // Protect route if not signed in
  useEffect(() => {
    if (!session) router.push('/signin');
  }, [session]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase
        .from('ziiflicks')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) setVideos(data);
    };

    if (session) fetchVideos();
  }, [session, supabase]);

  const handleToggle = async (id: string, current: boolean) => {
    await supabase.from('ziiflicks').update({ visible: !current }).eq('id', id);
    window.location.reload();
  };

  const handleDelete = async (id: string) => {
    await supabase.from('ziiflicks').delete().eq('id', id);
    window.location.reload();
  };

  if (!session) return <div>Redirecting...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">🔐 ZiiFlicks Admin Panel</h1>
      {/* 👤 Optional signed-in email display */}
      <p className="text-xs text-gray-500 mb-4">Signed in as: {session.user.email}</p>

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
              onClick={() => handleToggle(video.id, video.visible)}
            >
              {video.visible ? 'Set Private' : 'Set Public'}
            </button>

            <button
              className="bg-red-600 px-3 py-1 rounded text-white text-sm"
              onClick={() => handleDelete(video.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
