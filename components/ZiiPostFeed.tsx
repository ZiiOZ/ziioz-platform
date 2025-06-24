'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Post = {
  id: string;
  title?: string;
  content?: string;
  image_url?: string;
  created_at: string;
};

export default function ZiiPostFeed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Failed to fetch posts:', error.message);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading posts...</p>;
  }

  if (posts.length === 0) {
    return (
      <div className="border p-6 text-center text-gray-500">
        <p>📭 No posts yet. Be the first to share something!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="border rounded-lg p-4 bg-white dark:bg-zinc-900 shadow">
          {post.image_url && (
            <img
              src={post.image_url}
              alt="Post"
              className="w-full h-auto rounded mb-4"
            />
          )}
          <h3 className="font-bold text-lg">{post.title || 'Untitled Post'}</h3>
          <p>{post.content || 'No content provided.'}</p>
          <p className="text-xs mt-2 text-gray-400">
            Posted on {new Date(post.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
