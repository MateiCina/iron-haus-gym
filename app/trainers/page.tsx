import { coachingSteps, trainers } from '@/lib/content'

export const metadata = {
  title: 'Trainers',
  description:
    'Meet the IRONHAUS coaching team — competitive lifters and certified coaches who program strength, conditioning, and recovery for every level.',
  alternates: { canonical: '/trainers' },
}

export default function TrainersPage() {
  return (
    <>
      <section className="section section-full" style={{ paddingTop: 84, paddingBottom: 78, borderBottom: '1px solid var(--border)' }}>
        <div className="section-heading" style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
          <div className="section-eyebrow">
            <span />
            The Coaches
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(46px,7vw,104px)' }}>
            Trained by people
            <br />who <span style={{ color: 'var(--accent)' }}>compete</span>
          </h1>
          <p className="section-copy">
            Every coach at IRONHAUS is a certified, active competitor. They program for your goals, track your numbers, and are on the floor when you train.
          </p>
        </div>
      </section>
      <section className="section section-alt" style={{ paddingTop: 90, paddingBottom: 90 }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {trainers.map((trainer) => (
            <article key={trainer.name} className="trainer-card" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', overflow: 'hidden' }}>
              <div style={{ minHeight: 300, background: trainer.image ? `url(${trainer.image}) center 15% / cover no-repeat` : 'repeating-linear-gradient(135deg, var(--stripe-1), var(--stripe-1) 14px, var(--stripe-2) 14px, var(--stripe-2) 28px)', display: 'grid', placeItems: 'center' }}>
                {!trainer.image && <span className="trainer-initials">{trainer.initials}</span>}
              </div>
              <div style={{ padding: 28 }}>
                <div className="info-heading">{trainer.role}</div>
                <h3 className="trainer-card-body" style={{ fontFamily: 'Anton, sans-serif', fontSize: 28, margin: '6px 0 0', textTransform: 'uppercase' }}>{trainer.name}</h3>
                <p className="trainer-copy" style={{ marginTop: 12 }}>{trainer.description}</p>
                <div className="trainer-tags" style={{ marginTop: 16 }}>
                  {trainer.tags.map((tag) => (
                    <span key={tag} className="trainer-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-full" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-heading" style={{ marginBottom: 44 }}>
          <div className="section-eyebrow">
            <span />
            How Coaching Works
          </div>
        </div>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {coachingSteps.map((step) => (
            <div key={step.number} className="zone-card">
              <div style={{ fontFamily: 'Anton, sans-serif', fontSize: 32, color: 'var(--accent)' }}>{step.number}</div>
              <h3 className="zone-title">{step.title}</h3>
              <p className="zone-copy">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section section-alt section-cta" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <h2 className="section-title" style={{ fontSize: 'clamp(32px,4.4vw,56px)' }}>Book your first session</h2>
        <p className="section-copy">Free with any Iron or Unlimited membership. Meet your coach and set your goals.</p>
        <div className="section-cta cta-actions">
          <a href="/pricing" className="button button-primary">See Memberships</a>
          <a href="/area" className="button button-outline">Contact Us</a>
        </div>
      </section>
    </>
  )
}
