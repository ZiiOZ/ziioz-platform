// File: app/settings/page.tsx

export default function SettingsPage() {
  return (
    <main className="p-6 max-w-2xl mx-auto text-black">
      <h1 className="text-2xl font-bold mb-4">Settings & Legal</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Terms & Conditions</h2>
        <p>
          By using ZiiOZ, you agree to our platform guidelines and content standards. Please review our full{" "}
          <a
            href="https://ziioz.github.io/privacy/terms"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
        <p>
          We respect your privacy and only collect the data required to deliver the ZiiOZ experience. Please read our{" "}
          <a
            href="https://ziioz.github.io/privacy"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Child & Age Policy</h2>
        <p>
          ZiiOZ is not intended for users under the age of 16. We use age screening and safety mechanisms to protect minors and comply with global child protection laws.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Ownership</h2>
        <p>
          Developed and operated by <strong>The Trustee for the W&amp;R Buhagiar Family Trust</strong><br />
          ABN: 34 392 752 670
        </p>
      </section>
    </main>
  );
}
