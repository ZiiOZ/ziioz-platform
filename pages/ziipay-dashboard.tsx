import { useEffect, useState } from "react";

export default function ZiiPayDashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/get-payouts");
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError("Error fetching payouts.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading payout data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>💸 ZiiPay Payout Dashboard</h1>

      <h2>Current Balance</h2>
      <p>
        Available: $
        {(
          (data?.balance?.available[0]?.amount || 0) / 100
        ).toFixed(2)}
      </p>
      <p>
        Pending: $
        {(
          (data?.balance?.pending[0]?.amount || 0) / 100
        ).toFixed(2)}
      </p>

      <h2 style={{ marginTop: "2rem" }}>Recent Payouts</h2>
      {data?.payouts?.length === 0 ? (
        <p>No payouts found.</p>
      ) : (
        <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Arrival Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.payouts.map((p: any) => (
              <tr key={p.id}>
                <td>${(p.amount / 100).toFixed(2)}</td>
                <td>{new Date(p.arrival_date * 1000).toLocaleDateString()}</td>
                <td>{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
