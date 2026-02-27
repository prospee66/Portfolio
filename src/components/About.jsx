import profileImg from '../assets/profile.jpg'

export default function About() {
  return (
    <section className="section wrapper" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>

      <div className="about-grid">

        {/* Left: profile card */}
        <div className="about-image-card">
          <img src={profileImg} alt="Prosper Oppong" className="profile-img" />
          <h3>Prosper Oppong</h3>
          <p className="role">Web Developer &amp; UI/UX Designer</p>

          <div className="availability">
            <span className="availability-dot"></span>
            Available for Work
          </div>

          <div className="about-quick-info">
            <div className="info-row">
              <span className="label">Location</span>
              <span className="value">Accra, Ghana</span>
            </div>
            <div className="info-row">
              <span className="label">Experience</span>
              <span className="value">2+ Years</span>
            </div>
            <div className="info-row">
              <span className="label">Freelance</span>
              <span className="value">Open</span>
            </div>
            <div className="info-row">
              <span className="label">Email</span>
              <span className="value" style={{ fontSize: '0.8rem' }}>oppongprosper71@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right: content card */}
        <div className="about-content-card">
          <h2>Who Am I?</h2>
          <p>
            I'm a passionate and results-driven web developer and UI/UX designer with 3+ years
            of hands-on experience building responsive, user-friendly web applications. I
            completed an industrial attachment at <strong>Endi Interactive Limited</strong>, where
            I worked on real client projects in a professional environment.
          </p>
          <p>
            I specialize in turning ideas into polished digital products from designing
            clean interfaces in Figma to writing solid backend logic in Python and PHP.
            I've built systems ranging from student management platforms to machine learning
            currency recognition tools.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <i className="uil uil-desktop"></i>
              <div className="h-text">
                <strong>Web Development</strong>
                <span>Full-stack web apps</span>
              </div>
            </div>
            <div className="highlight-item">
              <i className="uil uil-vector-square"></i>
              <div className="h-text">
                <strong>UI/UX Design</strong>
                <span>Clean, user-centered UI</span>
              </div>
            </div>
            <div className="highlight-item">
              <i className="uil uil-robot"></i>
              <div className="h-text">
                <strong>Machine Learning</strong>
                <span>Python &amp; TensorFlow</span>
              </div>
            </div>
            <div className="highlight-item">
              <i className="uil uil-database"></i>
              <div className="h-text">
                <strong>Database Design</strong>
                <span>MySQL &amp; PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="about-education">
            <h3><i className="uil uil-graduation-cap"></i> Education</h3>

            <div className="edu-item">
              <i className="uil uil-university"></i>
              <div>
                <strong>BSc. Computer Science and Engineering</strong>
                <span>University — 2023 to Present</span>
              </div>
            </div>

            <div className="edu-item">
              <i className="uil uil-briefcase-alt"></i>
              <div>
                <strong>Industrial Attachment – Endi Interactive Limited</strong>
                <span>Software Developer Intern — 2025</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn">
              Hire Me <i className="uil uil-phone"></i>
            </a>
            <a href="#projects" className="btn hire-btn">
              View Projects <i className="uil uil-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
