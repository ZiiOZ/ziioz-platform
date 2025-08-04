'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/', label: 'Feed' },
  { href: '/settings', label: 'Settings' },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1rem 0', borderBottom: '1px solid #eee' }}>
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          style={{
            textDecoration: pathname === tab.href ? 'underline' : 'none',
            fontWeight: pathname === tab.href ? 'bold' : 'normal',
            fontSize: '1rem',
          }}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  )
}
