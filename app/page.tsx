// File: app/page.tsx

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-10">
      <img
        src="/ziioz-preview.png"
        alt="ZiiOZ Preview"
        className="w-full max-w-md mb-8 object-contain"
      />

      <h1 className="text-3xl font-bold mb-4">Welcome to ZiiOZ</h1>
      <p className="text-center max-w-xl text-lg">
        Where creators, moments, and movements converge.
      </p>

      <div className="mt-10 text-sm space-x-4">
        <a href="/terms" className="underline">Terms</a>
        <a href="/privacy" className="underline">Privacy</a>
      </div>
    </main>
  );
}
