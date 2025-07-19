import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <div className="flex justify-center items-center py-4">
        <Image
          src="/settings/logo-black.png"
          alt="ZiiOZ Logo"
          width={80}
          height={80}
        />
      </div>

      <div className="flex justify-center gap-4 py-2">
        <button className="border px-4 py-1 rounded">🔥 Trending</button>
        <button className="border px-4 py-1 rounded">✨ Fresh</button>
        <button className="border px-4 py-1 rounded">🖤 Underground</button>
      </div>

      <div className="max-w-xl mx-auto mt-6 border rounded-lg shadow p-4">
        <div className="text-sm text-gray-500">@ziioz_creator • 5 mins ago</div>
        <div className="mt-2 font-medium">
          Catching the vibe with ZiiOZ — the world’s next movement is just getting started...
        </div>
      </div>

      <div className="max-w-xl mx-auto mt-6 border rounded-lg shadow p-4">
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder-profile.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm text-gray-500">@ziioz_user • Just now</span>
        </div>
        <div className="mt-3">
          <Image
            src="/sample-post.jpg"
            alt="Sample post"
            width={500}
            height={300}
            className="rounded"
          />
        </div>
        <p className="mt-2 font-medium">Chasing the sun and soaking in the bliss</p>
        <div className="mt-2 text-sm text-gray-600">
          124 Likes • 18 Comments • 9 Shares
        </div>
      </div>

      <footer className="text-center mt-12 text-sm text-gray-500">
        <Link href="/settings/about.html" className="mr-4 underline">About</Link>
        <Link href="/settings/privacy.html" className="mr-4 underline">Privacy</Link>
        <Link href="/settings/terms.html" className="underline">Terms</Link>
      </footer>
    </main>
  );
}
