import { contactInfo } from '@/lib/content'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How IRONHAUS Strength Club collects, uses, and protects your personal data, and the choices you have over it.',
  alternates: { canonical: '/privacy' },
  robots: { index: false, follow: true },
}

const sections = [
  {
    heading: 'What we collect',
    body: 'When you enquire, book a tour, or join, we collect the details you give us — your name, email, phone number, and any message content. If you use our site, we also collect basic analytics such as pages visited and device type.',
  },
  {
    heading: 'How we use it',
    body: 'We use your information to respond to enquiries, manage your membership, keep you updated about classes and opening hours, and improve the website. We do not sell your data to third parties.',
  },
  {
    heading: 'Cookies',
    body: 'We use essential cookies to keep the site working and optional analytics cookies to understand how it is used. You can accept or decline optional cookies via the banner, and change your choice any time by clearing your browser storage.',
  },
  {
    heading: 'Your rights',
    body: 'You can ask us to access, correct, or delete the personal data we hold about you, or to stop contacting you. To make a request, get in touch using the details below and we will respond within one working day.',
  },
  {
    heading: 'Data retention',
    body: 'We keep enquiry and membership records only for as long as needed to provide our services and meet our legal obligations, after which they are securely deleted.',
  },
]

export default function PrivacyPage() {
  return (
    <>
      <section
        className="section section-full"
        style={{ paddingTop: 84, paddingBottom: 60, borderBottom: '1px solid var(--border)' }}
      >
        <div className="section-heading" style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div className="section-eyebrow">
            <span />
            Legal
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(40px,6vw,84px)' }}>
            Privacy Policy
          </h1>
          <p className="section-copy">
            Last updated 6 July 2026. This policy explains what we collect and how we look after it.
          </p>
        </div>
      </section>

      <section className="section section-full" style={{ paddingTop: 60, paddingBottom: 96 }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {sections.map((item) => (
            <div key={item.heading} className="zone-card">
              <h2 className="zone-title">{item.heading}</h2>
              <p className="zone-copy" style={{ marginTop: 12 }}>{item.body}</p>
            </div>
          ))}
          <div className="zone-card">
            <h2 className="zone-title">Contact</h2>
            <p className="zone-copy" style={{ marginTop: 12 }}>
              Questions about your data? Email{' '}
              <a href={`mailto:${contactInfo.email}`} style={{ color: 'var(--accent)' }}>
                {contactInfo.email}
              </a>{' '}
              or call {contactInfo.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
