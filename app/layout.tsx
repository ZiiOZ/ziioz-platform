import "./globals.css";

export const metadata = {
  title: "ZiiOZ",
  description: "ZiiOZ Official Landing Page",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black relative">
        {/* Safe Settings Link (top-right) */}
        <a
          href="/settings"
          className="absolute top-4 right-4 text-sm underline text-gray-500 hover:text-black"
        >
          Settings
        </a>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}
