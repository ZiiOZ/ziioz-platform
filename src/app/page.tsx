import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen py-10 px-4 text-center bg-white text-black">
      <Image
        src="/logo-black.png"
        alt="ZiiOZ Logo"
        width={120}
        height={40}
        className="mb-4"
      />

      <div className="flex space-x-4 mb-6">
        <button className="px-4 py-2 rounded-xl border font-medium">🔥 Trending</button>
        <button className="px-4 py-2 rounded-xl border font-medium">✨ Fresh</button>
        <button className="px-4 py-2 rounded-xl border font-medium">🖤 Underground</button>
      </div>

      <Image
        src="/mockup-iphone-ziioz-tabs.png"
        alt="ZiiOZ iPhone preview"
        width={300}
        height={600}
        className="rounded-2xl shadow-xl"
      />

      <p className="mt-8 text-xl max-w-lg">
        Catching the vibe with ZiiOZ — the world’s next movement is just getting started...
      </p>
    </main>
  );
}
