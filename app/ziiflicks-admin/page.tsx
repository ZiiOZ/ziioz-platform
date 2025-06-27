'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ZiiFlicksAdminPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    // TEMP: Basic Admin Check (Replace with Supabase Auth for production)
    const checkAdmin = async () => {
      const session = await supabase.auth.getSession();
      const userEmail = session.data.session?.user.email;
      if (userEmail === 'admin@ziioz.com') {
        setAdmin(true);
      }
    };

    checkAdmin();

    const fetchVideos = async () => {
        .from('ziiflicks')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) setVideos(data);
    };

    fetchVideos();
  }, []);

  if (!admin) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold text-red-600">Access Denied</h1>
        <p>This page is restricted to administrators only.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">🔐 ZiiFlicks Admin Panel</h1>

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
              onClick={async () => {
                  .from('ziiflicks')
                  .update({ visible: !video.visible })
                  .eq('id', video.id);
                window.location.reload();
              }}
            >
              {video.visible ? 'Set Private' : 'Set Public'}
            </button>

            <button
              className="bg-red-600 px-3 py-1 rounded text-white text-sm"
              onClick={async () => {
                await supabase.from('ziiflicks').delete().eq('id', video.id);
                window.location.reload();
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
