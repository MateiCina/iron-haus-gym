'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'ironhaus-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true)
      }
    } catch {
      // localStorage unavailable (private mode / SSR mismatch) — stay hidden
    }
  }, [])

  const dismiss = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // ignore write failures
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent" aria-live="polite">
      <p className="cookie-consent-copy">
        We use cookies to keep the site running smoothly and understand how it&apos;s used. See our{' '}
        <Link href="/privacy" className="cookie-consent-link">
          privacy policy
        </Link>
        .
      </p>
      <div className="cookie-consent-actions">
        <button type="button" className="button button-outline" onClick={() => dismiss('declined')}>
          Decline
        </button>
        <button type="button" className="button button-primary" onClick={() => dismiss('accepted')}>
          Accept
        </button>
      </div>
    </div>
  )
}
