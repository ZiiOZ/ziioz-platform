'use client';

import ZiiPostFeed from "@/components/ZiiPostFeed";
import { useEffect } from "react";

export default function ZiiPostsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen px-4 py-10 sm:px-10 sm:py-16 bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">🚀 Welcome to ZiiOZ</h1>
      <section className="border border-dashed p-6 text-center text-gray-700 dark:text-gray-300">
        <p className="text-lg">📝 Your ZiiPost Feed will appear here soon.</p>
        <p className="text-sm mt-2 text-blue-500">This is a placeholder while we load real posts from Supabase.</p>
      </section>
      <footer className="text-center text-xs mt-20 opacity-50">
        Powered by ZiiOZ • Street Visual Pty Ltd © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
