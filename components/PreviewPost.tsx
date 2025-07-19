export default function PreviewPost() {
  return (
    <section className="px-6 mb-12">
      <div className="max-w-md mx-auto border rounded-xl shadow p-4">
        <p className="font-semibold">@ziioz_user</p>
        <div className="bg-gray-100 h-48 my-4 rounded flex items-center justify-center text-gray-400">
          Post Preview
        </div>
        <div className="flex justify-between text-gray-600 text-sm">
          <span>124 Likes</span>
          <span>18 Comments</span>
          <span>9 Shares</span>
        </div>
      </div>
    </section>
  );
}
