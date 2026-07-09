import { dayPass, faqItems, pricingPlans } from '@/lib/content'

export const metadata = {
  title: 'Pricing',
  description:
    'Simple membership plans with no contracts and no joining fee. Cancel or freeze any time, or drop in with a £12 day pass.',
  alternates: { canonical: '/pricing' },
}

export default function PricingPage() {
  return (
    <>
      <section className="section section-full" style={{ paddingTop: 84, paddingBottom: 60, borderBottom: '1px solid var(--border)' }}>
        <div className="section-heading" style={{ maxWidth: 'var(--container)', margin: '0 auto', textAlign: 'center' }}>
          <div className="section-eyebrow">
            <span />
            Membership
          </div>
          <h1 className="section-title" style={{ fontSize: 'clamp(46px,7vw,104px)' }}>
            Pick your <span style={{ color: 'var(--accent)' }}>plan</span>
          </h1>
          <p className="section-copy">
            No contracts, no joining fee, no lock-in. Cancel or freeze any time. Every plan includes full floor access.
          </p>
        </div>
      </section>
      <section className="section section-full" style={{ paddingTop: 30, paddingBottom: 80 }}>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <span className="pricing-pill">Most Popular</span>}
              <h3 className="pricing-title" style={{ color: plan.featured ? 'var(--accent)' : 'var(--text)' }}>{plan.name}</h3>
              <div className="pricing-price">
                <span style={{ color: plan.featured ? 'var(--accent)' : 'var(--text)' }}>{plan.price}</span>
                <span style={{ color: plan.featured ? 'var(--muted)' : 'var(--muted-3)' }}>/ mo</span>
              </div>
              <p className="section-copy" style={{ color: plan.featured ? 'var(--muted)' : 'var(--muted-3)', marginTop: 8 }}>{plan.tagline}</p>
              <div className="pricing-list">
                {plan.features.map((feature) => (
                  <div key={feature} className="feature-row">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <a href="/area" className={plan.featured ? 'button button-primary' : 'button button-outline'} style={{ marginTop: 30, alignSelf: 'flex-start' }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <div className="day-pass">
          <div>
            <h3 className="feature-title" style={{ margin: 0 }}>
              Just visiting? <span style={{ color: 'var(--accent)' }}>Day Pass £12</span>
            </h3>
            <p className="section-copy" style={{ marginTop: 6 }}>{dayPass.description}</p>
          </div>
          <a href="/area" className="button button-primary">{dayPass.cta}</a>
        </div>
      </section>
      <section className="section section-alt" style={{ paddingTop: 96, paddingBottom: 96 }}>
        <div className="section-heading" style={{ marginBottom: 44 }}>
          <div className="section-eyebrow">
            <span />
            Good To Know
          </div>
        </div>
        <div className="rc-2card" style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {faqItems.map((item) => (
            <div key={item.question} className="faq-card">
              <h3 className="faq-title">{item.question}</h3>
              <p className="faq-copy">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
