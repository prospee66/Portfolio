const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Endi Intereactive Limited',
    period: '2025',
    type: 'Industrial Attachment',
    current: false,
    description:
      'Completed industrial attachment building and maintaining web-based solutions. Collaborated with the development team on real-world client projects, improved existing codebases, and gained hands-on experience with professional software development workflows.',
    tech: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS', 'Git', 'React'],
  },
  {
    title: 'UI/UX Designer & Developer',
    company: 'Freelance',
    period: '2023 – Present',
    type: 'Freelance',
    current: true,
    description:
      'Built and delivered multiple client projects including a Shop Tracker System, Data Bundle Sales Site, Street Code shirt store, a full E-Commerce Platform, and a Tilapia Fish Ordering Site. Handled everything from UI design to backend logic and database setup.',
    tech: ['Figma', 'React', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'BSc. Computer Science and Engineering',
    company: 'University of Mines and Technology',
    period: '2023 – Present',
    type: 'Education',
    current: true,
    description:
      'Pursuing a degree in Computer Science and Engineering with a focus on software engineering, database management, and web development. Completed academic projects including a Student Management System and a Currency Recognition ML model.',
    tech: ['Python', 'Java', 'SQL', 'Web Dev'],
  },
]

export default function Experience() {
  return (
    <section className="section wrapper" id="experience">
      <div className="top-header">
        <h1>Experience</h1>
        <span>My professional journey and education</span>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <div className="timeline-title">{exp.title}</div>
                  <div className="timeline-company">{exp.company}</div>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {exp.current && (
                    <span className="timeline-badge current">
                      <i className="uil uil-circle"></i> Current
                    </span>
                  )}
                  <span className="timeline-badge">{exp.period}</span>
                </div>
              </div>

              <p className="timeline-desc">{exp.description}</p>

              <div className="timeline-tech">
                {exp.tech.map(t => (
                  <span className="tech-chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
