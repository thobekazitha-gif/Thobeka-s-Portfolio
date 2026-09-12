import contactImg from '../imports/african landscape.webp'

const interests = [
  'Full-Stack Development',
  'Software Engineering',
  'Backend Development',
  'AI Engineering',
  'FinTech',
  'Digital Transformation',
  'Enterprise Software',
]

const certifications = [
  { name: 'CAPACITI Tech Career Accelerator', year: '2024' },
  { name: 'NEMISA Cybersecurity Programme', year: '2024' },
  { name: 'Higher Certificate in Information Technology', year: '2024' },
]

export default function Contact() {
  return (
    <>
      {/* Looking For section */}
      <section id="looking-for" style={{ padding: '8rem 5rem', background: '#090909', position: 'relative', overflow: 'hidden' }}>
        {/* Large background text */}
        <div style={{
          position: 'absolute',
          right: '-2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(6rem, 15vw, 14rem)',
          fontFamily: 'Playfair Display, Georgia, serif',
          fontWeight: 900,
          fontStyle: 'italic',
          color: 'rgba(201,168,76,0.04)',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          pointerEvents: 'none',
        }}>
          OPEN
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '5rem' }}>
          <span className="font-mono" style={{ fontSize: '0.6rem', color: '#C9A84C', letterSpacing: '0.3em', textTransform: 'uppercase' }}>05 — Looking For</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
        </div>

        <div className="looking-for-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#f5f5f0', lineHeight: 1.1, marginBottom: '2rem' }}>
              Open to New<br />
              <span style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #C9A84C, #E8C870)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Opportunities</span>
            </h2>
            <p style={{ color: '#666', lineHeight: 1.8, fontSize: '0.9rem', fontWeight: 300, maxWidth: '400px' }}>
              I'm interested in roles that push the boundaries of what technology can do — especially where it creates real impact for people and businesses across Africa and the globe.
            </p>
          </div>

          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {interests.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: '0.6rem 1.25rem',
                    border: '1px solid rgba(201,168,76,0.2)',
                    fontSize: '0.75rem',
                    color: '#777',
                    transition: 'all 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#C9A84C'; e.currentTarget.style.color = '#C9A84C' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'; e.currentTarget.style.color = '#777' }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
          <span className="font-mono" style={{ fontSize: '0.6rem', color: '#C9A84C', letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: '2rem' }}>
            Certifications
          </span>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {certifications.map((cert) => (
              <div key={cert.name} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#C9A84C', fontSize: '0.6rem' }}>◆</span>
                <div>
                  <div style={{ fontSize: '0.85rem', color: '#f5f5f0', fontWeight: 400 }}>{cert.name}</div>
                  <div className="font-mono" style={{ fontSize: '0.6rem', color: '#444', letterSpacing: '0.1em' }}>{cert.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #looking-for .looking-for-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
            #looking-for { padding: 5rem 1.5rem !important; }
          }
        `}</style>
      </section>

      {/* Contact section */}
      <section id="contact" style={{ padding: '8rem 5rem', background: '#0A0A0A', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '5rem' }}>
          <span className="font-mono" style={{ fontSize: '0.6rem', color: '#C9A84C', letterSpacing: '0.3em', textTransform: 'uppercase' }}>06 — Contact</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start' }}>
          <div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 0.95, marginBottom: '2rem', color: '#f5f5f0' }}>
              Let's Build<br />
              <span style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #C9A84C, #E8C870)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Something</span><br />
              Great.
            </h2>
            <p style={{ color: '#555', lineHeight: 1.8, fontSize: '0.9rem', fontWeight: 300, marginBottom: '2.5rem' }}>
              Whether you have a project in mind, a role that fits, or just want to connect — I'd love to hear from you.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'Email', value: 'thobekazitha40@gmail.com', href: 'mailto:thobekazitha40@gmail.com' },
                { label: 'LinkedIn', value: 'linkedin.com/in/thobeka-zitha', href: 'https://www.linkedin.com/in/thobeka-zitha' },
                { label: 'GitHub', value: 'github.com/thobekazitha-gif', href: 'https://github.com/thobekazitha-gif' },
                { label: 'Portfolio', value: 'thobekazitha.gamma.site', href: 'https://thobekazitha-engj1u2.gamma.site/' },
              ].map(({ label, value, href }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
                  <span className="font-mono" style={{ fontSize: '0.55rem', color: '#444', letterSpacing: '0.2em', textTransform: 'uppercase', width: '60px', flexShrink: 0 }}>
                    {label}
                  </span>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.875rem', color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
                  >
                    {value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: large image + quote */}
          <div style={{ position: 'relative' }}>
            <div style={{ height: '500px', overflow: 'hidden', position: 'relative', background: '#111' }}>
              <img
                src={contactImg}
                alt="Stylized map of Africa"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', opacity: 0.85 }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)' }} />
              {/* Quote overlay */}
              <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
                <div style={{ width: '2rem', height: '1px', background: '#C9A84C', marginBottom: '0.75rem' }} />
                <p className="font-display" style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#f5f5f0', lineHeight: 1.5 }}>
                  "Technology that improves people's lives across Africa."
                </p>
              </div>
              {/* Corner accents */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', borderTop: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }} />
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #contact .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
            #contact { padding: 5rem 1.5rem !important; }
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="site-footer" style={{
        padding: '2.5rem 5rem',
        background: '#090909',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div>
          <span className="font-display" style={{ fontSize: '1.25rem', fontWeight: 900, fontStyle: 'italic', color: '#C9A84C' }}>TZ</span>
          <span className="font-mono" style={{ fontSize: '0.55rem', color: '#333', letterSpacing: '0.2em', textTransform: 'uppercase', marginLeft: '0.75rem' }}>
            Thobeka Zitha © 2026
          </span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/thobekazitha-gif' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thobeka-zitha' },
            { label: 'Portfolio', href: 'https://thobekazitha-engj1u2.gamma.site/' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
              style={{ fontSize: '0.55rem', color: '#333', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#333')}
            >
              {label}
            </a>
          ))}
        </div>
        <div style={{ width: '30px', height: '1px', background: '#C9A84C' }} />
      </footer>

      <style>{`
        @media (max-width: 600px) {
          .site-footer { padding: 2rem 1.5rem !important; justify-content: center !important; text-align: center; }
        }
      `}</style>
    </>
  )
}