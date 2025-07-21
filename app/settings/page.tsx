// File: app/page.tsx

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-10">
      {/* Centered logo */}
      <img
        src="/ziioz-preview.png"
        alt="ZiiOZ App Preview"
        className="w-full max-w-md mb-8 object-contain"
      />

      {/* Welcome text */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Welcome to ZiiOZ
      </h1>

      <p className="text-center max-w-xl text-base mb-4">
        ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
      </p>

      <p className="text-center max-w-xl text-sm mb-2">
        Share, discover, and connect through fast-moving video, vivid discussions, and real-time creative posts.
      </p>

      <p className="text-center max-w-xl text-sm mb-6">
        No noise. Just you, your moment, and the world.
      </p>

      <a href="/settings" className="text-sm text-purple-600 underline">
        Settings
      </a>
    </main>
  );
}
