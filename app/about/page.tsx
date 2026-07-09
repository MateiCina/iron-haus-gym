import { aboutStats, aboutValues, timeline } from '@/lib/content'

export const metadata = {
  title: 'About',
  description:
    'IRONHAUS is a lifter-built strength & conditioning club in East Docklands — 12,000 sq ft of premium iron, competition platforms, and coaches who know your numbers.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <>
      <section className="section section-full" style={{ paddingTop: 84, paddingBottom: 78, borderBottom: '1px solid var(--border)' }}>
        <div className="section-heading" style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div className="section-eyebrow">
            <span />
            About The House
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(46px,7vw,104px)', maxWidth: '15ch' }}>
            More iron.
            <br />Less <span style={{ color: 'var(--accent)' }}>nonsense</span>.
          </h1>
          <p className="section-copy">
            IRONHAUS started as a three-rack railway arch and a promise: build a serious training space with no gimmicks, no ego, and coaches who actually give a damn.
          </p>
        </div>
      </section>
      <section className="section section-full" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="about-grid">
          <div>
            <div className="section-eyebrow">
              <span />
              Our Story
            </div>
            <h2 className="section-title" style={{ fontSize: 'clamp(34px,4.4vw,58px)' }}>
              Built by lifters,
              <br />for lifters
            </h2>
            <p className="lead-copy">
              We were tired of commercial gyms — broken kit, queues for the squat rack, and "trainers" reading from a clipboard. So in 2014 we opened our own floor and filled it with the gear we actually wanted to train on.
            </p>
            <p className="lead-copy">
              Twelve years on we're still independent, still coach-led, and still obsessed with the details: platforms that don't wobble, chalk that's allowed, and a team that knows your name and your numbers.
            </p>
          </div>
          <div className="about-image">
            <img src="/uploads/sule-makaroglu-8W8v51pVbEo-unsplash.jpg" alt="Training at IRONHAUS" loading="lazy" decoding="async" style={{ width: '100%', height: '520px', objectFit: 'cover', objectPosition: 'center 22%', borderRadius: 14 }} />
            <div className="about-badge">
              <h3>2014</h3>
              <p>The First Rack</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-heading" style={{ marginBottom: 44 }}>
          <div className="section-eyebrow">
            <span />
            What We Stand For
          </div>
        </div>
        <div className="value-grid">
          {aboutValues.map((value) => (
            <div key={value.title} className="value-card">
              <div className="value-icon">{renderValueIcon(value.icon)}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-copy">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-full" style={{ paddingTop: 100, paddingBottom: 100 }}>
        <div className="section-heading" style={{ marginBottom: 48 }}>
          <div className="section-eyebrow">
            <span />
            The Journey
          </div>
          <h2 className="section-title" style={{ fontSize: 'clamp(34px,4.4vw,58px)' }}>
            From arch to institution
          </h2>
        </div>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
          {timeline.map((item) => (
            <div key={item.year} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 32, padding: '26px 0', borderTop: '1px solid var(--border-2)' }}>
              <div style={{ fontFamily: 'Anton, sans-serif', fontSize: 34, color: 'var(--accent)' }}>{item.year}</div>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--muted)', fontWeight: 300, alignSelf: 'center' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-alt" style={{ paddingTop: 70, paddingBottom: 70 }}>
        <div className="stats-grid">
          {aboutStats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Anton, sans-serif', fontSize: 52, color: 'var(--accent)', lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: 14, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted-3)', marginTop: 6 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-full section-cta" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <h2 className="section-title" style={{ fontSize: 'clamp(32px,4.4vw,56px)' }}>Come see the floor</h2>
        <p className="section-copy">Book a no-pressure tour and try a session on us.</p>
        <div className="section-cta cta-actions">
          <a href="/pricing" className="button button-primary">Join Now</a>
          <a href="/area" className="button button-outline">Book a Tour</a>
        </div>
      </section>
    </>
  )
}

function renderValueIcon(name: string) {
  switch (name) {
    case 'x':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      )
    case 'coach':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="8" r="4" />
        </svg>
      )
    case 'clock':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
    case 'heart':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.8 5.6a5 5 0 0 0-8.8-1 5 5 0 0 0-8.8 1c-1.4 3 .4 6 3 8.4 1.6 1.5 4 3.5 5.8 5 1.8-1.5 4.2-3.5 5.8-5 2.6-2.4 4.4-5.4 3-8.4z" />
        </svg>
      )
    default:
      return null
  }
}
