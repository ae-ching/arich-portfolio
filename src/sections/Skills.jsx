import React from 'react'

const skillGroups = [
  {
    title: 'Systems Analysis & Design',
    icon: '🔍',
    skills: [
      'Requirements Gathering',
      'Systems Analysis',
      'Business Process Analysis',
      'System Design',
      'SDLC',
      'Technical Documentation',
    ],
  },
  {
    title: 'UI/UX & Process Modeling',
    icon: '🎨',
    skills: [
      'UI/UX Prototyping',
      'Wireframing',
      'BPMN',
      'Flowcharts',
      'ERD',
      'Use Case Diagrams',
    ],
  },
  {
    title: 'Programming',
    icon: '💻',
    skills: [
      'Python',
      'Java',
      'JavaScript',
      'HTML',
      'CSS',
      'SQL',
    ],
  },
  {
    title: 'Frameworks, APIs & Databases',
    icon: '🛠️',
    skills: [
      'Django',
      'React',
      'Bootstrap',
      'Node.js',
      'Firebase',
      'REST API',
      'MySQL',
      'SQLite',
      'PostgreSQL',
    ],
  },
  {
    title: 'Tools',
    icon: '🧰',
    skills: [
      'Git / GitHub',
      'Visual Studio Code',
      'NetBeans',
      'Figma',
      'Microsoft Office',
      'Google Workspace',
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">My Skills & Expertise</h2>
        <p className="section-subtitle">
          A blend of technical development capabilities and systems-oriented
          analytical skills built through academic and project experience.
        </p>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div key={i} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-card-title">{group.title}</h3>
              </div>
              <ul className="skill-list">
                {group.skills.map((skill, j) => (
                  <li key={j} className="skill-item">
                    <span className="skill-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
