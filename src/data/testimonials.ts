export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Aura gave our leadership team four hours of their week back. It reads like email from the future.',
    name: 'Parker Wilf',
    role: 'Group Product Manager',
    company: 'MERCURY',
  },
  {
    quote:
      "The command palette alone has changed how I process messages. I can't imagine going back to a traditional client.",
    name: 'Andrew von Rosenbach',
    role: 'Senior Engineering Program Manager',
    company: 'COHERE',
  },
  {
    quote:
      'Triage that actually understands context. Our team stopped dreading Monday morning inboxes.',
    name: 'Mathies Christensen',
    role: 'Engineering Manager',
    company: 'LUNAR',
  },
]