import { useState, useEffect, useRef } from 'react'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')
  const menuRef = useRef(null)

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

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function handleNavClick(href) {
    setMenuOpen(false)
    setActiveLink(href)

    // Smooth scroll with navbar offset
    const target = document.querySelector(href)
    if (target) {
      const nav = document.querySelector('nav')
      const offset = nav ? nav.offsetHeight : 90
      const top = target.offsetTop - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <nav>
      <div className="nav-logo">
        <img src={logoImg} alt="Logo" className="logo" />
        <p className="nav-name">Prosper</p>
      </div>

      <div
        ref={menuRef}
        className={`nav-menu${menuOpen ? ' responsive' : ''}`}
        id="myNavmenu"
      >
        {/* Close button (mobile) */}
        {menuOpen && (
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            <i className="uil uil-times"></i>
          </div>
        )}

        <ul className="nav-menu-list">
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
      </div>

      <div className="nav-menu-btn" onClick={() => setMenuOpen(true)}>
        <i className="uil uil-bars"></i>
      </div>
    </nav>
  )
}
