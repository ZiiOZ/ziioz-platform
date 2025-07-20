import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4 py-12">
      {/* Logo */}
      <Image
        src="/logo-black.png"
        alt="ZiiOZ Logo"
        width={96}
        height={96}
        className="mb-6"
      />

      {/* Tabs */}
      <div className="flex gap-6 text-lg font-semibold mb-6">
        <span className="hover:underline cursor-pointer">🔥 Trending</span>
        <span className="hover:underline cursor-pointer">✨ Fresh</span>
        <span className="hover:underline cursor-pointer">🖤 Underground</span>
      </div>

      {/* iPhone Mockup */}
      <Image
        src="/mockup-iphone-ziioz-tabs.png"
        alt="ZiiOZ App Preview"
        width={300}
        height={600}
        className="rounded-2xl shadow-xl mb-6"
      />

      {/* Tagline */}
      <p className="text-center text-lg text-gray-800 max-w-xl px-4 leading-relaxed">
        <strong>ZiiOZ</strong> is the next-gen media platform where creators, communities,
        and trendsetters come together. Experience the next wave of social.
      </p>
    </main>
  );
}
