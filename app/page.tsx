"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8 relative text-center md:text-left overflow-hidden w-full">
      {/* Responsive Container */}
      <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Image (changes size based on screen) */}
        <div className="w-full md:w-1/2 px-2">
          <Image
            src="/ziioz-preview.png"
            alt="ZiiOZ App Preview"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to ZiiOZ</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
            <br />
            Share, discover, and connect through fast-moving video, viral discussions, and real-time creative power.
            <br />
            No noise. Just you, your moment, and the world.
          </p>
        </div>
      </div>

      {/* Settings Button */}
      <div
        className="fixed bottom-4 right-4 z-50"
        onClick={() => setOpen(!open)}
      >
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-xl cursor-pointer shadow-md">
          ⚙️
        </div>
      </div>

      {/* Settings Panel */}
      {open && (
        <div className="fixed bottom-20 right-4 bg-white shadow-lg border rounded-md text-sm p-4 w-[280px] text-black z-40">
          <p className="mb-1 font-semibold">Settings</p>
          <hr className="mb-2" />
          <p><strong>Business Name:</strong><br />The Trustee for the W&R Buhagiar Family Trust</p>
          <p><strong>ABN:</strong><br />34 392 752 670</p>
          <p><strong>Contact:</strong><br /><a href="mailto:support@ziioz.com" className="text-blue-600">support@ziioz.com</a></p>
          <hr className="my-2" />
          <a href="#" className="hover:underline block mb-1">Privacy Policy</a>
          <a href="#" className="hover:underline block">Terms & Conditions</a>
        </div>
      )}
    </main>
  );
}
