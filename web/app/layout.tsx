import NavBar from '@/components/navbar'; // ✅ lowercase



export const metadata = {
  title: 'ZiiOZ',
  description: 'The official ZiiOZ platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
