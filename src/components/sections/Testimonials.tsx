import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure key={t.name} className="liquid-glass rounded-2xl p-6">
            <blockquote className="text-sm text-white/80 leading-[1.6]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-white/10">
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-white/50">{t.role}</p>
              <p className="text-xs text-white font-semibold tracking-wide mt-1">
                {t.company}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}