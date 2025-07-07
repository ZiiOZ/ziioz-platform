import { useEffect, useState } from "react";

export default function ZiiPayDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/get-payouts");
      const json = await res.json();
      setData(json);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p className="p-4">Loading payouts...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">💸 ZiiPay Payout Dashboard</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Current Balance</h2>
        <p>Available: ${data.balance.available / 100}</p>
        <p>Pending: ${data.balance.pending / 100}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold">Upcoming Payouts</h2>
        {data.payouts.length === 0 ? (
          <p>No upcoming payouts.</p>
        ) : (
          <ul className="list-disc pl-5">
            {data.payouts.map((p: any) => (
              <li key={p.id}>
                {p.amount / 100} USD arriving {new Date(p.arrival_date * 1000).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
