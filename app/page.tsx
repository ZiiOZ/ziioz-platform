'use client';

import ZiiPostFeed from '@/components/ZiiPostFeed';
import ZiiFlickFeed from '@/components/ZiiFlickFeed'; // Optional
import ZiiPayPreview from '@/components/ZiiPayPreview'; // Optional
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen px-4 py-10 sm:px-10 sm:py-16 bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">🚀 Welcome to ZiiOZ</h1>
      
      {/* Core Feed */}
      <section className="mb-12">
        <ZiiPostFeed />
      </section>

      {/* Optional Flick Feed */}
      {/* <section className="mb-12">
        <ZiiFlickFeed />
      </section> */}

      {/* Optional ZiiPay Preview */}
      {/* <section className="mb-12">
        <ZiiPayPreview />
      </section> */}

      <footer className="text-center text-xs mt-20 opacity-50">
        Powered by ZiiOZ • Street Visual Pty Ltd © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
