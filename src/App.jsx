import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('darkMode') === 'true'
  )
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackTop, setShowBackTop]       = useState(false)

  // Apply dark mode class to body
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode)
    const meta = document.getElementById('theme-color-meta')
    if (meta) meta.setAttribute('content', darkMode ? '#1f2937' : '#6d28d9')
  }, [darkMode])

  // Scroll progress + back-to-top
  useEffect(() => {
    function onScroll() {
      const total    = document.body.scrollHeight - window.innerHeight
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0
      setScrollProgress(progress)
      setShowBackTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="container">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>

      <Footer />

      {/* Back to top button */}
      <button
        className={`back-to-top${showBackTop ? ' visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="uil uil-arrow-up"></i>
      </button>
    </>
  )
}

export default App
