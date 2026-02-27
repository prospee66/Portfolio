import { useEffect, useRef, useState } from 'react'

const categories = {
  Frontend: [
    { name: 'HTML5',       icon: 'uil uil-html5',         pct: 95 },
    { name: 'CSS3',        icon: 'uil uil-css3-simple',   pct: 90 },
    { name: 'JavaScript',  icon: 'uil uil-java-script',   pct: 80 },
    { name: 'React',       icon: 'uil uil-react',         pct: 82 },
  ],
  Backend: [
    { name: 'Python',      icon: 'uil uil-arrow',         pct: 75 },
    { name: 'PHP',         icon: 'uil uil-server',        pct: 45 },
    { name: 'MySQL',       icon: 'uil uil-database',      pct: 70 },
    { name: 'REST APIs',   icon: 'uil uil-link',          pct: 70 },
  ],
  Tools: null, // handled separately
}

const tools = [
  { name: 'Git & GitHub', icon: 'uil uil-github-alt'   },
  { name: 'Figma',        icon: 'uil uil-vector-square' },
  { name: 'VS Code',      icon: 'uil uil-code'          },
  { name: 'Postman',      icon: 'uil uil-layer-group'   },
  { name: 'TensorFlow',   icon: 'uil uil-robot'         },
  { name: 'Linux',        icon: 'uil uil-linux'         },
]

const tabs = ['Frontend', 'Backend', 'Tools']

export default function Skills() {
  const [activeTab, setActiveTab] = useState('Frontend')
  const sectionRef = useRef(null)
  const animated   = useRef(new Set())

  useEffect(() => {
    const fills = sectionRef.current?.querySelectorAll('.skill-fill') || []
    fills.forEach(fill => {
      const key = fill.dataset.key
      if (animated.current.has(key)) {
        fill.classList.add('animate')
      }
    })
  }, [activeTab])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const fills = sectionRef.current?.querySelectorAll('.skill-fill') || []
          fills.forEach(fill => {
            const key = fill.dataset.key
            animated.current.add(key)
            fill.style.setProperty('--target-width', fill.dataset.pct + '%')
            fill.classList.add('animate')
          })
        }
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section wrapper" id="skills" ref={sectionRef}>
      <div className="top-header">
        <h1>Skills</h1>
        <span>My technical proficiency across different areas</span>
      </div>

      <div className="skills-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab-btn${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab !== 'Tools' ? (
        <div className="skills-grid">
          {categories[activeTab].map(skill => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-card-header">
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <span>{skill.name}</span>
              </div>
              <div className="skill-bar">
                <div
                  className={`skill-fill${animated.current.has(skill.name) ? ' animate' : ''}`}
                  data-pct={skill.pct}
                  data-key={skill.name}
                  style={{ '--target-width': `${skill.pct}%` }}
                ></div>
              </div>
              <div className="skill-pct">{skill.pct}%</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="tools-grid">
          {tools.map(tool => (
            <div className="tool-badge" key={tool.name}>
              <i className={tool.icon}></i>
              {tool.name}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
