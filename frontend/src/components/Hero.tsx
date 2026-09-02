import { useEffect, useRef } from 'react'
import StarField from '../StarField'
import heroImg from '../imports/Hero_img.webp'

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame: number
    const animate = () => {
      if (lineRef.current) {
        const t = Date.now() / 2000
        lineRef.current.style.opacity = String(0.4 + 0.3 * Math.sin(t))
      }
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const goToProjects = () => {
    const el = document.getElementById('projects')
    if (!el) return
    if (window.lenis) {
      window.lenis.scrollTo(el, { offset: -20 })
    } else {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
        background: '#090909',
      }}
    >
      {/* Left panel */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '8rem 4rem 4rem 5rem',
        zIndex: 2,
      }}>
        {/* Rising stars + glitter burst — behind all the text content */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <StarField risers={6} />
        </div>

        {/* Actual hero content, lifted above the starfield */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Vertical number markers */}
          <div style={{ position: 'absolute', left: '-3rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['01', '02', '03', '04'].map((n) => (
              <span key={n} className="font-mono" style={{ fontSize: '0.6rem', color: '#333', letterSpacing: '0.1em' }}>{n}</span>
            ))}
          </div>

          {/* Eyebrow — spread edge-to-edge */}
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '480px', marginBottom: '1rem' }}>
            {['Full-Stack Developer', 'AI Engineer'].map((w) => (
              <span key={w} className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: '#C9A84C', textTransform: 'uppercase' }}>
                {w}
              </span>
            ))}
          </div>

          {/* Name — spread full width, uppercase */}
          <h1
            className="font-display"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              fontSize: 'clamp(2.6rem, 6.4vw, 5rem)',
              fontWeight: 900,
              lineHeight: 0.95,
              marginBottom: '1.5rem',
              color: '#f5f5f0',
              textTransform: 'uppercase',
            }}
          >
            <span>Thobeka</span>
            <span
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #C9A84C 0%, #E8C870 50%, #8B6E2E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Zitha
            </span>
          </h1>

          {/* Gold diagonal accent */}
          <div ref={lineRef} style={{
            width: '60px',
            height: '2px',
            background: 'linear-gradient(90deg, #C9A84C, transparent)',
            marginBottom: '1.5rem',
            transition: 'opacity 0.1s',
          }} />

          <p style={{ fontSize: '1rem', color: '#888', lineHeight: 1.7, maxWidth: '440px', marginBottom: '2.5rem', fontWeight: 300 }}>
            I build modern, scalable, and user-focused digital solutions that solve real-world problems. Specializing in full-stack development, AI-powered applications, and technology that improves people's lives across Africa.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={goToProjects}
              style={{
                padding: '0.85rem 2.5rem',
                background: '#C9A84C',
                color: '#090909',
                border: 'none',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#E8C870' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#C9A84C' }}
            >
              View Projects
            </button>
            <a
              href="/Thobeka_Zitha_SoftwareEngineer_Resume.pdf"
              download="Thobeka_Zitha_SoftwareEngineer_Resume.pdf"
              style={{
                padding: '0.85rem 2.5rem',
                background: 'transparent',
                color: '#f5f5f0',
                border: '1px solid rgba(245,245,240,0.2)',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 400,
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'Inter, sans-serif',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(245,245,240,0.2)'; e.currentTarget.style.color = '#f5f5f0' }}
            >
              Download CV
              <span aria-hidden="true" style={{ fontSize: '0.85rem' }}>↓</span>
            </a>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/thobekazitha-gif' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thobeka-zitha' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono"
                style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: '#555', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — photo. Background now matches the hero's own black (#090909)
          instead of the lighter #111 it had before, so the padding-top strip above
          the photo (which clears the fixed nav) doesn't read as a different shade. */}
      <div style={{
        position: 'relative',
        height: '920px',
        overflow: 'hidden',
        background: '#090909',
        paddingTop: '110px',
      }}>
        <img
          src={heroImg}
          alt="Elegant portrait"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, filter: 'grayscale(10%)' }}
        />

        {/* Dark overlay */}
        <div style={{ position: 'absolute', top: '110px', left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(9,9,9,0.6) 0%, rgba(9,9,9,0.1) 60%)', zIndex: 2 }} />
        {/* Gold diagonal accent bar */}
        <div style={{
          position: 'absolute',
          top: 'calc(110px + 20%)',
          left: '-20px',
          width: '4px',
          height: '120px',
          background: 'linear-gradient(180deg, transparent, #C9A84C, transparent)',
          zIndex: 2,
        }} />
        {/* Corner text */}
        <div style={{ position: 'absolute', bottom: '3rem', right: '2rem', textAlign: 'right', zIndex: 2 }}>
          <span className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', color: '#C9A84C', textTransform: 'uppercase' }}>
            Available for Work
          </span>
          <div style={{ width: '40px', height: '1px', background: '#C9A84C', marginTop: '0.5rem', marginLeft: 'auto' }} />
        </div>
        {/* Top-right label */}
        <div style={{ position: 'absolute', top: 'calc(110px + 2rem)', right: '2rem', zIndex: 2 }}>
          <span className="font-mono" style={{ fontSize: '0.55rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase' }}>
            Software Developer
          </span>
        </div>
      </div>

      {/* Mobile stacked layout override */}
      <style>{`
        @media (max-width: 768px) {
          #hero {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto 50vh;
          }
          #hero > div:first-child {
            padding: 6rem 2rem 2rem !important;
          }
          #hero h1 {
            font-size: clamp(2.2rem, 12vw, 3rem) !important;
          }
        }
      `}</style>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        zIndex: 5,
      }}>
        <span className="font-mono" style={{ fontSize: '0.55rem', letterSpacing: '0.25em', color: '#444', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(180deg, #C9A84C, transparent)',
          animation: 'pulse 2s infinite',
        }} />
      </div>
    </section>
  )
}