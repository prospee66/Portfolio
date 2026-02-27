import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import heroImg from '../assets/prospeee.jpg'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Designer', 'Developer', 'Programmer', 'Web Creator'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      startDelay: 500,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section className="section featured-box" id="home">
      <div className="featured-text">
        <div className="hello">
          <h3 className="hello-text">Hello, I'm</h3>
        </div>
        <h1 className="featured-name">Prosper Oppong</h1>
        <h3 className="typedText-wrapper">
          <span ref={typedRef} className="typedText"></span>
        </h3>
        <p className="text-info">
          A passionate web developer with 3+ years of experience specializing in
          responsive web design and development. I craft clean, modern, and
          user-friendly digital experiences.
        </p>

        <div className="social_icons">
          <div className="icon_circle"></div>
          <div className="icon">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="uil uil-linkedin-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="uil uil-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="featured-image">
        <div className="image">
          <img src={heroImg} alt="Prosper Oppong" />
        </div>
      </div>
    </section>
  )
}
