import { useState } from 'react'

type Project = {
  title: string
  tagline: string
  description: string
  tech: string[]
  live?: string
  github?: string
  inProduction?: boolean
  category: string
  image: string
}

const projects: Project[] = [
  {
    title: 'HG Promotions Platform',
    tagline: 'Connecting businesses with promoters across South Africa',
    description: 'A full-stack platform connecting businesses with professional promoters. Features include authentication, geolocation-based matching, API integration, and a secure backend architecture built for real client use.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Geolocation API', 'JWT'],
    live: 'https://hg-promotions.vercel.app/',
    inProduction: true,
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Fak\'ugesi 2026 Festival Website',
    tagline: 'Africa\'s leading digital innovation festival',
    description: 'Developed features for one of Africa\'s premier digital innovation festivals. Built responsive sections, interactive event listings, and dynamic content for the Fak\'ugesi African Digital Innovation Festival 2026.',
    tech: ['React', 'JavaScript', 'CSS3', 'Responsive Design'],
    live: 'https://fakugesi-2026.vercel.app/',
    inProduction: true,
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'SA Homeschooling Services',
    tagline: 'Connecting families with verified homeschooling providers',
    description: 'A full-stack directory platform connecting South African homeschooling families with verified tutors, therapists, and curriculum providers. Features multi-step registration, admin dashboard, file uploads, JWT auth, and role-based access.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Multer'],
    live: 'https://sunday-school-gules.vercel.app/',
    inProduction: true,
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Campari Promotions',
    tagline: 'Brand promotions management platform',
    description: 'A promotions and brand engagement platform developed for real client use. Manages campaign workflows, promoter assignments, and reporting dashboards.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'REST API'],
    live: 'https://campari-promotions.vercel.app/',
    inProduction: true,
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Amani Marketplace',
    tagline: 'Social impact marketplace for GBV survivor artisans',
    description: 'An Angular-based marketplace connecting buyers with handcrafted goods made by survivors at care centres across South Africa. 70% of sales go directly to the makers. Features admin dashboard, buyer portal, cart system, and role-based auth.',
    tech: ['Angular', 'Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'LocalStorage'],
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'NeonDex Platform',
    tagline: 'Modern digital experience platform',
    description: 'A production web platform with modern UI patterns and scalable backend architecture, deployed and serving live users.',
    tech: ['React', 'Node.js', 'REST APIs'],
    live: 'https://neondex-22.netlify.app/',
    inProduction: true,
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'OpenBank',
    tagline: 'FinTech banking interface',
    description: 'A modern banking platform interface featuring account management, transaction history, and financial dashboard components built with a focus on security and UX.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
    live: 'https://openbank-nine.vercel.app/',
    category: 'FinTech',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Archer Africa Website',
    tagline: 'International academic experiences across Africa',
    description: 'Multi-page static website for Archer Africa, marketing immersive academic programs across Africa. Features collapsible service cards, numbered card layouts, and responsive multi-section design.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'SVG'],
    live: 'https://archer-africa.vercel.app/',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Phunya Tsela Career Expo',
    tagline: 'APS registration platform for career expo attendees',
    description: 'An event registration system for the Phunya Tsela Career Expo, enabling attendees to register their APS scores and connect with educational opportunities.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Loan Prediction System',
    tagline: 'AI-powered loan approval prediction',
    description: 'Machine learning application using classification algorithms to predict loan approval outcomes based on applicant data. Built with Python and Scikit-learn.',
    tech: ['Python', 'Scikit-learn', 'ML', 'Pandas', 'Data Analysis'],
    category: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Sentiment Analyzer',
    tagline: 'NLP sentiment analysis application',
    description: 'Natural Language Processing application that analyzes sentiment from user-submitted text. Uses NLP techniques to classify positive, negative, and neutral sentiment.',
    tech: ['Python', 'NLP', 'NLTK', 'React', 'Flask'],
    category: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'AI Predictive Maintenance Tool',
    tagline: 'ML solution for equipment failure prevention',
    description: 'Machine learning solution that analyzes equipment sensor data to identify potential failures before they occur, reducing downtime and maintenance costs.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Time Series'],
    category: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Logic League Resume Builder',
    tagline: 'Interactive professional resume builder',
    description: 'Interactive platform that helps users build, customize, and export professional resumes with real-time preview and template switching.',
    tech: ['React', 'JavaScript', 'CSS3', 'PDF Export'],
    category: 'Tools',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'GradJob',
    tagline: 'Job discovery for graduates',
    description: 'A job discovery platform designed to connect graduates with entry-level opportunities and internships across South Africa\'s tech ecosystem.',
    tech: ['React', 'Node.js', 'REST API', 'PostgreSQL'],
    category: 'Full-Stack',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Conversational Chatbot',
    tagline: 'NLP-powered conversational AI',
    description: 'Conversational AI application using Natural Language Processing to understand and respond to user queries in a context-aware manner.',
    tech: ['Python', 'NLP', 'React', 'WebSocket'],
    category: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop&auto=format',
  },
  {
    title: 'Gude Mobile',
    tagline: 'Student-focused mobile accessibility app',
    description: 'Student-focused mobile application designed to improve accessibility and digital engagement for university students, connecting them with resources and campus services.',
    tech: ['React Native', 'Node.js', 'MongoDB'],
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format',
  },
]

const categories = ['All', 'Full-Stack', 'Frontend', 'AI / ML', 'FinTech', 'Mobile', 'Tools']

export default function Projects() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)
  const inProduction = projects.filter((p) => p.inProduction)

  return (
    <section id="projects" style={{ padding: '8rem 5rem', background: '#0D0D0D' }}>
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '5rem' }}>
        <span className="font-mono" style={{ fontSize: '0.6rem', color: '#C9A84C', letterSpacing: '0.3em', textTransform: 'uppercase' }}>04 — Projects</span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
      </div>

      {/* Projects in Production callout */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))',
        border: '1px solid rgba(201,168,76,0.25)',
        padding: '2.5rem 3rem',
        marginBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: '#C9A84C' }} />
        <div style={{ marginBottom: '1rem' }}>
          <span className="font-mono" style={{ fontSize: '0.6rem', color: '#C9A84C', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            ◆ Projects in Production
          </span>
        </div>
        <h3 className="font-display" style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f5f5f0', marginBottom: '0.75rem' }}>
          Live. Real clients. Real users.
        </h3>
        <p style={{ color: '#666', fontSize: '0.85rem', maxWidth: '600px', marginBottom: '1.5rem', fontWeight: 300 }}>
          Beyond personal projects and coursework — these are shipped products serving real clients and users across South Africa.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {inProduction.map((p) => (
            <a
              key={p.title}
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.4rem 1rem',
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.3)',
                color: '#C9A84C',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.color = '#090909' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.color = '#C9A84C' }}
            >
              {p.title}
            </a>
          ))}
        </div>
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '0', marginBottom: '3rem', flexWrap: 'wrap', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              padding: '0.75rem 1.5rem',
              background: 'none',
              border: 'none',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              fontFamily: 'Space Mono, monospace',
              color: active === cat ? '#C9A84C' : '#444',
              borderBottom: active === cat ? '2px solid #C9A84C' : '2px solid transparent',
              transition: 'all 0.2s',
              marginBottom: '-1px',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(201,168,76,0.08)' }}>
        {filtered.map((project) => (
          <div
            key={project.title}
            style={{
              background: hovered === project.title ? '#141414' : '#0D0D0D',
              transition: 'background 0.3s',
              cursor: 'default',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={() => setHovered(project.title)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image */}
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative', background: '#111' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(60%)',
                  opacity: 0.6,
                  transition: 'all 0.4s',
                  transform: hovered === project.title ? 'scale(1.05)' : 'scale(1)',
                }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 60%)' }} />

              {/* Production badge */}
              {project.inProduction && (
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  padding: '0.2rem 0.6rem',
                  background: '#C9A84C',
                  color: '#090909',
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontFamily: 'Space Mono, monospace',
                  fontWeight: 700,
                }}>
                  Live
                </div>
              )}

              {/* Category */}
              <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem' }}>
                <span className="font-mono" style={{ fontSize: '0.55rem', color: 'rgba(201,168,76,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: '1.5rem' }}>
              <h4 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f5f5f0', marginBottom: '0.4rem', lineHeight: 1.2 }}>
                {project.title}
              </h4>
              <p style={{ fontSize: '0.75rem', color: '#C9A84C', marginBottom: '0.75rem', fontStyle: 'italic', fontFamily: 'Playfair Display, serif' }}>
                {project.tagline}
              </p>
              <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.65, fontWeight: 300, marginBottom: '1rem' }}>
                {project.description}
              </p>

              {/* Tech stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem' }}>
                {project.tech.map((t) => (
                  <span key={t} className="font-mono" style={{ fontSize: '0.55rem', color: '#444', padding: '0.2rem 0.5rem', border: '1px solid #222', letterSpacing: '0.05em' }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.65rem', color: '#C9A84C', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Space Mono, monospace', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#E8C870')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#C9A84C')}
                  >
                    ↗ View Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1000px) {
          #projects > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          #projects > div:last-child { grid-template-columns: 1fr !important; }
          #projects { padding: 5rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
