export default function LandingPage() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-12 py-10 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl w-full gap-8">
        {/* Left: Image */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="/ziioz-preview.png"
            alt="ZiiOZ Preview"
            className="w-[220px] md:w-[280px] h-auto object-contain"
          />
        </div>

        {/* Right: Intentionally Left Blank */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          {/* No text here */}
        </div>
      </div>
    </main>
  );
}
