import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import hgPromotionsImg from '../imports/HG_Promotions.webp'
import campariImg from '../imports/Campari_Promotions.webp'
import archerImg from '../imports/Archer_Africa.webp'
import saHomeschoolingImg from '../imports/SA_homeschooling.webp'
import sentimentImg from '../imports/Sentiment_Analyzer.webp'
import predictiveMaintenanceImg from '../imports/AI_Predictive_Maintenance.webp'
import resumeBuilderImg from '../imports/LLG_Resume_Builder.webp'
import educationalMaterialImg from '../imports/Educal_app.webp'
import loanPredictionImg from '../imports/Loan_Prediction.webp'
import sundaySchoolImg from '../imports/image-2.webp'
import gudeMobileImg from '../imports/Gude_Mobile.webp'
import neonDexImg from '../imports/Neon_Dex.webp'
import openBankImg from '../imports/OpenBank.webp'
import taskFlowImg from '../imports/TaskFlow.webp'

type Project = {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

const PROJECTS: Project[] = [
  {
    id: 'openbank',
    title: 'OpenBank',
    category: 'Personal Project — Full-Stack Banking System',
    description:
      'A secure digital banking simulation with JWT authentication, bcrypt password hashing, and protected route architecture. Supports the full account lifecycle — deposits, withdrawals, transfers, and transaction history with real-time balance tracking — backed by a RESTful Express and MongoDB API, with jsPDF-powered PDF statement generation.',
    image: openBankImg,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'jsPDF'],
    liveUrl: 'https://openbank-nine.vercel.app/',
  },
  {
    id: 'hg-promotions',
    title: 'HG Promotions',
    category: 'Production — Staffing Platform',
    description:
      'The earlier iteration of the promotions staffing platform before it was rebranded to Campari Promotions — same core system: role-based dashboards for admins, supervisors, businesses, and promoters.',
    image: hgPromotionsImg,
    tags: ['React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://hg-promotions.vercel.app/',
  },
  {
    id: 'campari-promotions',
    title: 'Campari Promotions',
    category: 'Production — Staffing Platform',
    description:
      'A full-stack promotions staffing platform with distinct dashboards for admins, supervisors, businesses, and promoters — including an Instagram-DM-style chat request system, budget/PO tracking, activation report submissions, and a business credit ledger with CSV/PDF export.',
    image: campariImg,
    tags: ['React', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://campari-promotions.vercel.app/',
    githubUrl: 'https://github.com/Addmore-Development/Campari-Promotions',
  },
  {
    id: 'sa-homeschooling',
    title: 'SA Homeschooling Services',
    category: 'Production — Education Platform',
    description:
      'A platform built to support homeschooling services with a modern, responsive web application.',
    image: saHomeschoolingImg,
    tags: ['React', 'Express', 'PostgreSQL'],
    liveUrl: 'https://sahomeschooling-services-ckh9.onrender.com/',
  },
  {
    id: 'archer-africa',
    title: 'Archer Africa',
    category: 'Production — Static Multi-Page Site',
    description:
      'A multi-page site for an international academic-experiences company based in Johannesburg, including an expandable services section and consolidated navigation.',
    image: archerImg,
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://archer-africa.vercel.app/',
  },
  {
    id: 'sentiment-analyzer',
    title: 'Sentiment Analyzer',
    category: 'AI / ML — Text Emotion Analysis',
    description:
      'A dashboard that analyzes sentiment and emotional tone from user-submitted text using natural language processing.',
    image: sentimentImg,
    tags: ['Python', 'NLP', 'Machine Learning'],
    liveUrl: 'https://c0qai4ygity3.trickle.host/',
  },
  {
    id: 'ai-predictive-maintenance',
    title: 'AI Predictive Maintenance Tool',
    category: 'AI / ML — Equipment Forecasting',
    description:
      'A predictive system designed to forecast equipment failures and optimize maintenance schedules before problems occur.',
    image: predictiveMaintenanceImg,
    tags: ['Python', 'Flask', 'Machine Learning'],
    liveUrl: 'https://crow-flask-51049066.figma.site/',
  },
  {
    id: 'logic-league-resume-builder',
    title: 'Logic League Resume Builder',
    category: 'Bootcamp — Career Tool',
    description:
      'A user-friendly tool for creating professional, ATS-optimized resumes.',
    image: resumeBuilderImg,
    tags: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://logic-league-one.vercel.app/',
  },
  {
    id: 'logic-league-educational-material',
    title: 'Logic League Educational Material',
    category: 'Bootcamp — Learning Platform',
    description:
      'An educational platform providing interactive learning resources and materials.',
    image: educationalMaterialImg,
    tags: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://logic-league.vercel.app/',
  },
  {
    id: 'loan-prediction',
    title: 'Loan Prediction — Bias Audit',
    category: 'AI / ML — Fairness Auditing',
    description:
      'Analyzes and mitigates bias in a loan-prediction ML model using fairness metrics, visualizations, and ethical recommendations.',
    image: loanPredictionImg,
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
    githubUrl: 'https://github.com/thobekazitha-gif/Loan-Prediction-Jupyter',
  },
  {
    id: 'sunday-school-portal',
    title: 'Sunday School Portal',
    category: 'Conversational App',
    description:
      'An interactive chatbot-driven portal built for a Sunday School program.',
    image: sundaySchoolImg,
    tags: ['Chatbot', 'Landbot'],
    liveUrl: 'https://sunday-school-gules.vercel.app/',
  },
  {
    id: 'gude-mobile',
    title: 'Gude Mobile',
    category: 'Mobile App',
    description:
      'A student-focused mobile application designed to improve accessibility and digital engagement.',
    image: gudeMobileImg,
    tags: ['Mobile'],
  },
  {
    id: 'neondex',
    title: 'NeonDex',
    category: 'Personal Project — Full-Stack Pokémon Web App',
    description:
      'A full-stack interactive Pokémon platform with a custom type-effectiveness engine implementing the full 18-type damage matrix for a live battle simulator. Uses a multi-layer caching system — Angular Signals, HTTP cache, and LocalStorage — to optimize PokéAPI performance at scale, built with service-layer separation and reusable component architecture.',
    image: neonDexImg,
    tags: ['Angular 19', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST APIs'],
    liveUrl: 'https://neondex-22.netlify.app/',
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Ops',
    category: 'Personal Project — Operational Command System',
    description:
      'A cyberpunk-themed work request management platform for administrators and field agents to create, assign, track, and resolve operational protocols in real time. Features role-based access control enforced at both the UI and service layers, an auto-escalation engine that raises overdue protocols to critical priority with a system-logged audit trail, live search and multi-select filtering, and a two-layer caching strategy combining an in-memory Zustand store with persistent localStorage.',
    image: taskFlowImg,
    tags: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
    liveUrl: 'https://taskflow-22.netlify.app/',
  },
]

export default function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = PROJECTS.find((p) => p.id === activeId) ?? null

  useEffect(() => {
    if (active) {
      window.lenis?.stop()
      document.body.style.overflow = 'hidden'
    } else {
      window.lenis?.start()
      document.body.style.overflow = ''
    }
    return () => {
      window.lenis?.start()
      document.body.style.overflow = ''
    }
  }, [active])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveId(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="projects" style={{ padding: '8rem 5rem', background: '#090909', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '5rem' }}>
        <span className="font-mono" style={{ fontSize: '0.6rem', color: '#C9A84C', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
          02 — Work
        </span>
        <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(201,168,76,0.4), transparent)' }} />
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {PROJECTS.map((p) => (
          <motion.div
            key={p.id}
            layoutId={`card-${p.id}`}
            onClick={() => setActiveId(p.id)}
            style={{
              position: 'relative',
              height: '420px',
              overflow: 'hidden',
              cursor: 'pointer',
              background: '#111',
            }}
            whileHover="hover"
            initial="rest"
          >
            <motion.img
              src={p.image}
              alt={p.title}
              variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(20%)', background: '#0c0c0c' }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(9,9,9,0.92) 15%, rgba(9,9,9,0.15) 60%, rgba(9,9,9,0.35) 100%)',
              }}
            />
            <div style={{ position: 'absolute', left: '1.5rem', right: '1.5rem', bottom: '1.5rem' }}>
              <span className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase' }}>
                {p.category}
              </span>
              <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#f5f5f0', marginTop: '0.4rem' }}>
                {p.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(9,9,9,0.75)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <motion.div
              layoutId={`card-${active.id}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '980px',
                maxHeight: '85vh',
                background: '#111',
                display: 'grid',
                gridTemplateColumns: '1.1fr 1fr',
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.25)',
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img
                  src={active.image}
                  alt={active.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(20%)', background: '#0c0c0c' }}
                />
              </div>

              <div style={{ padding: '3rem 2.5rem', overflowY: 'auto', position: 'relative', minHeight: 0 }}>
                <button
                  onClick={() => setActiveId(null)}
                  aria-label="Close"
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'transparent',
                    border: '1px solid rgba(245,245,240,0.2)',
                    color: '#f5f5f0',
                    width: '2.2rem',
                    height: '2.2rem',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  ✕
                </button>

                <span className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase' }}>
                  {active.category}
                </span>
                <h2 className="font-display" style={{ fontSize: '2rem', fontWeight: 800, color: '#f5f5f0', margin: '0.6rem 0 1.2rem' }}>
                  {active.title}
                </h2>
                <p style={{ color: '#999', lineHeight: 1.8, fontSize: '0.95rem', fontWeight: 300, marginBottom: '1.8rem' }}>
                  {active.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono"
                      style={{
                        fontSize: '0.6rem',
                        letterSpacing: '0.1em',
                        color: '#C9A84C',
                        border: '1px solid rgba(201,168,76,0.3)',
                        padding: '0.35rem 0.7rem',
                        textTransform: 'uppercase',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {active.liveUrl && (
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.75rem 1.75rem',
                        background: '#C9A84C',
                        color: '#090909',
                        fontSize: '0.7rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        textDecoration: 'none',
                      }}
                    >
                      View Live
                    </a>
                  )}
                  {active.githubUrl && (
                    <a
                      href={active.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.75rem 1.75rem',
                        background: 'transparent',
                        color: '#f5f5f0',
                        border: '1px solid rgba(245,245,240,0.2)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                      }}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          #projects { padding: 5rem 1.5rem !important; }
          #projects > div[style*='position: fixed'] > div { grid-template-columns: 1fr !important; max-height: 90vh !important; }
        }
      `}</style>
    </section>
  )
}