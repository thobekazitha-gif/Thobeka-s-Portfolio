import aboutImg from '../imports/About_img.webp'

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 5rem', background: '#090909', position: 'relative' }}>
      {/* Section label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '5rem' }}>
        <span className="font-mono" style={{ fontSize: '0.6rem', color: '#C9A84C', letterSpacing: '0.3em', textTransform: 'uppercase' }}>01 — About</span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
      </div>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        {/* Left: large text statement */}
        <div>
          <h2 className="font-display" style={{
            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            color: '#f5f5f0',
            marginBottom: '2rem',
          }}>
            Building for<br />
            <span style={{
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #C9A84C, #E8C870)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Africa & Beyond</span>
          </h2>

          <div style={{ width: '60px', height: '1px', background: '#C9A84C', marginBottom: '2rem' }} />

          <p style={{ color: '#888', lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300, marginBottom: '1.5rem' }}>
            I'm a Full-Stack Developer at AddMore Digital with experience building production-ready web applications for real clients. I enjoy developing responsive user interfaces, designing backend systems, integrating APIs, and turning complex ideas into intuitive digital experiences.
          </p>
          <p style={{ color: '#888', lineHeight: 1.85, fontSize: '0.95rem', fontWeight: 300 }}>
            Alongside my professional work, I'm pursuing a Bachelor of Science in Information Technology (Software Engineering) while continuously expanding my skills in AI, cloud technologies, and modern software engineering practices. My goal is to build impactful software that improves businesses and communities across Africa.
          </p>
        </div>

        {/* Right: stats + image */}
        <div style={{ position: 'relative' }}>
          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(201,168,76,0.15)', marginBottom: '2rem' }}>
            {[
              { num: '10+', label: 'Projects Shipped' },
              { num: '4+', label: 'In Production' },
              { num: '3+', label: 'Years Building' },
              { num: '∞', label: 'Problems Solved' },
            ].map(({ num, label }) => (
              <div key={label} style={{ background: '#090909', padding: '2rem', textAlign: 'center' }}>
                <div className="font-display" style={{ fontSize: '2.5rem', fontWeight: 900, color: '#C9A84C', lineHeight: 1 }}>{num}</div>
                <div className="font-mono" style={{ fontSize: '0.6rem', color: '#555', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '0.5rem' }}>{label}</div>
              </div>
            ))}
          </div>

          {/* Portrait inset */}
          <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
            <img
              src={aboutImg}
              alt="Developer portrait"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)', opacity: 0.8 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(9,9,9,0.7), transparent)' }} />
            {/* Gold corner accent */}
            <div style={{ position: 'absolute', top: 0, right: 0, width: '40px', height: '40px', borderTop: '2px solid #C9A84C', borderRight: '2px solid #C9A84C' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '40px', height: '40px', borderBottom: '2px solid #C9A84C', borderLeft: '2px solid #C9A84C' }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          #about { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}