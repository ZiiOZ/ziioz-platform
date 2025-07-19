// components/PreviewFeed.tsx
export default function PreviewFeed() {
  return (
    <section className="px-6 py-10 border-t border-b">
      <h3 className="text-xl font-bold text-center mb-6">🔍 Preview Feed</h3>
      <div className="max-w-md mx-auto border rounded-xl shadow p-4">
        <p className="font-semibold">@creator_name</p>
        <img src="https://via.placeholder.com/400x300" alt="Sample Post" className="rounded my-4" />
        <div className="flex justify-between text-gray-600">
          <span>❤️ 124</span>
          <span>💬 18</span>
          <span>🔁 9</span>
        </div>
      </div>
    </section>
  );
}
