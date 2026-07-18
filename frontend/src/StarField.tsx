import { useEffect, useRef } from 'react'

/**
 * Canvas particle field: stars start near the top-left corner and
 * travel diagonally down toward the bottom-right, with a long
 * glowing tail trailing back up-left. Just before reaching the
 * bottom edge, each one bursts into a scatter of glitter that keeps
 * falling under gravity and fades out — then a fresh star starts
 * again from a new spot near the top-left.
 */

type Faller = {
  x: number // 0–1
  y: number // 0–1, 0 = top
  speed: number
  size: number
  delay: number
  driftX: number // horizontal fall speed (down-right)
}

type Glitter = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  life: number
  maxLife: number
  hue: 'gold' | 'white'
}

const EXPLODE_AT = 0.92 // fraction from the top where a falling star detonates

export default function StarField({ risers = 6 }: { risers?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const makeFaller = (fresh = false): Faller => ({
      x: Math.random() * 0.18, // near the left edge
      y: fresh ? Math.random() * 0.3 - 0.3 : -0.05 - Math.random() * 0.2, // near/above the top edge
      speed: 0.16 + Math.random() * 0.12,
      size: 1.4 + Math.random() * 1.6,
      delay: fresh ? Math.random() * 5 : Math.random() * 3,
      driftX: 0.05 + Math.random() * 0.05, // travels down-right
    })

    const fallerList: Faller[] = Array.from({ length: risers }, () => makeFaller(true))
    let glitter: Glitter[] = []

    const explode = (x: number, y: number) => {
      const count = 14 + Math.floor(Math.random() * 8)
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const force = 0.25 + Math.random() * 0.55
        glitter.push({
          x,
          y,
          vx: Math.cos(angle) * force,
          vy: Math.sin(angle) * force * 0.6 - 0.1,
          size: 1 + Math.random() * 1.8,
          life: 0,
          maxLife: 1.1 + Math.random() * 0.8,
          hue: Math.random() > 0.4 ? 'gold' : 'white',
        })
      }
    }

    let raf: number
    let last = performance.now()

    const draw = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      ctx.clearRect(0, 0, width, height)

      // falling stars — long tail trailing back up-left
      for (const f of fallerList) {
        if (f.delay > 0) {
          f.delay -= dt
          continue
        }
        f.y += f.speed * dt
        f.x += f.driftX * dt

        if (f.y >= EXPLODE_AT) {
          explode(f.x * width, f.y * height)
          Object.assign(f, makeFaller(false))
          continue
        }

        const px = f.x * width
        const py = f.y * height
        const tailLen = 70 + f.size * 34 // longer tail
        const tailX = px - tailLen * 0.6
        const tailY = py - tailLen

        const grad = ctx.createLinearGradient(px, py, tailX, tailY)
        grad.addColorStop(0, 'rgba(250, 240, 210, 0.95)')
        grad.addColorStop(0.45, 'rgba(232, 200, 112, 0.35)')
        grad.addColorStop(1, 'rgba(232, 200, 112, 0)')
        ctx.strokeStyle = grad
        ctx.lineWidth = f.size
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(px, py)
        ctx.lineTo(tailX, tailY)
        ctx.stroke()

        ctx.beginPath()
        ctx.fillStyle = 'rgba(250, 240, 210, 0.95)'
        ctx.shadowColor = 'rgba(232, 200, 112, 0.85)'
        ctx.shadowBlur = 7
        ctx.arc(px, py, f.size * 0.9, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }

      // glitter burst particles
      glitter = glitter.filter((g) => g.life < g.maxLife && g.y < height + 20)
      for (const g of glitter) {
        g.life += dt
        g.vy += 0.9 * dt // gravity
        g.x += g.vx * 40 * dt
        g.y += g.vy * 40 * dt

        const fade = Math.max(0, 1 - g.life / g.maxLife)
        ctx.beginPath()
        ctx.fillStyle =
          g.hue === 'gold'
            ? `rgba(232, 200, 112, ${fade.toFixed(3)})`
            : `rgba(245, 240, 225, ${fade.toFixed(3)})`
        ctx.arc(g.x, g.y, g.size, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [risers])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}