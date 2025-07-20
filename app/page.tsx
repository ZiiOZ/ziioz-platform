export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-8">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-10 py-16">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/ziioz-preview.png"
            alt="ZiiOZ App Preview"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Welcome to <span className="text-black">ZiiOZ</span></h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
          </p>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-4">
            Share, discover, and connect through fast-moving video, viral discussions, and real-time creative power.
          </p>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mt-4">
            No noise. Just you, your moment, and the world.
          </p>
        </div>
      </div>
    </main>
  );
}
