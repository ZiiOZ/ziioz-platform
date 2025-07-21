export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      {/* Main ZiiOZ Preview Image */}
      <img
        src="/ziioz-main-preview.png"
        alt="ZiiOZ App Preview"
        className="w-full max-w-xs md:max-w-sm object-contain"
      />

      {/* Welcome Text Block */}
      <div className="text-center mt-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Welcome to ZiiOZ</h1>
        <p className="text-gray-700 max-w-xl mx-auto text-base">
          ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.<br />
          Share, discover, and connect through fast-moving video, vivid discussions, and real-time creative posts.<br />
          No noise. Just you, your moment, and the world.
        </p>
      </div>

      {/* Settings Link */}
      <a href="/settings" className="text-blue-600 mt-10 underline">
        Settings
      </a>
    </main>
  );
}
