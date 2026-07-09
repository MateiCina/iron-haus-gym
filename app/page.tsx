import TrainerCarousel from '@/components/TrainerCarousel'
import MapMock from '@/components/MapMock'
import { aboutTags, heroIntro, heroStats, services, galleryItems, pricingPlans, dayPass, scheduleDays, testimonials, hours } from '@/lib/content'

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay-bottom" />
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span />
            {heroIntro.eyebrow}
          </div>
          <h1 className="hero-title">
            Where strength
            <br />is <span style={{ color: '#39ff88' }}>forged</span>.
          </h1>
          <p>{heroIntro.description}</p>
          <div className="hero-actions">
            <a href={heroIntro.ctaPrimary.href} className="button button-primary">
              {heroIntro.ctaPrimary.label}
            </a>
            <a href={heroIntro.ctaSecondary.href} className="button button-outline">
              {heroIntro.ctaSecondary.label}
            </a>
          </div>
          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="hero-stat-number">{stat.value}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-full">
        <div className="about-grid">
          <div className="about-copy">
            <div className="section-eyebrow">
              <span />
              About The House
            </div>
            <h2 className="section-title section-title-alt">
              Not a fitness studio.
              <br />A <span style={{ color: 'var(--accent)' }}>training house</span>.
            </h2>
            <p className="lead-copy">
              IRONHAUS was built by lifters, for lifters. No queues for the mirror, no gimmicks — just 12,000 sq ft of premium iron, competition platforms, sled turf, and coaches who actually know your name and your numbers.
            </p>
            <p className="lead-copy">
              Whether you're chasing your first pull-up or a new deadlift PR, you'll train alongside people who push you and a team that programs for you.
            </p>
            <div className="tag-list">
              {aboutTags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src="/uploads/sule-makaroglu-8W8v51pVbEo-unsplash.jpg" alt="Training at IRONHAUS" loading="lazy" decoding="async" style={{ width: '100%', height: '520px', objectFit: 'cover', objectPosition: 'center 25%', borderRadius: 14 }} />
            <div className="about-badge">
              <h3>12,000</h3>
              <p>Sq Ft Of Iron</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading" style={{ marginBottom: 56 }}>
          <div className="section-eyebrow">
            <span />
            What We Do
          </div>
          <h2 className="section-title">Train your way</h2>
          <p className="section-copy" style={{ maxWidth: '38ch' }}>
            Six programs, one membership. Mix and match — every service is included in your monthly plan.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-icon">{renderIcon(service.icon)}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-copy">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-full">
        <div className="section-heading" style={{ marginBottom: 56 }}>
          <div className="section-eyebrow">
            <span />
            The Coaches
          </div>
          <h2 className="section-title">Trained by people who compete</h2>
        </div>
        <TrainerCarousel />
      </section>

      <section className="section section-alt">
        <div className="section-heading" style={{ marginBottom: 48 }}>
          <div className="section-eyebrow">
            <span />
            The Floor
          </div>
          <h2 className="section-title">Kit & equipment</h2>
          <p className="section-copy" style={{ maxWidth: '36ch' }}>
            Competition-grade gear, maintained daily and never oversubscribed.
          </p>
        </div>
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

      <section className="section section-full">
        <div className="section-heading" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-eyebrow">
            <span />
            Membership
          </div>
          <h2 className="section-title">Pick your plan</h2>
          <p className="section-copy">
            No contracts, no joining fee. Cancel or freeze any time.
          </p>
        </div>
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
              <a href="/area" className={plan.featured ? 'button button-primary' : 'button button-outline'} style={{ marginTop: 30, alignSelf: 'flex-start', textAlign: 'center' }}>
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
          <a href="/area" className="button button-primary">
            {dayPass.cta}
          </a>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading" style={{ marginBottom: 48 }}>
          <div className="section-eyebrow">
            <span />
            Timetable
          </div>
          <h2 className="section-title">Class schedule</h2>
          <p className="section-copy" style={{ maxWidth: '34ch' }}>
            All classes included with membership. Reserve your spot in the app.
          </p>
        </div>
        <div className="schedule-grid">
          {scheduleDays.slice(0, 6).map((day) => (
            <div key={day.day} className="schedule-card">
              <div className="day-title">{day.day}</div>
              <div className="session-row">
                {day.sessions.map((session) => (
                  <div key={session.time}>
                    <div className="session-time">{session.time}</div>
                    <div className="session-name">{session.name}</div>
                    <div className="session-coach">{session.coach}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-full">
        <div className="section-heading" style={{ marginBottom: 56 }}>
          <div className="section-eyebrow">
            <span />
            The Members
          </div>
          <h2 className="section-title">Real people, real progress</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card">
              <div className="author-avatar">{testimonial.initials}</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-name">{testimonial.name}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="area" className="section section-alt">
        <div className="section-heading" style={{ marginBottom: 48 }}>
          <div className="section-eyebrow">
            <span />
            Find Us
          </div>
          <h2 className="section-title">Come train with us</h2>
        </div>
        <div className="area-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="info-card">
              <div className="info-heading">Location</div>
              <p className="info-text">Unit 4, The Ironworks<br />112 Dockside Road<br />East Docklands, E16 2QR</p>
            </div>
            <div className="info-card">
              <div className="info-heading">Opening Hours</div>
              <div className="info-text" style={{ display: 'grid', gap: 9 }}>
                {hours.map((item) => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{item.label}</span>
                    <span style={{ color: 'var(--text)' }}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="info-card">
              <div className="info-heading">Contact</div>
              <p className="info-text">020 7946 0114<br />train@ironhaus.club</p>
            </div>
          </div>
          <div className="map-card">
            <MapMock />
          </div>
        </div>
      </section>
    </>
  )
}

function renderIcon(name: string) {
  switch (name) {
    case 'strength':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="8" y1="6" x2="8" y2="18" />
          <line x1="16" y1="6" x2="16" y2="18" />
        </svg>
      )
    case 'functional':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h4l3 8 4-16 3 8h4" />
        </svg>
      )
    case 'coaching':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="8" r="4" />
        </svg>
      )
    case 'group':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    case 'recovery':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.8 5.6a5 5 0 0 0-8.8-1 5 5 0 0 0-8.8 1c-1.4 3 .4 6 3 8.4 1.6 1.5 4 3.5 5.8 5 1.8-1.5 4.2-3.5 5.8-5 2.6-2.4 4.4-5.4 3-8.4z" />
        </svg>
      )
    case 'nutrition':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3C12 3 6 9.5 6 14a6 6 0 0 0 12 0c0-4.5-6-11-6-11z" />
        </svg>
      )
    default:
      return null
  }
}
