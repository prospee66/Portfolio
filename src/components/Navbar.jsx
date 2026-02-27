import { useState, useEffect } from 'react'
import logoImg from '../assets/logo.jpg'
import cvPdf   from '../assets/MY PDF.pdf'

const navLinks = [
  { href: '#about',    label: 'About'    },
  { href: cvPdf,       label: 'Resume',  external: true },
  { href: '#projects', label: 'Projects' },
  { href: '#skills',   label: 'Skills'   },
]

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#about')

  // Active link on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('.section[id]')

    function onScroll() {
      const scrollY = window.scrollY

      if (scrollY < 100) {
        setActiveLink('#about')
        return
      }

      sections.forEach(section => {
        const top    = section.offsetTop - 100
        const height = section.offsetHeight
        if (scrollY > top && scrollY <= top + height) {
          setActiveLink(`#${section.id}`)
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(e, link) {
    if (link.external) return // let browser handle PDF link
    e.preventDefault()
    setActiveLink(link.href)
    const target = document.querySelector(link.href)
    if (target) {
      const nav = document.querySelector('nav')
      const offset = nav ? nav.offsetHeight : 70
      window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Top navbar */}
      <nav>
        <div className="nav-logo">
          <img src={logoImg} alt="Logo" className="logo" />
        </div>

        {/* Desktop nav links */}
        <ul className="nav-menu-list desktop-nav">
          {navLinks.map(link => (
            <li key={link.label} className="nav-list">
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                className={`nav-link${activeLink === link.href ? ' active-link' : ''}`}
                onClick={e => handleNavClick(e, link)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile bottom nav */}
      <div className="bottom-nav">
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            className={`bottom-nav-link${activeLink === link.href ? ' active' : ''}`}
            onClick={e => handleNavClick(e, link)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
