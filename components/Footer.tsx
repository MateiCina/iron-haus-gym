import Link from 'next/link'
import { navLinks, hours } from '@/lib/content'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href="/" className="nav-brand">
            <Logo />
          </Link>
          <p className="footer-copy">
            A strength & conditioning club in East Docklands. Built by lifters, for lifters.
          </p>
          <div className="social-links">
            <Link href="/" className="social-pill" aria-label="Instagram">
              IG
            </Link>
            <Link href="/" className="social-pill" aria-label="TikTok">
              TT
            </Link>
            <Link href="/" className="social-pill" aria-label="YouTube">
              YT
            </Link>
          </div>
        </div>
        <div>
          <div className="footer-heading">Explore</div>
          <div className="footer-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-heading">Hours</div>
          <div className="footer-links">
            {hours.map((item) => (
              <div key={item.label} className="footer-link">
                {item.label} · {item.time}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="footer-heading">Visit</div>
          <p className="footer-link">
            Unit 4, The Ironworks
            <br />112 Dockside Road
            <br />East Docklands, E16 2QR
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 IRONHAUS Strength Club. All rights reserved.</span>
        <span style={{ display: 'flex', gap: 8 }}>
          <Link href="/privacy" className="footer-link">Privacy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/privacy" className="footer-link">Terms</Link>
          <span aria-hidden="true">·</span>
          <Link href="/privacy" className="footer-link">Cookies</Link>
        </span>
      </div>
    </footer>
  )
}
