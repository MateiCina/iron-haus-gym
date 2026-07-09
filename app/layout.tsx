import './globals.css'
import type { Metadata, Viewport } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CookieConsent from '@/components/CookieConsent'
import { contactInfo, heroIntro } from '@/lib/content'

const siteUrl = 'https://ironhaus.club'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'IRONHAUS Strength Club — Strength & Conditioning in East Docklands',
    template: '%s · IRONHAUS Strength Club',
  },
  description: heroIntro.description,
  keywords: [
    'strength gym',
    'conditioning club',
    'powerlifting',
    'personal training',
    'East Docklands gym',
    'IRONHAUS',
  ],
  authors: [{ name: 'IRONHAUS Strength Club' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'IRONHAUS Strength Club',
    title: 'IRONHAUS Strength Club',
    description: heroIntro.description,
    locale: 'en_GB',
    images: [
      {
        url: '/uploads/sule-makaroglu-8W8v51pVbEo-unsplash.jpg',
        width: 1200,
        height: 630,
        alt: 'Training at IRONHAUS Strength Club',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IRONHAUS Strength Club',
    description: heroIntro.description,
    images: ['/uploads/sule-makaroglu-8W8v51pVbEo-unsplash.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  name: 'IRONHAUS Strength Club',
  description: heroIntro.description,
  url: siteUrl,
  telephone: contactInfo.phone,
  email: contactInfo.email,
  image: `${siteUrl}/uploads/sule-makaroglu-8W8v51pVbEo-unsplash.jpg`,
  priceRange: '££',
  foundingDate: '2014',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${contactInfo.address[0]}, ${contactInfo.address[1]}`,
    addressLocality: 'East Docklands',
    postalCode: 'E16 2QR',
    addressCountry: 'GB',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '05:00',
      closes: '23:00',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '07:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '08:00', closes: '20:00' },
  ],
  sameAs: [
    'https://instagram.com/ironhaus',
    'https://tiktok.com/@ironhaus',
    'https://youtube.com/@ironhaus',
  ],
}

const themeScript = `(function(){try{var t=localStorage.getItem('ironhaus-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  )
}
