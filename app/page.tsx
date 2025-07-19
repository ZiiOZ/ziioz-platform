import Image from "next/image";
import Link from "next/link";
import MockPost from "@/components/MockPost";
import PostPreview from "@/components/PostPreview";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black px-4 py-6">
      <header className="flex flex-col items-center mb-6">
        <Image
          src="/settings/logo-black.png" // Ensure this is in /public
          alt="ZiiOZ Logo"
          width={100}
          height={40}
        />
        <Tabs defaultValue="trending" className="mt-4">
          <TabsList className="bg-gray-100 rounded-full">
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="fresh">Fresh</TabsTrigger>
            <TabsTrigger value="underground">Underground</TabsTrigger>
          </TabsList>
        </Tabs>
      </header>

      <section className="max-w-xl mx-auto w-full">
        <PostPreview />
        <MockPost />
      </section>

      <footer className="mt-12 text-center text-sm text-gray-400 space-x-4">
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </footer>
    </main>
  );
}
