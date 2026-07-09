import { classSchedule, scheduleIntro } from '@/lib/content'

export const metadata = {
  title: 'Schedule',
  description:
    'Coach-led strength, conditioning, and recovery classes every day of the week — all included with your IRONHAUS membership.',
  alternates: { canonical: '/schedule' },
}

export default function SchedulePage() {
  return (
    <>
      <section className="section section-full" style={{ paddingTop: 84, paddingBottom: 78, borderBottom: '1px solid var(--border)' }}>
        <div className="section-heading" style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div className="section-eyebrow">
            <span />
            Classes
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(46px,7vw,104px)' }}>
            Group sessions built around strength
          </h1>
          <p className="section-copy">
            Stop guessing your training. Our coaches lead strength, conditioning, and recovery sessions for every experience level.
          </p>
        </div>
      </section>
      <section className="section section-alt" style={{ paddingTop: 64, paddingBottom: 30 }}>
        <div className="schedule-grid">
          {classSchedule.map((item) => (
            <div key={`${item.day}-${item.time}`} className="schedule-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'baseline' }}>
                <p className="section-eyebrow" style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', margin: 0, color: 'var(--muted-3)', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {item.day}
                </p>
                <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: 13, whiteSpace: 'nowrap', flexShrink: 0 }}>{item.time}</span>
              </div>
              <h3 className="section-title" style={{ fontSize: 'clamp(20px,2.1vw,30px)', marginTop: 10 }}>{item.className}</h3>
              <p className="section-copy" style={{ marginTop: 16 }}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-full" style={{ paddingTop: 90, paddingBottom: 96 }}>
        <div className="section-heading" style={{ marginBottom: 44 }}>
          <div className="section-eyebrow">
            <span />
            Why it works
          </div>
        </div>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 20 }}>
          <div className="zone-card">
            <h3 className="zone-title">{scheduleIntro.title}</h3>
            <p className="zone-copy">{scheduleIntro.description}</p>
          </div>
          <div className="zone-card">
            <h3 className="zone-title">Plan Every Week</h3>
            <div style={{ marginTop: 18, display: 'grid', gap: 14 }}>
              {scheduleIntro.bullets.map((bullet) => (
                <div key={bullet} className="feature-row" style={{ color: 'var(--text-bright)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section section-alt section-cta" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <h2 className="section-title" style={{ fontSize: 'clamp(32px,4.4vw,56px)' }}>Reserve your spot</h2>
        <p className="section-copy">Sessions are capped to keep classes effective. Book early and bring your best lift.</p>
        <div className="section-cta cta-actions">
          <a href="/pricing" className="button button-primary">Memberships</a>
          <a href="/area" className="button button-outline">Visit the club</a>
        </div>
      </section>
    </>
  )
}
