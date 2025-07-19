export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white text-black">
      {/* Flush top logo */}
      <div className="w-full flex justify-center pt-6">
        <img
          src="/settings/logo-black.png"
          alt="ZiiOZ Logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      {/* Tab bar under logo */}
      <div className="mt-4 flex gap-8 text-sm font-semibold">
        <button className="hover:underline">Trending</button>
        <button className="hover:underline">Fresh</button>
        <button className="hover:underline">Underground</button>
      </div>
    </div>
  );
}
