'use client';

import Image from 'next/image';

export default function PostPreview() {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300" />
          <div>
            <p className="text-sm font-semibold text-gray-800">@ziioz_creator</p>
            <p className="text-xs text-gray-500">5 mins ago</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] relative">
        <Image
          src="/sample-post.jpg" // You can replace this with any image name uploaded to /public
          alt="Sample Post"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-4 py-3">
        <p className="text-sm text-gray-800">
          Catching the vibe with ZiiOZ ✨ The world’s next movement is just getting started...
        </p>
      </div>
    </div>
  );
}
