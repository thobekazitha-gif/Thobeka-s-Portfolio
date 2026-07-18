import { useEffect, type ReactNode } from 'react'
import Lenis from 'lenis'

declare global {
  interface Window {
    lenis?: Lenis
  }
}

/**
 * Wraps the whole app in Lenis smooth (inertia) scrolling. Also:
 *  - patches <a href="#...">  clicks to scroll through Lenis
 *  - exposes the instance on window.lenis so other components
 *    (e.g. the Hero "View Projects" button) can call
 *    window.lenis.scrollTo(...) instead of the native
 *    scrollIntoView — mixing the two is what was causing scrolling
 *    to seem stuck, since Lenis and the browser's own smooth-scroll
 *    were both fighting to control the same animation.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })
    window.lenis = lenis

    let raf: number
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!target) return
      const id = target.getAttribute('href')?.slice(1)
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -20 })
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onClick)
      lenis.destroy()
      window.lenis = undefined
    }
  }, [])

  return <>{children}</>
}