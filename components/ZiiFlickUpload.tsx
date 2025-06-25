'use client'
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export default function ZiiFlickUpload() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [creatorName, setCreatorName] = useState('');
  const [tags, setTags] = useState('');

  const handleUpload = async () => {
    if (!videoFile) return;

    const filename = `${uuidv4()}.${videoFile.name.split('.').pop()}`;
    const { error: uploadError } = await supabase.storage
      .from('ziiflicks')
      .upload(filename, videoFile);

    if (uploadError) {
      alert('Upload failed');
      return;
    }

    const publicURL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/ziiflicks/${filename}`;
    const { error: dbError } = await supabase.from('ziiflicks').insert([
      {
        title,
        video_url: publicURL,
        creator_name: creatorName,
        tags,
        is_visible: true
      }
    ]);

    if (dbError) {
      alert('Database insert failed');
    } else {
      alert('Upload successful!');
      setTitle('');
      setCreatorName('');
      setTags('');
      setVideoFile(null);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Upload ZiiFlick 🎥</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full border mb-2 p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Creator Name"
        className="w-full border mb-2 p-2"
        value={creatorName}
        onChange={(e) => setCreatorName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags"
        className="w-full border mb-2 p-2"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <input
        type="file"
        accept="video/*"
        className="w-full mb-2"
        onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
      />
      <button
        onClick={handleUpload}
        className="bg-black text-white py-2 px-4 rounded w-full"
      >
        Upload
      </button>
    </div>
  );
}
