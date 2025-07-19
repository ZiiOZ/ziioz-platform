'use client';

export default function NavTabs() {
  return (
    <div className="flex justify-center gap-4 mt-2 text-sm font-semibold">
      <button className="border-b-2 border-black pb-1">Trending</button>
      <button className="text-gray-500 hover:text-black">Fresh</button>
      <button className="text-gray-500 hover:text-black">Underground</button>
    </div>
  );
}
