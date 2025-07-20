export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4 bg-white">
      <img
        src="/settings/logo-black.png"
        alt="ZiiOZ Logo"
        className="w-24 mt-8 mb-4"
      />
      <div className="text-lg font-semibold mb-4">
        Trending&nbsp;&nbsp;Fresh&nbsp;&nbsp;Underground
      </div>
      <img
        src="/mockup-iphone-ziioz-tabs.png"
        alt="ZiiOZ App Preview"
        className="max-w-xs border rounded-xl shadow-lg"
      />
      <p className="text-sm mt-6 text-center px-4">
        Experience the next wave of social.
      </p>
    </div>
  );
}
