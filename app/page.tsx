// app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center px-4 py-10 min-h-screen">
      {/* ZiiOZ App Preview Image */}
      <div className="w-full max-w-[700px]">
        <Image
          src="/1166b71e-1366-469b-92df-0ddff22b78fd.png"
          alt="ZiiOZ App Preview"
          width={900}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Description */}
      <div className="text-center mt-8 px-2 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to ZiiOZ</h1>
        <p className="text-base md:text-lg max-w-xl mx-auto text-gray-800">
          ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
          <br />
          Share, discover, and connect through fast-moving video, vivid discussions, and real-time creative posts.
          <br />
          No noise. Just you, your moment, and the world.
        </p>
      </div>

      {/* Settings Button */}
      <div className="mt-10">
        <Link href="/settings" className="text-blue-600 hover:underline text-sm">
          Settings
        </Link>
      </div>
    </main>
  );
}
