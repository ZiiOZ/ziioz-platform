import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen py-10 px-4 text-center bg-white text-black">
      <Image
        src="/settings/logo-black.png"
        alt="ZiiOZ Logo"
        width={120}
        height={40}
        className="mb-4"
      />

      <h1 className="text-3xl font-bold mt-4">Catch the Vibe. Join the Movement.</h1>
      <p className="mt-2 max-w-xl text-lg">
        ZiiOZ is the next evolution in social discovery — where creators, stories, and moments collide in one powerful space. Built to be bold, real, and unapologetically yours.
      </p>

      <Image
        src="/settings/mockup-iphone-ziioz-tabs.png"
        alt="ZiiOZ App Preview"
        width={300}
        height={600}
        className="rounded-2xl shadow-xl my-6"
      />

      <div className="flex space-x-4 my-4">
        <button className="px-4 py-2 rounded-xl border font-medium">🔥 Trending</button>
        <button className="px-4 py-2 rounded-xl border font-medium">✨ Fresh</button>
        <button className="px-4 py-2 rounded-xl border font-medium">🖤 Underground</button>
      </div>

      <ul className="text-left text-sm mt-4">
        <li>• Real-time creator uploads</li>
        <li>• Boost, comment, and interact</li>
        <li>• ZiiPay enabled monetization (coming soon)</li>
        <li>• Built for iOS, Android, and Web</li>
      </ul>

      <div className="mt-8 text-sm text-blue-700 underline space-x-2">
        <a href="/settings/about.html">About</a>
        <a href="/settings/privacy.html">Privacy</a>
        <a href="/settings/terms.html">Terms</a>
      </div>
    </main>
  );
}
