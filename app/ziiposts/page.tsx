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

      <section className="mb-12">
        {/* ✅ This is the key line that MUST be included */}
        <ZiiPostFeed />
      </section>

      <footer className="text-center text-xs mt-20 opacity-50">
        Powered by ZiiOZ • Street Visual Pty Ltd © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
