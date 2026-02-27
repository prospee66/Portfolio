const projects = [
  {
    title: 'Shop Tracker System',
    description:
      'A business management system for tracking sales, inventory, and daily revenue. Helps shop owners monitor stock levels, record transactions, and generate reports.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    icon: 'uil uil-store',
    gradClass: 'grad-6',
    github: 'https://github.com',
    live: 'https://shop-tracker-xi.vercel.app/',
  },
  {
    title: 'Data Bundle Sales Site',
    description:
      'An online platform for purchasing mobile data bundles. Users can select their network, choose a bundle plan, and complete payment — all from a clean, fast interface.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    icon: 'uil uil-wifi',
    gradClass: 'grad-5',
    github: 'https://github.com',
    live: 'https://optimistic-empire.vercel.app/',
  },
  {
    title: 'Street Code — Shirt Store',
    description:
      'An online clothing store for the Street Code brand. Customers can browse shirt collections, pick sizes and colors, and place orders directly through the site.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    icon: 'uil uil-tag-alt',
    gradClass: 'grad-4',
    github: 'https://github.com',
    live: 'https://street-code-seven.vercel.app/',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'A fully functional e-commerce site with product listings, a shopping cart, user authentication, order management, and an admin dashboard for managing products and orders.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    icon: 'uil uil-shopping-cart',
    gradClass: 'grad-7',
    github: 'https://github.com',
    live: 'https://e-commerce-rho-weld-98.vercel.app/',
  },
  {
    title: 'Tilapia Fish Ordering Site',
    description:
      'An online ordering system for a tilapia fish business. Customers can browse menu options, customize their order, and book for pickup or delivery — making food ordering seamless.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    icon: 'uil uil-restaurant',
    gradClass: 'grad-8',
    github: 'https://github.com',
    live: 'https://tilapai-joint-1x65.vercel.app/',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This very portfolio built with React and Vite. Features dark mode, smooth scroll animations, typed text effects, animated skill bars, and a responsive layout.',
    tech: ['React', 'Vite', 'CSS3', 'Typed.js'],
    icon: 'uil uil-suitcase',
    gradClass: 'grad-1',
    github: 'https://github.com',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section className="section wrapper" id="projects">
      <div className="top-header">
        <span className="section-label">My Work</span>
        <h1>Projects</h1>
        <span>Things I've built that I'm proud of</span>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map(p => (
          <div className="project-card" key={p.title}>
            {p.live && p.live !== '#' && (
              <a
                className="card-overlay-link"
                href={p.live}
                target="_blank"
                rel="noreferrer"
                aria-label={p.title}
              />
            )}

            {/* Icon + Live badge */}
            <div className="project-card-header">
              <div className={`project-icon-box ${p.gradClass}`}>
                <i className={p.icon}></i>
              </div>
              {p.live && p.live !== '#' && (
                <span className="project-live-badge">
                  <i className="uil uil-circle"></i> Live
                </span>
              )}
            </div>

            {/* Title + description */}
            <div className="project-card-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>

            {/* Tech chips */}
            <div className="project-card-tags">
              {p.tech.slice(0, 3).map(t => (
                <span className="tech-tag" key={t}>{t}</span>
              ))}
              {p.tech.length > 3 && (
                <span className="tech-tag">+{p.tech.length - 3}</span>
              )}
            </div>

            {/* Action buttons */}
            <div className="project-card-actions">
              <a href={p.github} target="_blank" rel="noreferrer" className="project-action-btn">
                <i className="uil uil-github-alt"></i> GitHub
              </a>
              {p.live && p.live !== '#' && (
                <a href={p.live} target="_blank" rel="noreferrer" className="project-action-btn live">
                  <i className="uil uil-external-link-alt"></i> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
