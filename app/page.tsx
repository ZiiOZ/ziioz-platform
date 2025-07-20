export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4 py-12">
      <img
        src="/logo-black.png"
        alt="ZiiOZ Logo"
        className="w-24 h-auto mb-4"
      />

      <div className="flex gap-6 text-lg font-semibold mb-4">
        <span>🔥 Trending</span>
        <span>✨ Fresh</span>
        <span>🖤 Underground</span>
      </div>

      <img
        src="/mockup-iphone-ziioz-tabs.png"
        alt="ZiiOZ App Preview"
        className="w-[300px] max-w-full rounded-xl shadow-lg mb-6"
      />

      <p className="text-center text-lg text-gray-800 max-w-xl px-2">
        <strong>ZiiOZ</strong> is the next-gen media platform where creators, communities,
        and trendsetters come together. Experience the next wave of social.
      </p>
    </main>
  );
}
