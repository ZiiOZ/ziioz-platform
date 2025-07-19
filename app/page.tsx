import LogoHeader from "@/components/LogoHeader";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <LogoHeader />

      <div className="flex justify-center gap-4 mt-6">
        <button className="px-5 py-2 rounded-full border border-black text-sm hover:bg-black hover:text-white transition">Trending</button>
        <button className="px-5 py-2 rounded-full border border-black text-sm hover:bg-black hover:text-white transition">Fresh</button>
        <button className="px-5 py-2 rounded-full border border-black text-sm hover:bg-black hover:text-white transition">Underground</button>
      </div>

      <div className="mt-12 max-w-md mx-auto border border-gray-300 rounded-2xl shadow p-6">
        <div className="text-sm font-semibold mb-1 text-gray-800">@ziioz_user</div>
        <div className="text-xl font-bold mb-2">Post Preview</div>
        <div className="text-sm text-gray-600">124 Likes · 18 Comments · 9 Shares</div>
      </div>

      <footer className="mt-20 text-center text-xs text-gray-500 pb-10 space-x-4">
        <a href="/settings/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/settings/terms" className="hover:underline">Terms of Service</a>
        <a href="/settings/about" className="hover:underline">About</a>
      </footer>
    </div>
  );
}
