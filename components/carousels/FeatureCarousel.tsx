'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'

import type { FeatureCarouselCard } from '@/content/carousels'

type FeatureCarouselProps = {
  title: string
  subTitle: string
  cards: FeatureCarouselCard[]
}

export default function FeatureCarousel({ title, subTitle, cards }: FeatureCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const dragStartXRef = useRef(0)
  const dragStartScrollLeftRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateFadeState = useCallback(() => {
    const container = scrollRef.current
    if (!container) return

    const { scrollLeft, scrollWidth, clientWidth } = container
    const maxScrollLeft = scrollWidth - clientWidth
    const epsilon = 2

    setCanScrollLeft(scrollLeft > epsilon)
    setCanScrollRight(scrollLeft < maxScrollLeft - epsilon)
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    updateFadeState()

    const handleScroll = () => updateFadeState()
    const handleResize = () => updateFadeState()

    container.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [cards.length, updateFadeState])

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return

    const container = scrollRef.current
    if (!container) return

    dragStartXRef.current = event.clientX
    dragStartScrollLeftRef.current = container.scrollLeft
    setIsDragging(true)
    container.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const container = scrollRef.current
    if (!container) return

    const deltaX = event.clientX - dragStartXRef.current
    container.scrollLeft = dragStartScrollLeftRef.current - deltaX
  }

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current
    if (!container) return

    if (container.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId)
    }
    setIsDragging(false)
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8" id="funkcje">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">{subTitle}</span>
      </div>

      <div className="section-animate py-5" data-animate="slot" style={{ animationDelay: '280ms' }}>
        <div className="relative">
          <div
            className={`feature-carousel-scroll overflow-x-auto overflow-y-visible px-3 sm:px-4 ${
              isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
            }`}
            onPointerCancel={handlePointerUp}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            ref={scrollRef}
          >
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

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--color-neutral)] via-[var(--color-neutral)]/95 to-transparent transition-opacity duration-200 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--color-neutral)] via-[var(--color-neutral)]/95 to-transparent transition-opacity duration-200 ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </div>
    </section>
  )
}
