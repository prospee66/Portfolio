import { useEffect, useState } from 'react'

const footerLinks = [
  { href: '#about',    label: 'About' },
  { href: '#skills',   label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact',  label: 'Contact' },
]

const socialLinks = [
  { href: 'https://github.com',    icon: 'uil uil-github-alt',   label: 'GitHub'    },
  { href: 'https://linkedin.com',  icon: 'uil uil-linkedin-alt', label: 'LinkedIn'  },
  { href: 'https://twitter.com',   icon: 'uil uil-twitter-alt',  label: 'Twitter'   },
  { href: 'https://instagram.com', icon: 'uil uil-instagram',    label: 'Instagram' },
]

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  function handleLinkClick(e, href) {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      const nav = document.querySelector('nav')
      const offset = nav ? nav.offsetHeight : 90
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' })
    }
  }

  return (
    <footer>
      <div className="middle-footer">
        <ul className="footer-menu">
          {footerLinks.map(link => (
            <li key={link.href} className="footer_menu_list">
              <a
                href={link.href}
                onClick={e => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-social-icons">
        {socialLinks.map(s => (
          <div key={s.label} className="icon">
            <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
              <i className={s.icon}></i>
            </a>
          </div>
        ))}
      </div>

      <div className="bottom-footer">
        <p>
          Copyright &copy; {year}{' '}
          <a href="#home" onClick={e => handleLinkClick(e, '#home')}>
            Prosper Oppong
          </a>{' '}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
