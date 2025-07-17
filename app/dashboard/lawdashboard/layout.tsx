// app/dashboard/lawdashboard/layout.tsx
export default function LawDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6">
      {children}
    </div>
  );
}
