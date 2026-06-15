export interface PricingPlan {
  id: string
  tier: string
  monthlyPrice: string
  yearlyPrice: string
  description: string
  features: string[]
  isPro?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    tier: 'Free',
    monthlyPrice: 'Free',
    yearlyPrice: 'Free',
    description: 'For creators taking their first steps with Forma.',
    features: [
      'Up to 3 projects in the cloud',
      'Image export up to 1080p',
      'Basic editing tools',
      'Free templates and icons',
      'Access via web and mobile app',
    ],
  },
  {
    id: 'standard',
    tier: 'Standard',
    monthlyPrice: '$9,99/m',
    yearlyPrice: '$99,99/y',
    description:
      'For freelancers and small teams who need more freedom and flexibility.',
    features: [
      'Up to 50 projects in the cloud',
      'Export up to 4K',
      'Advanced editing toolkit',
      'Team collaboration (up to 5 members)',
      'Access to premium template library',
    ],
  },
  {
    id: 'pro',
    tier: 'Pro',
    monthlyPrice: '$19,99/m',
    yearlyPrice: '$199,99/y',
    description:
      'For studios, agencies, and professional creators working with brands.',
    features: [
      'Unlimited projects',
      'Export up to 8K + animations',
      'AI-powered content generation tools',
      'Unlimited team members',
      'Brand customization',
    ],
    isPro: true,
  },
]