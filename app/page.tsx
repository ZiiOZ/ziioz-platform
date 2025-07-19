import LogoHeader from "@/components/LogoHeader";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans px-4">
      <LogoHeader />

      <div className="flex justify-center gap-3 mt-6">
        <button className="px-4 py-1.5 rounded-full border border-gray-300 hover:bg-black hover:text-white transition text-sm">
          🔥 Trending
        </button>
        <button className="px-4 py-1.5 rounded-full border border-gray-300 hover:bg-black hover:text-white transition text-sm">
          ✨ Fresh
        </button>
        <button className="px-4 py-1.5 rounded-full border border-gray-300 hover:bg-black hover:text-white transition text-sm">
          🖤 Underground
        </button>
      </div>

      <div className="mt-10 max-w-md mx-auto border rounded-2xl p-6 shadow-sm">
        <div className="font-semibold text-sm mb-2">@ziioz_user</div>
        <div className="text-lg font-bold mb-1">Post Preview</div>
        <div className="text-xs text-gray-600">124 Likes · 18 Comments · 9 Shares</div>
      </div>

      <footer className="mt-16 text-center text-xs text-gray-500 pb-8 space-x-4">
        <a href="/settings/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/settings/terms" className="hover:underline">Terms of Service</a>
        <a href="/settings/about" className="hover:underline">About</a>
      </footer>
    </div>
  );
}
