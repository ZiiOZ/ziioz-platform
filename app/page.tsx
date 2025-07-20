"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row items-center max-w-7xl gap-10">
        {/* IMAGE */}
        <div className="w-[300px] sm:w-[360px] md:w-[420px]">
          <Image
            src="/ziioz-preview.png"
            alt="ZiiOZ App"
            width={500}
            height={1000}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* TEXT */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to <br /><span className="text-5xl">ZiiOZ</span></h1>
          <p className="text-lg mb-3">
            ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
          </p>
          <p className="text-lg mb-3">
            Share, discover, and connect through fast-moving video, viral discussions, and real-time creative power.
          </p>
          <p className="text-lg font-medium">
            No noise. Just you, your moment, and the world.
          </p>
        </div>
      </div>
    </main>
  );
}
