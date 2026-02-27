import { useState, useEffect } from 'react'
import logoImg from '../assets/logo.jpg'

const navLinks = [
  { href: '#home',       label: 'Home'       },
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#home')

  // Active link on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('.section[id]')

    function onScroll() {
      const scrollY = window.scrollY

      if (scrollY < 100) {
        setActiveLink('#home')
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

  function handleNavClick(href) {
    setActiveLink(href)
    const target = document.querySelector(href)
    if (target) {
      const nav = document.querySelector('nav')
      const offset = nav ? nav.offsetHeight : 70
      const top = target.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
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
            <li key={link.href} className="nav-list">
              <a
                href={link.href}
                className={`nav-link${activeLink === link.href ? ' active-link' : ''}`}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
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
            key={link.href}
            href={link.href}
            className={`bottom-nav-link${activeLink === link.href ? ' active' : ''}`}
            onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
