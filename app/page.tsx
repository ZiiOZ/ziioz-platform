// File: app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-10 min-h-screen">
      {/* Main Image */}
      <Image
        src="/ziioz-main-preview.png"
        alt="ZiiOZ Preview"
        width={512}
        height={384}
        className="object-contain w-full max-w-lg mb-8"
        priority
      />

      {/* Text Content */}
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-extrabold mb-4">Welcome to ZiiOZ</h1>
        <p className="mb-2">
          ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
        </p>
        <p className="mb-2">
          Share, discover, and connect through fast-moving video, vivid discussions, and real-time creative posts.
        </p>
        <p className="mb-6">No noise. Just you, your moment, and the world.</p>

        <Link href="/settings" className="text-sm underline text-purple-700">
          Settings
        </Link>
      </div>
    </main>
  );
}
