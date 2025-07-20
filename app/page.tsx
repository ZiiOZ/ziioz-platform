export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white text-black">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        {/* Image */}
        <img
          src="/ziioz-preview.png"
          alt="ZiiOZ Preview"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain mb-8"
        />

        {/* Text block below */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to ZiiOZ</h1>
        <p className="text-base md:text-lg leading-relaxed">
          ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
          <br /><br />
          Share, discover, and connect through fast video, viral discussions, and real-time creative power.
          <br /><br />
          No noise. Just you, your moment, and the world.
        </p>
      </div>
    </main>
  );
}
