import React from "react";
import LogoHeader from "@/components/LogoHeader";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostPreview from "@/components/PostPreview";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black px-4">
      <LogoHeader />
      <div className="flex justify-center mt-4">
        <Tabs defaultValue="trending" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="trending">🔥 Trending</TabsTrigger>
            <TabsTrigger value="fresh">✨ Fresh</TabsTrigger>
            <TabsTrigger value="underground">🖤 Underground</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="mt-6">
        <PostPreview />
      </div>
    </main>
  );
}
