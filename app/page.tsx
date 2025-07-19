import Hero from "@/components/Hero";
import PreviewFeed from "@/components/PreviewFeed";
import Features from "@/components/Features";

export default function HomePage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Hero />
      <PreviewFeed />
      <Features />
      {/* Legal Footer */}
    </main>
  );
}
