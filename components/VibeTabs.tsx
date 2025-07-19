'use client';

import Image from 'next/image';
import Link from 'next/link';
import PostPreviewCard from '@/components/post-preview-card';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black px-4 py-8">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image src="/ziioz-logo-black.png" alt="ZiiOZ Logo" width={160} height={50} priority />
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8">
        <button className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100">Trending</button>
        <button className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100">Fresh</button>
        <button className="px-4 py-2 rounded-md border border-gray-300 text-sm hover:bg-gray-100">Underground</button>
      </div>

      {/* Post Preview Card */}
      <div className="max-w-xl mx-auto">
        <PostPreviewCard
          username="@ziioz_creator"
          timeAgo="5 mins ago"
          text="Catching the vibe with ZiiOZ. The world’s next movement is just getting started..."
        />
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-xs text-gray-400 border-t border-gray-200 pt-6">
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
        <p>&copy; 2025 ZiiOZ. All rights reserved.</p>
      </footer>
    </main>
  );
}
