import { equipmentZones, galleryItems } from '@/lib/content'

export const metadata = {
  title: 'Equipment',
  description:
    'Competition-grade racks, platforms, sleds, and conditioning kit — maintained daily and never oversubscribed at IRONHAUS Strength Club.',
  alternates: { canonical: '/equipment' },
}

export default function EquipmentPage() {
  return (
    <>
      <section className="section section-full" style={{ paddingTop: 84, paddingBottom: 78, borderBottom: '1px solid var(--border)' }}>
        <div className="section-heading" style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div className="section-eyebrow">
            <span />
            The Floor
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(46px,7vw,104px)' }}>
            Kit that never waits
          </h1>
          <p className="section-copy">
            Competition-grade gear, maintained daily and never oversubscribed.
          </p>
        </div>
      </section>
      <section className="section section-alt" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="equipment-grid">
          {galleryItems.map((item) => (
            <div key={item.label} className={`equipment-card ${item.span === 'span 2' ? 'big' : ''}`} style={{ gridColumn: item.span }}>
              {item.isPhoto ? (
                <img src={item.image} alt={item.label} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 25%' }} />
              ) : (
                <div style={{ width: '100%', height: '100%', background: 'repeating-linear-gradient(135deg, var(--stripe-1), var(--stripe-1) 14px, var(--stripe-2) 14px, var(--stripe-2) 28px)', display: 'grid', placeItems: 'center' }}>
                  <span style={{ fontFamily: 'Barlow Condensed, monospace', fontSize: 12, letterSpacing: 2, color: '#5a5a5a', textTransform: 'uppercase' }}>[ {item.label} ]</span>
                </div>
              )}
              <div className="label">
                <span className="service-title" style={{ margin: 0, color: '#f4f4f4' }}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-full" style={{ paddingTop: 90, paddingBottom: 96 }}>
        <div className="section-heading" style={{ marginBottom: 44 }}>
          <div className="section-eyebrow">
            <span />
            Six Zones
          </div>
        </div>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {equipmentZones.map((zone) => (
            <div key={zone.title} className="zone-card">
              <h3 className="zone-title" style={{ color: 'var(--accent)' }}>{zone.title}</h3>
              <div style={{ marginTop: 16, height: 1, background: 'var(--border)' }} />
              <div style={{ marginTop: 20, display: 'grid', gap: 12 }}>
                {zone.items.map((item) => (
                  <div key={item} className="feature-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-alt section-cta" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <h2 className="section-title" style={{ fontSize: 'clamp(32px,4.4vw,56px)' }}>Keep your floor stocked</h2>
        <p className="section-copy">Every zone is maintained daily so you never have to wait for the kit you need.</p>
        <div className="section-cta cta-actions">
          <a href="/pricing" className="button button-primary">See Memberships</a>
          <a href="/area" className="button button-outline">Visit the club</a>
        </div>
      </section>
    </>
  )
}
