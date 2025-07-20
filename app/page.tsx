export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <img
        src="/settings/logo-black.png"
        alt="ZiiOZ Logo"
        className="w-24 h-auto mb-6"
      />

      <div className="flex gap-4 text-lg font-semibold mb-4">
        <span>🔥 Trending</span>
        <span>✨ Fresh</span>
        <span>🖤 Underground</span>
      </div>

      <img
        src="/settings/mockup-iphone-ziioz-tabs.png"
        alt="ZiiOZ App Preview"
        className="w-[300px] max-w-full rounded-xl shadow-xl mb-6"
      />

      <p className="text-center text-gray-700 text-sm">
        Experience the next wave of social.
      </p>
    </main>
  );
}
