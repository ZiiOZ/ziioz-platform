// ✅ CORRECT STRUCTURE
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
