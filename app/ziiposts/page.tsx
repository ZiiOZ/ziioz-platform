'use client';

import { useEffect } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import LogoutButton from '@/components/LogoutButton';

export default function ZiiPostsPage() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  // 🔐 Redirect if not logged in
  useEffect(() => {
    if (!session) {
      router.push('/auth');
    }
  }, [session]);

  if (!session) {
    return <div className="p-6">🔐 Please log in to view posts</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 ZiiPosts Feed</h1>
      <p className="text-sm text-gray-600 mb-2">
        Logged in as: <strong>{session.user.email}</strong>
      </p>
      <LogoutButton />

      {/* 🔧 Replace below with real post feed logic */}
      <div className="mt-6 p-4 border rounded bg-white shadow">
        <p>This route is safe ✅</p>
        <p>Post feed will be loaded here...</p>
      </div>
    </div>
  );
}
