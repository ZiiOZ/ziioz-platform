"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white relative p-4 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10">
        {/* LEFT: IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-[300px] sm:w-[360px] md:w-[400px] lg:w-[460px] xl:w-[500px]">
            <Image
              src="/ziioz-preview.png"
              alt="ZiiOZ App Preview"
              width={500}
              height={1000}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT: TEXT */}
        <div className="w-full md:w-1/2 text-center md:text-left px-2">
          <h1 className="text-4xl font-bold mb-4">Welcome to <br /><span className="text-5xl">ZiiOZ</span></h1>
          <p className="text-lg leading-relaxed mb-3">
            ZiiOZ is the next-gen platform where creators, communities, and trendsetters shape culture.
          </p>
          <p className="text-lg leading-relaxed mb-3">
            Share, discover, and connect through fast-moving video, viral discussions, and real-time creative power.
          </p>
          <p className="text-lg font-medium leading-relaxed">
            No noise. Just you, your moment, and the world.
          </p>
        </div>
      </div>

      {/* SETTINGS ICON */}
      <div
        className="fixed bottom-4 right-4 z-50 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-xl shadow-md">
          ⚙️
        </div>
      </div>

      {/* SETTINGS PANEL */}
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
