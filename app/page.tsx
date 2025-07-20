export default function LandingPage() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen px-6 py-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-4">
          <img
            src="/ziioz-preview.png"
            alt="ZiiOZ Preview"
            className="w-full max-w-xs md:max-w-sm h-auto object-contain"
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
