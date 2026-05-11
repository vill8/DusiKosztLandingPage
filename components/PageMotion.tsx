'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))

const speedMap: Record<string, number> = {
  soft: 10,
  medium: 16,
  strong: 24,
}

export default function PageMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
      gestureOrientation: 'vertical',
    })

    lenis.on('scroll', ScrollTrigger.update)

    let animationFrameId = 0
    const animate = (time: number) => {
      lenis.raf(time)
      animationFrameId = window.requestAnimationFrame(animate)
    }
    animationFrameId = window.requestAnimationFrame(animate)

    const ctx = gsap.context(() => {
      const revealTargets = gsap.utils.toArray<HTMLElement>('[data-animate="slot"]')

      revealTargets.forEach((target, index) => {
        gsap.fromTo(
          target,
          { autoAlpha: 0, y: 48, scale: 0.985 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            ease: 'power3.out',
            delay: Math.min(index * 0.06, 0.24),
            scrollTrigger: {
              trigger: target,
              start: 'top 86%',
              once: true,
            },
          },
        )
      })

      const parallaxTargets = gsap.utils.toArray<HTMLElement>('[data-parallax]')
      parallaxTargets.forEach((target) => {
        const key = target.dataset.parallax ?? 'soft'
        const yPercent = speedMap[key] ?? speedMap.soft
        gsap.to(target, {
          yPercent,
          ease: 'none',
          scrollTrigger: {
            trigger: target,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
      })

      const floatTargets = gsap.utils.toArray<HTMLElement>('[data-float="hero-device"]')
      floatTargets.forEach((target) => {
        gsap.fromTo(
          target,
          { y: 0, rotate: -0.6 },
          {
            y: -18,
            rotate: 0.6,
            ease: 'none',
            scrollTrigger: {
              trigger: target,
              start: 'top 85%',
              end: 'bottom 15%',
              scrub: 1.3,
            },
          },
        )
      })
    })

    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
      window.cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [])

  return null
}
