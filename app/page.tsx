export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8 max-w-7xl w-full items-start">
        {/* LEFT: Phones stacked */}
        <div className="flex flex-col gap-6 items-center md:items-start w-full md:w-1/2">
          <img src="/phones-preview.png" alt="ZiiOZ Phone Preview 1" className="w-full max-w-xs rounded-xl shadow-md" />
          <img src="/phones-preview.png" alt="ZiiOZ Phone Preview 2" className="w-full max-w-xs rounded-xl shadow-md" />
          <img src="/phones-preview.png" alt="ZiiOZ Phone Preview 3" className="w-full max-w-xs rounded-xl shadow-md" />
          <img src="/phones-preview.png" alt="ZiiOZ Phone Preview 4" className="w-full max-w-xs rounded-xl shadow-md" />
        </div>

        {/* RIGHT: Text description */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <img src="/settings/logo-black.png" alt="ZiiOZ Logo" className="w-24 mb-2" />
          <h1 className="text-3xl font-bold">Welcome to ZiiOZ</h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
            <br /><br />
            Share, discover, and connect through fast-moving video, viral discussions, and real-time creative power.
            <br /><br />
            No noise. Just you, your moment, and the world.
          </p>
        </div>
      </div>
    </main>
  );
}
