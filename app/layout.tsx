import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
export const metadata = {
  title: 'ZiiOZ',
  description: 'ZiiOZ Official Landing Page',
  viewport: 'width=device-width, initial-scale=1',
};
