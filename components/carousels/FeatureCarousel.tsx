import type { FeatureCarouselCard } from '@/content/carousels'

type FeatureCarouselProps = {
  title: string
  subTitle: string
  cards: FeatureCarouselCard[]
}

export default function FeatureCarousel({ title, subTitle, cards }: FeatureCarouselProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8" id="funkcje">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">{subTitle}</span>
      </div>

      <div className="section-animate py-5" data-animate="slot" style={{ animationDelay: '280ms' }}>
        <div className="feature-carousel-scroll overflow-x-auto overflow-y-visible px-3 sm:px-4">
          <div className="flex snap-x snap-mandatory gap-4 pb-3 pt-7">
            {cards.map((card) => (
              <article
                className="min-h-44 min-w-[250px] snap-start rounded-2xl border border-[var(--color-primary)]/40 bg-[var(--color-surface)]/95 p-5 shadow-[0_0_0_1px_rgba(0,209,178,0.15),0_0_12px_rgba(0,209,178,0.18)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)]/70 hover:shadow-[0_0_0_1px_rgba(0,209,178,0.34),0_0_24px_rgba(0,209,178,0.42)] sm:min-w-[280px] lg:min-w-[300px]"
                key={card.id}
              >
                <p className="mb-3 text-sm font-medium text-[var(--color-primary)]">{card.header}</p>
                <h3 className="mb-2 text-xl font-semibold">{card.subHeader}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
