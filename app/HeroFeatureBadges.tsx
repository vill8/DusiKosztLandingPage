'use client'

import { useState } from 'react'

type FeatureBadge = {
  id: string
  label: string
  tooltip: string
}

type HeroFeatureBadgesProps = {
  items: FeatureBadge[]
}

export default function HeroFeatureBadges({ items }: HeroFeatureBadgesProps) {
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null)
  const activeTooltip = items.find((item) => item.id === activeTooltipId)?.tooltip

  return (
    <div className="relative">
      <div className="mb-1 hidden items-center gap-1.5 text-[10px] text-[var(--color-text-muted)] md:inline-flex">
        <span
          aria-hidden="true"
          className="h-3.5 w-3.5 bg-[var(--color-primary)]"
          style={{
            maskImage: 'url(/cursor-icon.png)',
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
            maskSize: 'contain',
            WebkitMaskImage: 'url(/cursor-icon.png)',
            WebkitMaskPosition: 'center',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: 'contain',
          }}
        />
        Najedź na boxy, aby zobaczyć opis
      </div>

      <div
        className="flex flex-nowrap gap-2 overflow-x-auto pb-2 text-[11px] md:overflow-visible"
        onMouseLeave={() => setActiveTooltipId(null)}
        style={{ overflowY: 'visible', scrollbarWidth: 'none' }}
      >
        {items.map((item) => (
          <button
            className="whitespace-nowrap rounded-full border border-[var(--color-primary)]/65 bg-[var(--color-primary)]/[0.05] px-2 py-1 text-[var(--color-primary)] shadow-[0_0_0_1px_rgba(0,209,178,0.32),0_0_14px_rgba(0,209,178,0.35)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-[var(--color-primary)]/15 hover:shadow-[0_0_0_1px_rgba(0,209,178,0.45),0_0_22px_rgba(0,209,178,0.55)] hover:-translate-y-0.5 focus-visible:bg-[var(--color-primary)]/15 focus-visible:shadow-[0_0_0_1px_rgba(0,209,178,0.45),0_0_22px_rgba(0,209,178,0.55)] focus-visible:outline-none"
            key={item.id}
            onBlur={() => setActiveTooltipId((current) => (current === item.id ? null : current))}
            onFocus={() => setActiveTooltipId(item.id)}
            onMouseEnter={() => setActiveTooltipId(item.id)}
            onMouseLeave={() => setActiveTooltipId((current) => (current === item.id ? null : current))}
            type="button"
          >
            {item.label}
          </button>
        ))}
      </div>

      {activeTooltip && (
        <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-[min(92vw,34rem)] -translate-x-1/2 rounded-xl border border-[var(--color-primary)] bg-[var(--color-surface)] px-3 py-2 text-xs leading-relaxed text-[var(--color-text)] shadow-lg">
          {activeTooltip}
        </div>
      )}
    </div>
  )
}
