// File: app/settings/page.tsx

export default function SettingsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-10 text-black">
      <h1 className="text-3xl font-bold mb-6">Settings & Legal Info</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Terms & Conditions</h2>
        <p className="text-sm leading-relaxed">
          By using ZiiOZ, you agree to abide by our platform rules, content policies, and community standards.
          Users must respect intellectual property rights and refrain from posting harmful or illegal content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
        <p className="text-sm leading-relaxed">
          ZiiOZ values your privacy. We collect only the data necessary to operate our services, improve user experience,
          and ensure platform safety. We never sell your data to third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Ownership & Legal Entity</h2>
        <p className="text-sm leading-relaxed">
          ZiiOZ is owned and operated by <strong>The Trustee for the W&R Buhagiar Family Trust</strong><br />
          ABN: <strong>34 392 752 670</strong><br />
          For legal inquiries, contact: <a href="mailto:support@ziioz.com" className="underline">support@ziioz.com</a>
        </p>
      </section>

      <footer className="text-xs text-gray-500">
        &copy; {new Date().getFullYear()} ZiiOZ. All rights reserved.
      </footer>
    </main>
  );
}
