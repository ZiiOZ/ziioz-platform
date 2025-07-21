// File: app/home/page.tsx

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-6 py-10 bg-white">
      {/* Logo */}
      <Image
        src="/logo-black.png"
        alt="ZiiOZ Logo"
        width={100}
        height={100}
        className="mb-8"
      />

      {/* Preview Image */}
      <div className="w-full max-w-sm">
        <Image
          src="/image/p9.png"
          alt="ZiiOZ Preview"
          width={600}
          height={600}
          className="w-full object-contain rounded-xl shadow-md"
        />
      </div>

      {/* Footer info */}
      <div className="mt-10 text-center text-sm text-gray-500">
        <p>Settings | Terms | Privacy</p>
        <div className="mt-4 flex justify-center gap-4">
          <img src="/image/appstore.png" alt="App Store" className="h-10" />
          <img src="/image/googleplay.png" alt="Google Play" className="h-10" />
        </div>
      </div>
    </main>
  );
}
