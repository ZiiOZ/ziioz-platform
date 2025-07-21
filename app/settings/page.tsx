// File: app/settings/page.tsx

export default function SettingsPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-4">Settings & Legal</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Terms & Conditions</h2>
        <p>By using ZiiOZ, you agree to our platform guidelines and content standards.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
        <p>We respect your data and only collect what's necessary to power the app experience.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Ownership</h2>
        <p>
          Developed and operated by <strong>The Trustee for the W&R Buhagiar Family Trust</strong><br />
          ABN: 34 392 752 670
        </p>
      </section>
    </main>
  );
}
