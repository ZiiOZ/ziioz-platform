// app/settings/page.tsx

export default function SettingsPage() {
  return (
    <main className="flex flex-col items-center justify-start px-6 py-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">ZiiOZ Settings</h1>

      <div className="text-sm text-gray-700 max-w-2xl space-y-4">
        <p>
          Manage your app preferences, terms, and platform support below. This section is provided for
          transparency and user confidence.
        </p>
        <p>
          <strong>Developer:</strong> The Trustee for the W&amp;R Buhagiar Family Trust — ABN: 34 392 752 670
        </p>
        <p>
          <strong>Support:</strong> Please contact us at <a href="mailto:support@ziioz.com" className="text-blue-600 underline">support@ziioz.com</a> for any questions, technical assistance, or legal matters.
        </p>
        <p>
          <strong>Privacy Policy & Terms:</strong> ZiiOZ is committed to protecting user data, identity, and media.
          We do not sell personal information or likeness without explicit consent. See our terms and privacy policy
          for more information.
        </p>
        <p>
          This page exists to assist App Store and Play Store reviewers in verifying our platform details, developer legitimacy, and compliance.
        </p>
      </div>
    </main>
  );
}
