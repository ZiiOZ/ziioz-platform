export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans flex flex-col items-center px-4 py-8">
      {/* Logo */}
      <div className="mb-6">
        <img src="/ziioz-logo-black.png" alt="ZiiOZ Logo" className="h-12" />
      </div>

      {/* Tagline */}
      <h1 className="text-2xl font-semibold mb-2 text-center">
        Catch the Vibe. Join the Movement.
      </h1>
      <p className="text-sm text-gray-600 mb-8 text-center max-w-md">
        ZiiOZ is the next evolution in social discovery — where creators, stories,
        and moments collide in one powerful space. Built to be bold, real, and
        unapologetically yours.
      </p>

      {/* App UI Preview */}
      <div className="mb-10">
        <img
          src="/mockup-iphone-ziioz-tabs.png"
          alt="ZiiOZ App Preview"
          className="w-[300px] rounded-xl shadow-xl border"
        />
      </div>

      {/* Tabs Preview */}
      <div className="flex space-x-4 mb-6">
        <button className="px-4 py-2 rounded-full bg-black text-white text-sm shadow">
          🔥 Trending
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-black text-sm shadow">
          ✨ Fresh
        </button>
        <button className="px-4 py-2 rounded-full bg-gray-100 text-black text-sm shadow">
          🖤 Underground
        </button>
      </div>

      {/* Feature Highlights */}
      <ul className="text-sm text-gray-700 space-y-2 text-center">
        <li>• Real-time creator uploads</li>
        <li>• Boost, comment, and interact</li>
        <li>• ZiiPay enabled monetization (coming soon)</li>
        <li>• Built for iOS, Android, and Web</li>
      </ul>

      {/* Footer */}
      <footer className="mt-16 text-xs text-gray-500 space-x-4">
        <a href="/about" className="hover:underline">About</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/terms" className="hover:underline">Terms</a>
      </footer>
    </main>
  );
}
