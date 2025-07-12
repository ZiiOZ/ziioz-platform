export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-6">
        <img
          src="/ziioz-logo.png"
          alt="ZiiOZ Logo"
          className="mx-auto"
          width={128}
          height={128}
        />
        <h1 className="text-3xl font-bold text-gray-900">ZiiOZ Home</h1>
        <p className="text-gray-700">Welcome to the platform.</p>
        <div className="flex space-x-4 justify-center">
          <a
            href="/login"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </a>
          <a
            href="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Up
          </a>
        </div>
      </div>
    </main>
  );
}
