'use client'

import type { HeroScreenshotSlide } from '@/content/carousels'
import Image from 'next/image'
import type { PointerEvent } from 'react'
import { useEffect, useRef, useState } from 'react'

type HeroScreenshotCarouselProps = {
  slides: HeroScreenshotSlide[]
}

export default function HeroScreenshotCarousel({ slides }: HeroScreenshotCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const dragRef = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
  })

  const [isDragging, setIsDragging] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateArrows = () => {
    const element = trackRef.current
    if (!element) return

    const maxScrollLeft = element.scrollWidth - element.clientWidth
    setCanScrollLeft(element.scrollLeft > 4)
    setCanScrollRight(element.scrollLeft < maxScrollLeft - 4)
  }

  useEffect(() => {
    updateArrows()
    const element = trackRef.current
    if (!element) return

    const onScroll = () => updateArrows()
    const onResize = () => updateArrows()

    element.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      element.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const scrollBySlide = (direction: -1 | 1) => {
    const element = trackRef.current
    if (!element) return

    const firstSlide = element.firstElementChild as HTMLElement | null
    const styles = window.getComputedStyle(element)
    const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0
    const step = (firstSlide?.clientWidth ?? element.clientWidth) + gap

    element.scrollBy({
      left: direction * step,
      behavior: 'smooth',
    })
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return
    if (event.button !== 0) return

    const element = trackRef.current
    if (!element) return

    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScrollLeft: element.scrollLeft,
    }
    setIsDragging(true)
    element.setPointerCapture(event.pointerId)
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return
    const element = trackRef.current
    if (!element) return

    const deltaX = event.clientX - dragRef.current.startX
    element.scrollLeft = dragRef.current.startScrollLeft - deltaX
  }

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return
    dragRef.current.active = false
    setIsDragging(false)
    trackRef.current?.releasePointerCapture(event.pointerId)
  }

  return (
    <div className="relative h-full rounded-[1.6rem]">
      <div
        aria-label="Galeria screenshotow aplikacji"
        className={`flex h-full snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth rounded-[1.6rem] touch-pan-x ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onPointerCancel={stopDragging}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        ref={trackRef}
        style={{ scrollbarWidth: 'none' }}
      >
        {slides.map((slide) => (
          <div
            className="relative h-full min-w-full select-none snap-start overflow-hidden rounded-[1.6rem] border border-white/10 bg-[var(--color-neutral)]"
            key={slide.id}
          >
            {slide.imageSrc ? (
              <Image
                alt={slide.label}
                className="pointer-events-none object-cover object-top"
                draggable={false}
                fill
                priority={slide.id === '01'}
                src={slide.imageSrc}
              />
            ) : (
              <div className="flex h-full items-center justify-center px-6 text-center text-sm text-[var(--color-text-muted)]">
                {slide.label}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        aria-label="Poprzedni screenshot"
        className={`absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/45 px-2 py-1 text-lg leading-none text-white transition-opacity ${
          canScrollLeft ? 'opacity-100' : 'pointer-events-none opacity-30'
        }`}
        onClick={() => scrollBySlide(-1)}
        type="button"
      >
        ‹
      </button>
      <button
        aria-label="Nastepny screenshot"
        className={`absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-black/45 px-2 py-1 text-lg leading-none text-white transition-opacity ${
          canScrollRight ? 'opacity-100' : 'pointer-events-none opacity-30'
        }`}
        onClick={() => scrollBySlide(1)}
        type="button"
      >
        ›
      </button>
    </div>
  )
}
