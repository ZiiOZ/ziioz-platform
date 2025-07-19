'use client';

export default function MockPost() {
  return (
    <div className="mt-8 border rounded-xl p-4 shadow-sm">
      <div className="font-semibold">@ziioz_user</div>
      <p className="mt-2 text-sm">Post Preview</p>
      <div className="flex gap-4 mt-3 text-xs text-gray-600">
        <span>124 Likes</span>
        <span>18 Comments</span>
        <span>9 Shares</span>
      </div>
    </div>
  );
}
