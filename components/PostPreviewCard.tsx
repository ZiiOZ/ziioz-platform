'use client';

import Image from 'next/image';

export default function PostPreviewCard() {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <div className="flex items-center space-x-2">
        <Image
          src="/placeholder-profile.png"
          alt="User avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-semibold">@ziioz_creator</p>
          <p className="text-xs text-gray-500">5 mins ago</p>
        </div>
      </div>
      <p className="mt-3 text-sm">
        Catching the vibe with ZiiOZ ✨ The world’s next movement is just getting started...
      </p>
    </div>
  );
}
