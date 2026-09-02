import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    level: 90,
    skills: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Angular'],
  },
  {
    category: 'Backend',
    level: 80,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT / JWS Auth'],
  },
  {
    category: 'Databases',
    level: 75,
    skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM'],
  },
  {
    category: 'Languages',
    level: 85,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
  },
  {
    category: 'AI & ML',
    level: 70,
    skills: ['Machine Learning', 'NLP', 'Sentiment Analysis', 'Scikit-learn'],
  },
  {
    category: 'Tools & DevOps',
    level: 85,
    skills: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Figma', 'Postman', 'Render'],
  },
]

function ProficiencyBar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} style={{ marginBottom: '1.25rem' }}>
      <div style={{ height: '3px', background: 'rgba(201,168,76,0.12)', width: '100%' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #8B6E2E, #C9A84C, #E8C870)' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '8rem 5rem', background: '#090909', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '5rem' }}>
        <span className="font-mono" style={{ fontSize: '0.6rem', color: '#C9A84C', letterSpacing: '0.3em', textTransform: 'uppercase' }}>03 — Technical Skills</span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(201,168,76,0.1)' }}>
        {skillGroups.map((group, i) => (
          <div
            key={group.category}
            style={{
              background: '#090909',
              padding: '2.5rem',
              position: 'relative',
              transition: 'background 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0F0F0F')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#090909')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span className="font-mono" style={{ fontSize: '0.55rem', color: '#C9A84C', letterSpacing: '0.15em' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase', fontWeight: 500 }}>
                {group.category}
              </span>
            </div>

            <ProficiencyBar level={group.level} />

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    padding: '0.3rem 0.75rem',
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
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #skills > div:last-child { grid-template-columns: 1fr !important; }
          #skills { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}