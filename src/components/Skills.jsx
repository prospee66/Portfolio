const techStack = [
  { name: 'React',       icon: 'devicon-react-original colored'    },
  { name: 'Node.js',     icon: 'devicon-nodejs-plain colored'      },
  { name: 'Python',      icon: 'devicon-python-plain colored'      },
  { name: 'JavaScript',  icon: 'devicon-javascript-plain colored'  },
  { name: 'Java',        icon: 'devicon-java-plain colored'        },
  { name: 'HTML5',       icon: 'devicon-html5-plain colored'       },
  { name: 'CSS3',        icon: 'devicon-css3-plain colored'        },
  { name: 'Express',     icon: 'devicon-express-original colored'  },
  { name: 'MongoDB',     icon: 'devicon-mongodb-plain colored'     },
  { name: 'MySQL',       icon: 'devicon-mysql-plain colored'       },
  { name: 'Flutter',     icon: 'devicon-flutter-plain colored'     },
  { name: 'C++',         icon: 'devicon-cplusplus-plain colored'   },
  { name: 'PHP',         icon: 'devicon-php-plain colored'         },
  { name: 'Django',      icon: 'devicon-django-plain colored'      },
  { name: 'TailwindCSS', icon: 'devicon-tailwindcss-plain colored' },
]

export default function Skills() {
  return (
    <section className="section wrapper" id="skills">
      <div className="top-header">
        <h1>Skills</h1>
      </div>

      <h2 className="tech-stack-title">My Tech Stack</h2>

      <div className="tech-stack-grid">
        {techStack.map(tech => (
          <div className="tech-badge-card" key={tech.name}>
            <i className={tech.icon}></i>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
