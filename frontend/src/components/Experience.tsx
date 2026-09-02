const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    sub: 'Software Engineering — In Progress',
    institution: '',
    year: '2024–Present',
  },
  {
    degree: 'Higher Certificate in Information Technology',
    sub: 'Completed 2024',
    institution: '',
    year: '2024',
  },
  {
    degree: 'CAPACITI Tech Career Accelerator',
    sub: 'Professional Development',
    institution: '',
    year: '2024',
  },
  {
    degree: 'NEMISA Cybersecurity Programme',
    sub: 'Cybersecurity',
    institution: '',
    year: '2024',
  },
]

const certifications = [
  'Introduction to Cloud Computing',
  'HTML, CSS & JavaScript Fundamentals',
  'React Basics',
  'Node.js & Express',
  'Python for Data Science, AI & Development',
  'DevOps Fundamentals',
  'Kubernetes Essentials',
  'Application Security & Monitoring',
]

const highlights = [
  'Built and maintained React applications for live client products',
  'Developed Node.js and Express REST APIs',
  'Worked with PostgreSQL databases at scale',
  'Integrated third-party APIs and payment systems',
  'Implemented geolocation functionality across platforms',
  'Assisted with authentication and secure JWT/JWS integration',
  'Improved user experience across multiple client-facing platforms',
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '8rem 5rem', background: '#0D0D0D', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '5rem' }}>
        <span className="font-mono" style={{ fontSize: '0.6rem', color: '#C9A84C', letterSpacing: '0.3em', textTransform: 'uppercase' }}>02 — Experience & Education</span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
      </div>

      <div className="experience-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
        {/* Work experience */}
        <div>
          <h3 className="font-display" style={{ fontSize: '2rem', fontWeight: 700, color: '#f5f5f0', marginBottom: '0.5rem' }}>
            Full-Stack Developer
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: '#C9A84C',
              textTransform: 'uppercase',
              fontFamily: 'Space Mono, monospace',
            }}>
              AddMore Digital
            </span>
            <span style={{ fontSize: '0.6rem', color: '#444', fontFamily: 'Space Mono, monospace' }}>• Current</span>
          </div>

          <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem', fontWeight: 300 }}>
            Worked on real client projects across frontend and backend development, collaborating with teams to deliver scalable digital products for clients across South Africa.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {highlights.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#C9A84C', marginTop: '0.15rem', flexShrink: 0, fontSize: '0.7rem' }}>◆</span>
                <span style={{ color: '#777', fontSize: '0.875rem', lineHeight: 1.6, fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="font-display" style={{ fontSize: '2rem', fontWeight: 700, color: '#f5f5f0', marginBottom: '2.5rem', fontStyle: 'italic' }}>
            Education
          </h3>

          <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: 0, top: '6px', bottom: '6px', width: '1px', background: 'linear-gradient(180deg, #C9A84C, rgba(201,168,76,0.1))' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {education.map((ed, i) => (
                <div key={i} style={{ position: 'relative' }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    left: '-1.7rem',
                    top: '4px',
                    width: '8px',
                    height: '8px',
                    background: i === 0 ? '#C9A84C' : '#333',
                    border: '1px solid #C9A84C',
                    borderRadius: '50%',
                  }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                    <span className="font-mono" style={{ fontSize: '0.55rem', color: '#C9A84C', letterSpacing: '0.15em' }}>{ed.year}</span>
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#f5f5f0', fontWeight: 500, marginBottom: '0.2rem' }}>{ed.degree}</div>
                  <div style={{ fontSize: '0.8rem', color: '#555', fontWeight: 300 }}>{ed.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div style={{ marginTop: '5rem' }}>
        <h3 className="font-mono" style={{ fontSize: '0.65rem', color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Certifications — Coursera
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {certifications.map((cert) => (
            <span
              key={cert}
              style={{
                padding: '0.4rem 0.9rem',
                border: '1px solid rgba(201,168,76,0.2)',
                fontSize: '0.75rem',
                color: '#888',
                fontWeight: 300,
                transition: 'all 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#C9A84C'
                e.currentTarget.style.color = '#C9A84C'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
                e.currentTarget.style.color = '#888'
              }}
            >
              {cert}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience .experience-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          #experience { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}