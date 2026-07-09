import { hours, contactInfo } from '@/lib/content'
import MapMock from '@/components/MapMock'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Area & Contact',
  description:
    'Find IRONHAUS in East Docklands — opening hours, directions, and a direct line to book a tour or ask about membership.',
  alternates: { canonical: '/area' },
}

export default function AreaPage() {
  return (
    <>
      <section className="section section-full" style={{ paddingTop: 84, paddingBottom: 78, borderBottom: '1px solid var(--border)' }}>
        <div className="section-heading" style={{ maxWidth: 'var(--container)', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-eyebrow">
            <span />
            Visit Us
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(46px,7vw,104px)' }}>
            Meet the site in person
          </h1>
          <p className="section-copy">
            IRONHAUS is in the city centre near the main transport links. Drop in for a tour or book a consultation.
          </p>
        </div>
      </section>
      <section className="section section-alt" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="rc-2col" style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 40, alignItems: 'start' }}>
          <div>
            <h2 className="section-title" style={{ fontSize: 'clamp(36px,5vw,52px)' }}>Find IRONHAUS</h2>
            <p className="section-copy" style={{ marginTop: 20 }}>
              18 industrial lane, city centre. Ground floor access, free lockers, showers, and towel service.
            </p>
            <div style={{ marginTop: 36, display: 'grid', gap: 18 }}>
              <div className="feature-row">
                <strong>Nearest Station</strong>
                <span>Central Station - 5 mins walk</span>
              </div>
              <div className="feature-row">
                <strong>Parking</strong>
                <span>Paid street parking and nearby car parks</span>
              </div>
              <div className="feature-row">
                <strong>Access</strong>
                <span>Reception opens at 05:00 daily</span>
              </div>
            </div>
          </div>
          <div className="map-card">
            <MapMock />
          </div>
        </div>
      </section>
      <section className="section section-full" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-heading" style={{ marginBottom: 44 }}>
          <div className="section-eyebrow">
            <span />
            Contact
          </div>
        </div>
        <div className="rc-2col" style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 32 }}>
          <div className="zone-card" style={{ padding: 36 }}>
            <h3 className="zone-title">Drop us a line</h3>
            <p className="zone-copy">We’ll respond within one business day.</p>
            <div style={{ marginTop: 28, display: 'grid', gap: 14 }}>
              <div className="feature-row">
                <strong>Phone</strong>
                <span>{contactInfo.phone}</span>
              </div>
              <div className="feature-row">
                <strong>Email</strong>
                <span>{contactInfo.email}</span>
              </div>
              <div className="feature-row">
                <strong>Address</strong>
                <span>{contactInfo.address.join(', ')}</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="section section-alt" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="section-heading" style={{ marginBottom: 44 }}>
          <div className="section-eyebrow">
            <span />
            Opening hours
          </div>
        </div>
        <div className="rc-3col" style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 20 }}>
          {hours.map((hour) => (
            <div key={hour.label} className="zone-card">
              <h3 className="zone-title">{hour.label}</h3>
              <p className="zone-copy">{hour.time}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-cta" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <h2 className="section-title" style={{ fontSize: 'clamp(32px,4.4vw,56px)' }}>Come train with us</h2>
        <p className="section-copy">Book a visit, check membership, or just swing by to see the space.</p>
        <div className="section-cta cta-actions">
          <a href="/pricing" className="button button-primary">Memberships</a>
          <a href="/schedule" className="button button-outline">View classes</a>
        </div>
      </section>
    </>
  )
}
