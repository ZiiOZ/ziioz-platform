// app/page.tsx
import Hero from "@/components/Hero";
import PreviewFeed from "@/components/PreviewFeed";
import Features from "@/components/Features";

export default function HomePage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <Hero />
      <PreviewFeed />
      <Features />
      <footer className="text-center text-sm p-6 border-t mt-12">
        <p>
          © {new Date().getFullYear()} ZiiOZ — The Trustee for the W&R Buhagiar Family Trust — ABN: 34 392 752 670
        </p>
        <div className="mt-2">
          <a href="/settings/legal/About" className="underline mr-4">About</a>
          <a href="/settings/legal/PrivacyPolicy" className="underline mr-4">Privacy Policy</a>
          <a href="/settings/legal/TermsOfService" className="underline">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}

// components/Hero.tsx
export default function Hero() {
  return (
    <section className="px-8 py-16 text-center">
      <h1 className="text-4xl font-bold mb-2">ZiiOZ – Social Media Reimagined</h1>
      <h2 className="text-lg font-semibold mb-4">
        The Trustee for the W&R Buhagiar Family Trust
      </h2>
      <p className="max-w-xl mx-auto">
        ZiiOZ is a bold, creator-first social media platform powered by AI. Upload posts, share ZiiFlicks, and boost your content with built-in monetization through ZiiPay and ZiiShop.
      </p>
      <p className="mt-4">Launching globally on iOS and Android.</p>
      <p className="mt-2">
        Contact us: <a href="mailto:support@ziioz.com" className="underline">support@ziioz.com</a>
      </p>
    </section>
  );
}

// components/PreviewFeed.tsx
export default function PreviewFeed() {
  return (
    <section className="px-6 py-10 border-t border-b">
      <h3 className="text-xl font-bold text-center mb-6">🔍 Preview Feed</h3>
      <div className="max-w-md mx-auto border rounded-xl shadow p-4">
        <p className="font-semibold">@creator_name</p>
        <img src="https://via.placeholder.com/400x300" alt="Sample Post" className="rounded my-4" />
        <div className="flex justify-between text-gray-600">
          <span>❤️ 124</span>
          <span>💬 18</span>
          <span>🔁 9</span>
        </div>
      </div>
    </section>
  );
}

// components/Features.tsx
export default function Features() {
  return (
    <section className="px-6 py-12">
      <h3 className="text-2xl font-bold text-center mb-6">🚀 ZiiOZ Features</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <Feature title="ZiiPay" desc="Built-in monetization for creators — earn from your posts effortlessly." />
        <Feature title="ZiiShop" desc="Turn your profile into a creator storefront with physical & digital goods." />
        <Feature title="ZiiFlicks" desc="AI-powered short videos, designed for instant discovery and viral reach." />
      </div>
    </section>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border p-4 rounded-xl shadow">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}

// settings/legal/About.tsx
export default function About() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">About ZiiOZ</h1>
      <p>
        ZiiOZ is operated by <strong>The Trustee for the W&R Buhagiar Family Trust</strong>, ABN: 34 392 752 670.
        We are committed to delivering innovative, creator-first tools powered by AI.
      </p>
    </div>
  );
}

// settings/legal/PrivacyPolicy.tsx
export default function PrivacyPolicy() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>Your privacy matters. Our platform complies with applicable Australian privacy standards. We do not share your data with third parties without your consent.</p>
    </div>
  );
}

// settings/legal/TermsOfService.tsx
export default function TermsOfService() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      <p>By using ZiiOZ, you agree to our community guidelines and terms. Content that violates the safety, rights, or privacy of others may be removed without notice.</p>
    </div>
  );
}
