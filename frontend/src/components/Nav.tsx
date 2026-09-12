import { useState, useEffect } from 'react'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="site-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1.25rem 3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(9,9,9,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: 'pointer', background: 'none', border: 'none' }}
      >
        <span className="font-display" style={{ fontSize: '1.5rem', fontWeight: 900, fontStyle: 'italic', color: '#C9A84C' }}>
          TZ
        </span>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: '#666', display: 'block', textTransform: 'uppercase', marginTop: '-2px' }}>
          Portfolio
        </span>
      </button>

      {/* Desktop links */}
      <div style={{ gap: '2.5rem', alignItems: 'center' }} className="hidden md:flex">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => handleNav(l)}
            style={{
              background: 'none',
              border: 'none',
              color: '#999',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'color 0.2s',
              fontFamily: 'Inter, sans-serif',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
          >
            {l}
          </button>
        ))}
        <a
          href="/Thobeka_Zitha_SoftwareEngineer_Resume.pdf"
          download="Thobeka_Zitha_SoftwareEngineer_Resume.pdf"
          style={{
            color: '#999',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'color 0.2s',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleNav('Contact') }}
          style={{
            padding: '0.5rem 1.25rem',
            border: '1px solid #C9A84C',
            color: '#C9A84C',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            transition: 'all 0.2s',
            fontFamily: 'Inter, sans-serif',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#C9A84C'
            e.currentTarget.style.color = '#090909'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#C9A84C'
          }}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile burger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C9A84C', flexDirection: 'column', gap: '5px' }}
        className="flex md:hidden"
      >
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ width: '22px', height: '1px', background: '#C9A84C', display: 'block', transition: 'all 0.3s' }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#090909',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          zIndex: 99,
        }}>
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              className="font-display"
              style={{ background: 'none', border: 'none', color: '#f5f5f0', fontSize: '2rem', fontWeight: 700, cursor: 'pointer' }}
            >
              {l}
            </button>
          ))}
          <a
            href="/Thobeka_Zitha_SoftwareEngineer_Resume.pdf"
            download="Thobeka_Zitha_SoftwareEngineer_Resume.pdf"
            style={{ color: '#C9A84C', fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'Inter, sans-serif' }}
          >
            Download Resume
          </a>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '2rem', background: 'none', border: 'none', color: '#C9A84C', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          .site-nav { padding: 1rem 1.25rem !important; }
        }
      `}</style>
    </nav>
  )
}