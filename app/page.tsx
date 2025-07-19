// app/page.tsx
'use client';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-start pt-10 px-4">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/logo-black.png"
          alt="ZiiOZ Logo"
          width={140}
          height={40}
          priority
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-lg font-medium mb-8 border-b border-gray-200">
        <span className="cursor-pointer pb-2 border-b-2 border-black">Trending</span>
        <span className="cursor-pointer pb-2 text-gray-500 hover:text-black">Fresh</span>
        <span className="cursor-pointer pb-2 text-gray-500 hover:text-black">Underground</span>
      </div>

      {/* Phone Mockup */}
      <div className="w-full max-w-sm">
        <Image
          src="/mockup-phone.png"
          alt="ZiiOZ App Preview"
          width={400}
          height={800}
          className="rounded-xl shadow-xl mx-auto"
        />
      </div>

      {/* Optional Tagline */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Experience the next wave of social.
      </p>
    </main>
  );
}
