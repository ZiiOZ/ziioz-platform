'use client';

import Image from 'next/image';

type Props = {
  username: string;
  timeAgo: string;
  text: string;
};

export default function PostPreviewCard({ username, timeAgo, text }: Props) {
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
          <p className="text-sm font-semibold">{username}</p>
          <p className="text-xs text-gray-500">{timeAgo}</p>
        </div>
      </div>
      <p className="mt-3 text-sm">{text}</p>
    </div>
  );
}
