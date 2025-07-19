import LogoHeader from "@/components/LogoHeader";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <LogoHeader />

      <div className="flex justify-center gap-4 mt-4">
        <button className="px-4 py-2 rounded-full border hover:bg-black hover:text-white transition text-sm">
          🔥 Trending
        </button>
        <button className="px-4 py-2 rounded-full border hover:bg-black hover:text-white transition text-sm">
          ✨ Fresh
        </button>
        <button className="px-4 py-2 rounded-full border hover:bg-black hover:text-white transition text-sm">
          🖤 Underground
        </button>
      </div>

      <div className="mt-10 max-w-md mx-auto border rounded-2xl p-6 shadow-sm">
        <div className="font-semibold text-sm mb-2">@ziioz_user</div>
        <div className="text-lg font-bold mb-1">Post Preview</div>
        <div className="text-xs text-gray-600">124 Likes · 18 Comments · 9 Shares</div>
      </div>

      <footer className="mt-20 text-center text-xs text-gray-500 pb-10">
        <a href="/settings/privacy" className="mx-2 hover:underline">Privacy Policy</a>
        <a href="/settings/terms" className="mx-2 hover:underline">Terms of Service</a>
        <a href="/settings/about" className="mx-2 hover:underline">About</a>
      </footer>
    </div>
  );
}
