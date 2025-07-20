import logo from "@/assets/logo-black.png";
import mockup from "@/assets/mockup-iphone.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4 py-12">
      <Image
        src={logo}
        alt="ZiiOZ Logo"
        width={96}
        height={96}
        className="mb-4"
      />

      <div className="flex gap-6 text-lg font-semibold mb-4">
        <span>🔥 Trending</span>
        <span>✨ Fresh</span>
        <span>🖤 Underground</span>
      </div>

      <Image
        src={mockup}
        alt="ZiiOZ App Preview"
        width={300}
        height={600}
        className="rounded-xl shadow-lg mb-6"
      />

      <p className="text-center text-lg text-gray-800 max-w-xl px-2">
        <strong>ZiiOZ</strong> is the next-gen media platform where creators, communities,
        and trendsetters come together. Experience the next wave of social.
      </p>
    </main>
  );
}
