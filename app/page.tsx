export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center">
      {/* Logo top */}
      <header className="w-full flex justify-center pt-6">
        <img
          src="/settings/logo-black.png"
          alt="ZiiOZ Logo"
          className="w-16 h-16 object-contain"
        />
      </header>

      {/* Tabs */}
      <nav className="mt-6 flex gap-6 font-semibold text-sm border-b pb-2">
        <button className="hover:text-gray-600">Trending</button>
        <button className="hover:text-gray-600">Fresh</button>
        <button className="hover:text-gray-600">Underground</button>
      </nav>

      {/* Mock Feed Phone Preview */}
      <section className="mt-10 w-[320px] h-[640px] border border-gray-300 rounded-2xl shadow-lg overflow-hidden bg-gray-100">
        {/* Fake post */}
        <div className="p-4 border-b border-gray-300">
          <div className="font-bold">@ziioz_creator</div>
          <img
            src="/placeholder-profile.png"
            alt="Post"
            className="w-full mt-2 rounded-md"
          />
          <p className="text-sm mt-2">This is a mock post inside the phone preview.</p>
        </div>
      </section>
    </main>
  );
}
