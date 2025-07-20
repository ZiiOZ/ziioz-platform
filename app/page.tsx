// app/page.tsx
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
      <img
        src="/logo-black.png"
        alt="ZiiOZ Logo"
        className="w-32 h-auto mb-4"
      />
      <div className="flex gap-6 text-lg font-medium mb-6">
        <span>Trending</span>
        <span>Fresh</span>
        <span>Underground</span>
      </div>
      <img
        src="/mockup-iphone-ziioz-tabs.png"
        alt="ZiiOZ App Preview"
        className="w-[300px] max-w-full rounded-xl shadow-lg mb-4"
      />
      <p className="text-center text-gray-700 text-sm">
        Experience the next wave of social.
      </p>
    </main>
  );
}
