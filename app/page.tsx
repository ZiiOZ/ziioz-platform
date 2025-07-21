// File: app/page.tsx

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-10">
      <img
        src="/ziioz-main-preview.png"
        alt="ZiiOZ Preview"
        className="w-full max-w-md object-contain mb-10"
      />

      <h1 className="text-4xl font-bold mb-6">Welcome to ZiiOZ</h1>
      <p className="text-center text-lg max-w-xl">
        Where creators, moments, and movements converge.
      </p>
    </main>
  );
}
