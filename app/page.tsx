// File: app/page.tsx

export default function LandingPage() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-6 md:px-24 py-10">
      {/* Left: Image Container */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-[280px] max-w-full">
          <img
            src="/ziioz-preview.png"
            alt="ZiiOZ Preview"
            className="w-full h-auto object-contain rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Welcome to ZiiOZ</h1>
        <p className="text-lg mb-4">
          ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
        </p>
        <p className="text-lg mb-4">
          Share, discover, and connect through fast-moving video, viral discussions, and real-time creative power.
        </p>
        <p className="text-lg">No noise. Just you, your moment, and the world.</p>
      </div>
    </main>
  );
}
