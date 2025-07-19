'use client';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      {/* Logo at the top */}
      <div className="pt-10">
        <img
          src="/settings/logo-black.png"
          alt="ZiiOZ Logo"
          className="h-20 w-auto"
        />
      </div>

      {/* Nav Tabs */}
      <div className="mt-8 flex space-x-8 border-b border-gray-200">
        <button className="pb-2 text-lg font-semibold text-gray-800 border-b-2 border-black">
          Trending
        </button>
        <button className="pb-2 text-lg font-semibold text-gray-500 hover:text-black">
          Fresh
        </button>
        <button className="pb-2 text-lg font-semibold text-gray-500 hover:text-black">
          Underground
        </button>
      </div>

      {/* Optional Post Preview (Commented out for now) */}
      {/* <div className="mt-10 w-full max-w-md px-4">
        <div className="border rounded-xl shadow-md p-4">
          <div className="font-semibold mb-2">@ziiozuser</div>
          <img
            src="/sample-post.jpg"
            alt="Post preview"
            className="rounded-md w-full mb-2"
          />
          <div className="flex space-x-4 text-gray-600">
            <span>❤️ 123</span>
            <span>💬 45</span>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      <footer className="mt-auto py-6 text-xs text-gray-400">
        <a href="/settings/terms.html" className="hover:underline">
          Terms
        </a>{' '}
        |{' '}
        <a href="/settings/privacy.html" className="hover:underline">
          Privacy
        </a>
      </footer>
    </div>
  );
}
