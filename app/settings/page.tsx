export default function SettingsPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto text-sm">
      <h1 className="text-2xl font-bold mb-4">Settings & Legal</h1>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Terms & Conditions</h2>
        <p>By using ZiiOZ, you agree to our platform rules and creator policies. Content must adhere to community standards.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Privacy Policy</h2>
        <p>Your data is secure. We only use personal information to enhance your ZiiOZ experience. No third-party resale of data.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Legal & Ownership</h2>
        <p>ZiiOZ is operated by:</p>
        <p className="mt-1 font-medium">The Trustee for the W&R Buhagiar Family Trust</p>
        <p>ABN: 34 392 752 670</p>
        <p>All content is © ZiiOZ 2025. All rights reserved.</p>
      </section>
    </main>
  );
}
