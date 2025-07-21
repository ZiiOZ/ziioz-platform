// File: app/page.tsx

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-10 relative">
      {/* Settings Icon */}
      <a href="/settings" className="absolute top-4 right-4">
        <img src="/file.svg" alt="Settings" className="w-6 h-6 opacity-70 hover:opacity-100" />
      </a>

      {/* Fullscreen Image Only */}
      <img
        src="/ziioz-preview.png"
        alt="ZiiOZ App Preview"
        className="w-full max-w-md object-contain"
      />
    </main>
  );
}
