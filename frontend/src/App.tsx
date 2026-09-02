import SmoothScroll from './SmoothScroll'
import Reveal from './Reveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <SmoothScroll>
      <div style={{ background: '#090909', minHeight: '100vh' }}>
        <Nav />
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Contact /></Reveal>
      </div>
    </SmoothScroll>
  )
}