import { useState } from 'react'
import { pricingPlans } from '@/data/pricing'

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2 6L5 9L10 3"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="c3-pricing-section" id="pricing">
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <filter id="c3-noise-pricing">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves={2}
              stitchTiles="stitch"
            />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.075" />
            </feComponentTransfer>
            <feComposite in2="SourceGraphic" operator="in" result="noise" />
            <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
          </filter>
        </defs>
      </svg>

      <div className="c3-watermark-container">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Your email.</span>
          <span className="c3-watermark-line-2">Revitalized</span>
        </div>
      </div>

      <div className="c3-grid">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`c3-card ${plan.isPro ? 'c3-card-pro' : ''}`}
          >
            <p className="c3-tier-small">{plan.tier}</p>
            <p className="c3-tier-large">
              {yearly ? plan.yearlyPrice : plan.monthlyPrice}
            </p>
            <p className="c3-desc">{plan.description}</p>
            <ul className="c3-list">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span className="c3-check">
                    <CheckIcon />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <button type="button" className="c3-btn">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      <div className="c3-toggle-wrap">
        <span className="c3-toggle-label">Yearly</span>
        <button
          type="button"
          className={`c3-toggle ${yearly ? 'active' : ''}`}
          onClick={() => setYearly(!yearly)}
          aria-pressed={yearly}
          aria-label="Toggle yearly pricing"
        >
          <span className="c3-toggle-knob" />
        </button>
      </div>
    </section>
  )
}