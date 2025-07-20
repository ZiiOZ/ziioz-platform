// app/page.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-4 relative">
      {/* App Preview Image */}
      <div className="max-w-[800px] w-full mx-auto">
        <Image
          src="/ziioz-preview.png"
          alt="ZiiOZ App Preview"
          width={1536}
          height={1024}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Settings Button */}
      <div
        className="absolute bottom-4 right-4 md:right-8 z-50"
        onClick={() => setOpen(!open)}
      >
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-xl cursor-pointer">
          ⚙️
        </div>
      </div>

      {/* Settings Panel */}
      {open && (
        <div className="absolute bottom-16 right-4 md:right-8 bg-white shadow-lg border rounded-md text-sm p-4 w-[280px] text-black z-40">
          <p className="mb-1 font-semibold">Settings</p>
          <hr className="mb-2" />
          <p><strong>Business Name:</strong><br />The Trustee for the W&R Buhagiar Family Trust</p>
          <p><strong>ABN:</strong><br />34 392 752 670</p>
          <p><strong>Contact:</strong><br /><a href="mailto:support@ziioz.com" className="text-blue-600">support@ziioz.com</a></p>
          <hr className="my-2" />
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      )}
    </main>
  );
}
