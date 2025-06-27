'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LogoutButton from '@/components/LogoutButton';

export default function ZiiFlicksUploadPage()
  const session = useSession();
  const router = useRouter();
  const [videos, setVideos] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // 🔐 Redirect to /auth if not logged in
  useEffect(() => {
    if (!session) {
      router.push('/auth');
    }
  }, [session]);

  const isAdmin = session?.user?.email === 'youradmin@email.com'; // ✅ update this

  const fetchVideos = async () => {
      .from('ziiflicks')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setVideos(data);
  };

  useEffect(() => {
    if (session) fetchVideos();
  }, [session]);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `videos/${fileName}`;

    if (uploadError) {
      alert('Upload failed');
      setUploading(false);
      return;
    }

    const videoUrl = publicUrlData?.publicUrl;

      .from('ziiflicks')
      .insert([{ video_url: videoUrl, is_visible: true }]);

    if (!insertError) {
      setFile(null);
      fetchVideos();
    }

    setUploading(false);
  };

  const toggleVisibility = async (id: string, current: boolean) => {
      .from('ziiflicks')
      .update({ is_visible: !current })
      .eq('id', id);
    fetchVideos();
  };

  const deleteVideo = async (id: string) => {
    await supabase.from('ziiflicks').delete().eq('id', id);
    fetchVideos();
  };

  if (!session) {
    return <div className="p-6">🔐 Please log in to access ZiiFlicks Upload</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🎬 ZiiFlick Upload</h1>
      <p className="text-sm text-gray-600 mb-2">
        Logged in as: <strong>{session.user.email}</strong>
      </p>
      <LogoutButton />

      <div className="mb-6">
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          onClick={handleUpload}
          disabled={uploading || !file}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          {uploading ? 'Uploading...' : 'Upload Video'}
        </button>
      </div>

      <div className="space-y-6">
        {videos.map((video) => (
          <div key={video.id} className="border rounded-xl p-4 shadow-sm bg-white">
            <video
              src={video.video_url}
              controls
              className="w-full rounded mb-2"
            />
            <p className="text-sm text-gray-600">
              {video.created_at?.slice(0, 19).replace('T', ' ')}
            </p>

            {isAdmin && (
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => toggleVisibility(video.id, video.is_visible)}
                  className={`px-3 py-1 rounded ${
                    video.is_visible ? 'bg-yellow-500' : 'bg-gray-400'
                  } text-white text-sm`}
                >
                  {video.is_visible ? 'Hide' : 'Show'}
                </button>

                <button
                  onClick={() => deleteVideo(video.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded text-sm"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
