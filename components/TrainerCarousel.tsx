'use client'

import { useRef } from 'react'
import { trainers } from '@/lib/content'

export default function TrainerCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const scrollBy = (distance: number) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: distance, behavior: 'smooth' })
    }
  }

  return (
    <div className="trainer-carousel-section">
      <div ref={scrollerRef} className="trainer-carousel">
        {trainers.map((trainer) => (
          <article key={trainer.name} className="trainer-card">
            <div
              className="trainer-card-image"
              style={{ backgroundImage: trainer.image ? `url(${trainer.image})` : 'none' }}
            >
              {!trainer.image && <span className="trainer-initials">{trainer.initials}</span>}
              <span className="trainer-role-pill">{trainer.role}</span>
            </div>
            <div className="trainer-card-body">
              <h3>{trainer.name}</h3>
              <p>{trainer.description}</p>
              <div className="trainer-tags">
                {trainer.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="trainer-carousel-actions">
        <button type="button" onClick={() => scrollBy(-460)} aria-label="Scroll left">
          <span className="arrow">‹</span>
        </button>
        <button type="button" onClick={() => scrollBy(460)} aria-label="Scroll right">
          <span className="arrow">›</span>
        </button>
      </div>
    </div>
  )
}
