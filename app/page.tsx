// app/page.tsx
import LogoHeader from "@/components/LogoHeader";
import NavTabs from "@/components/NavTabs";
import PreviewPost from "@/components/PreviewPost";
import Features from "@/components/Features";

export default function HomePage() {
  return (
    <main className="bg-white text-black min-h-screen">
      <LogoHeader />
      <NavTabs />
      <PreviewPost />
      <Features />
      <footer className="text-center text-sm p-6 border-t mt-12">
        <div className="mt-2">
          <a href="/settings/legal/About" className="underline mr-4">About</a>
          <a href="/settings/legal/PrivacyPolicy" className="underline mr-4">Privacy Policy</a>
          <a href="/settings/legal/TermsOfService" className="underline">Terms of Service</a>
        </div>
      </footer>
    </main>
  );
}

// components/LogoHeader.tsx
export default function LogoHeader() {
  return (
    <div className="py-6 text-center">
      <img src="/ziioz-logo.png" alt="ZiiOZ Logo" className="h-10 mx-auto" />
    </div>
  );
}

// components/NavTabs.tsx
export default function NavTabs() {
  return (
    <div className="flex justify-center gap-6 text-sm font-medium border-b mb-8">
      <button className="pb-2 border-b-2 border-black">Trending</button>
      <button className="pb-2 text-gray-500 hover:text-black">Fresh</button>
      <button className="pb-2 text-gray-500 hover:text-black">Underground</button>
    </div>
  );
}

// components/PreviewPost.tsx
export default function PreviewPost() {
  return (
    <section className="px-6 mb-12">
      <div className="max-w-md mx-auto border rounded-xl shadow p-4">
        <p className="font-semibold">@ziioz_user</p>
        <div className="bg-gray-100 h-48 my-4 rounded flex items-center justify-center text-gray-400">
          Post Preview
        </div>
        <div className="flex justify-between text-gray-600 text-sm">
          <span>124 Likes</span>
          <span>18 Comments</span>
          <span>9 Shares</span>
        </div>
      </div>
    </section>
  );
}

// components/Features.tsx
export default function Features() {
  return (
    <section className="px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <Feature title="ZiiPay" desc="Monetize your content instantly." />
        <Feature title="ZiiShop" desc="Turn your feed into a storefront." />
        <Feature title="ZiiFlicks" desc="Share bite-sized, AI-powered videos." />
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
      <p>ZiiOZ is built for creators, innovators, and disruptors. Learn more about our team, mission, and journey here.</p>
    </div>
  );
}

// settings/legal/PrivacyPolicy.tsx
export default function PrivacyPolicy() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p>We value your privacy and protect your data with modern encryption and compliance standards.</p>
    </div>
  );
}

// settings/legal/TermsOfService.tsx
export default function TermsOfService() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      <p>By using ZiiOZ, you agree to follow our platform rules, community guidelines, and fair use policy.</p>
    </div>
  );
}
