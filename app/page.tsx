import Image from 'next/image';
import Link from 'next/link';
import LogoHeader from '@/components/LogoHeader';
import NavTabs from '@/components/NavTabs';
import MockPost from '@/components/MockPost';

export default function HomePage() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col items-center px-4">
      <LogoHeader />
      <NavTabs />
      <section className="w-full max-w-md mt-6">
        <MockPost />
      </section>
      <footer className="text-xs text-center mt-16 mb-6 space-x-4 text-gray-500">
        <Link href="/settings/privacy">Privacy Policy</Link>
        <Link href="/settings/terms">Terms of Service</Link>
        <Link href="/settings/about">About</Link>
      </footer>
    </main>
  );
}
