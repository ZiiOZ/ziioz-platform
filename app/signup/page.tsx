export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm space-y-6 text-center">
        <img
          src="/ziioz-logo.png"
          alt="ZiiOZ Logo"
          className="mx-auto w-20"
        />
        <h1 className="text-3xl font-bold text-gray-900">Sign Up for ZiiOZ</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </main>
  );
}
