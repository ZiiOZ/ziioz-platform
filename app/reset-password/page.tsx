// app/reset-password/page.tsx
export default function ResetPasswordPage() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">🔐 Reset Your Password</h1>
      <p>This is the reset password page. You visited:</p>
      <code className="bg-gray-100 px-2 py-1 rounded">
        {typeof window !== 'undefined' && window.location.href}
      </code>
    </div>
  );
}
