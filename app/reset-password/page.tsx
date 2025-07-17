'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const email = searchParams?.get('email');
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (email && email.includes('@')) {
      setValid(true);
    }
  }, [email]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">🔐 Reset Your Password</h1>
        {valid ? (
          <>
            <p className="mb-4 text-gray-600">We’ve sent a password reset link to:</p>
            <p className="font-semibold text-blue-600 mb-6 break-all">{email}</p>
            <p className="text-sm text-gray-500">
              Please check your inbox (and junk folder) to continue.
            </p>
          </>
        ) : (
          <p className="text-red-500">Invalid or missing email address.</p>
        )}
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="p-6 text-gray-500">Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
