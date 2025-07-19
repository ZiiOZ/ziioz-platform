import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MockPost from '@/components/MockPost';
import PostPreview from '@/components/PostPreview';
...
<PostPreview />

export default function HomePage() {
  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">ZiiOZ Platform</h1>
      <MockPost />
    </main>
  );
}

export default function HomePage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-white text-black p-4">
      {/* Logo */}
      <div className="mt-4 mb-2">
        <Image src="/logo-black.png" alt="ZiiOZ Logo" width={64} height={64} />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="trending" className="w-full max-w-md mb-6">
        <TabsList className="flex justify-center space-x-6 border-b pb-2">
          <TabsTrigger value="trending" className="text-lg font-semibold">Trending</TabsTrigger>
          <TabsTrigger value="fresh" className="text-lg font-semibold">Fresh</TabsTrigger>
          <TabsTrigger value="underground" className="text-lg font-semibold">Underground</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Mocked Post Card */}
      <Card className="w-full max-w-md shadow-xl border rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <div className="w-full h-[400px] relative">
            <Image
              src="/sample-post.jpg"
              alt="Mocked Post"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Image
                src="/placeholder-profile.png"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium">@ziioz_user</p>
                <p className="text-xs text-gray-500">Post Preview</p>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <p>124 Likes</p>
              <p>18 Comments</p>
              <p>9 Shares</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Legal Links */}
      <div className="text-xs text-gray-500 mt-6 flex flex-wrap gap-4 justify-center">
        <a href="/settings/privacy" className="underline">Privacy Policy</a>
        <a href="/settings/terms" className="underline">Terms of Service</a>
        <a href="/settings/about" className="underline">About</a>
      </div>
    </main>
  );
}
