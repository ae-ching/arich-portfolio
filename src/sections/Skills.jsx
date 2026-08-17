import React from 'react'

const groups = [
  {
    title: 'Systems Analysis & Design',
    icon: '◈',
    skills: ['Requirements Gathering', 'Systems Analysis', 'Business Process Analysis', 'System Design', 'Software Development Life Cycle', 'Technical Documentation'],
    span: 'normal',
  },
  {
    title: 'UI/UX & Process Modeling',
    icon: '◎',
    skills: ['UI/UX Prototyping', 'Wireframing', 'BPMN', 'Flowcharts', 'ERD', 'Use Case Diagrams'],
    span: 'normal',
  },
  {
    title: 'Programming',
    icon: '◉',
    skills: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    span: 'normal',
  },
  {
    title: 'Frameworks, APIs & Databases',
    icon: '◐',
    skills: ['Django', 'React', 'Bootstrap', 'Node.js', 'Firebase', 'REST API', 'MySQL', 'SQLite', 'PostgreSQL'],
    span: 'normal',
  },
  {
    title: 'Tools',
    icon: '◑',
    skills: ['Git / GitHub', 'VS Code', 'NetBeans', 'Figma', 'Microsoft Office', 'Google Workspace'],
    span: 'wide',
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Tools & expertise</h2>
          <p className="section-subtitle">
            A balanced toolkit spanning development, design, and systems thinking —
            built through coursework, projects, and self-driven learning.
          </p>
        </div>
        <div className="skills-bento">
          {groups.map((g, i) => (
            <div key={i} className={`skill-tile ${g.span}`}>
              <div className="skill-tile-header">
                <span className="skill-tile-icon">{g.icon}</span>
                <h3>{g.title}</h3>
              </div>
              <div className="skill-tile-tags">
                {g.skills.map((s, j) => (
                  <span key={j} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
