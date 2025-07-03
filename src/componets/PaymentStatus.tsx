import React from "react";

export default function PaymentStatus({ status }: { status: string }) {
  return (
    <div className="p-4 border rounded bg-gray-100 mt-4">
      <p>Status: {status}</p>
    </div>
  );
}
