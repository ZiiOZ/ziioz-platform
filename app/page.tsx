// File: app/page.tsx

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-10">
      <img
        src="/ziioz-main-preview.png"
        alt="ZiiOZ App Preview"
        className="w-full max-w-md mb-8 object-contain"
      />

      <h1 className="text-3xl font-bold mb-4">Welcome to ZiiOZ</h1>
      <p className="text-center max-w-xl text-lg">
        ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
        Share, discover, and connect through fast-moving video, vivid discussions, and real-time creative posts.
      </p>

      <div className="mt-10 text-sm space-x-4">
        <a href="/settings" className="underline">Settings</a>
        <a href="/terms" className="underline">Terms</a>
        <a href="/privacy" className="underline">Privacy</a>
      </div>
    </main>
  );
}
