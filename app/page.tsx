export default function LandingPage() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between w-full min-h-screen px-6 md:px-24 py-10">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-4">
        <img
          src="/ziioz-preview.png"
          alt="ZiiOZ Preview"
          className="w-full max-w-[300px] md:max-w-[400px] h-auto object-contain"
        />
      </div>

      {/* Right: Intentionally Left Blank */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        {/* No text here */}
      </div>
    </main>
  );
}
