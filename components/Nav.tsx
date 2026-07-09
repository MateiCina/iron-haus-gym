'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navLinks } from '@/lib/content'
import Logo from './Logo'

export default function Nav() {
  const pathname = usePathname()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const current = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark'
    setTheme(current)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('ironhaus-theme', next)
    } catch {
      // ignore persistence failures
    }
  }

  const dark = theme === 'dark'
  return (
    <nav className="site-nav">
      <Link href="/" className="nav-brand">
        <Logo />
      </Link>
      <div className="nav-links">
        {navLinks.map((link) => {
          const active = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? 'nav-link nav-link-active' : 'nav-link'}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
      <div className="nav-actions">
        <button
          type="button"
          aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={toggleTheme}
          className="theme-toggle"
        >
          {dark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#39ff88" strokeWidth="2" strokeLinecap="round">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          )}
        </button>
        <Link href="/pricing" className="button button-primary">
          Join Now
        </Link>
      </div>
    </nav>
  )
}
