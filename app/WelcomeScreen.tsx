"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./WelcomeScreen.css";

export default function WelcomeScreen() {
  const router = useRouter();
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("welcomeShown");

    if (alreadyShown) {
      router.push("/home"); // skip animation
    } else {
      sessionStorage.setItem("welcomeShown", "true");

      const fadeImages = setTimeout(() => setShowImages(true), 1500); // show image rows
      const autoRedirect = setTimeout(() => router.push("/home"), 4000); // auto-enter ZiiOZ

      return () => {
        clearTimeout(fadeImages);
        clearTimeout(autoRedirect);
      };
    }
  }, [router]);

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Z Logo */}
      <div className="absolute top-1/4 text-center z-10">
        <h1 className="text-white text-8xl font-extrabold animate-zGlow">Z</h1>
      </div>

      {/* Image Grid */}
      {showImages && (
        <div className="absolute bottom-0 px-4 w-full flex flex-col gap-1 animate-fadeIn">
          <div className="flex gap-1 justify-center">
            <img src="/images/p1.png" className="w-20 h-20 object-cover rounded-sm" />
            <img src="/images/p2.png" className="w-16 h-16 object-cover rounded-sm" />
            <img src="/images/p3.png" className="w-24 h-24 object-cover rounded-sm" />
          </div>
          <div className="flex gap-1 justify-center">
            <img src="/images/p4.png" className="w-24 h-16 object-cover rounded-sm" />
            <img src="/images/p5.png" className="w-16 h-20 object-cover rounded-sm" />
            <img src="/images/p6.png" className="w-20 h-20 object-cover rounded-sm" />
          </div>
          <div className="flex gap-1 justify-center">
            <img src="/images/p7.png" className="w-16 h-24 object-cover rounded-sm" />
            <img src="/images/p8.png" className="w-20 h-20 object-cover rounded-sm" />
            <img src="/images/p9.png" className="w-20 h-16 object-cover rounded-sm" />
          </div>
        </div>
      )}
    </div>
  );
}
