// app/ziipay/page.tsx
export default function ZiiPayPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded space-y-4">
      <h1 className="text-2xl font-bold mb-4">ZiiPay Dashboard</h1>
      <a
        href="/api/get-payouts"
        className="block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800"
      >
        Set Up Payouts
      </a>
      <a
        href="/checkout"
        className="block w-full bg-black text-white text-center py-2 rounded hover:bg-gray-800"
      >
        Pay Now
      </a>
    </div>
  );
}
