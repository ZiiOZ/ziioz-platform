export default function NavTabs() {
  return (
    <div className="flex justify-center gap-8 border-b mb-8 text-sm font-medium text-gray-700">
      <button className="pb-2 border-b-2 border-black text-black">Trending</button>
      <button className="pb-2 hover:text-black hover:border-black border-b-2 border-transparent">Fresh</button>
      <button className="pb-2 hover:text-black hover:border-black border-b-2 border-transparent">Underground</button>
    </div>
  );
}
