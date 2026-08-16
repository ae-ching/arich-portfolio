import React from 'react'
import { ExternalLink, Github, CheckCircle2, Construction, FileText } from 'lucide-react'

const featured = {
  name: 'Fishpond Production Monitoring & Harvest Prediction System',
  emoji: '🐟',
  status: 'Completed — Published',
  year: '3rd Year',
  type: 'Web Application / Machine Learning',
  desc: 'Web-based platform for multiple fishpond owners to monitor, record, and analyze fish production data with ML-powered harvest predictions.',
  features: ['User accounts & individual data management', 'Production monitoring & analytics', 'Harvest prediction using Random Forest'],
  tech: ['Django', 'Python', 'Random Forest Regressor', 'SQLite'],
  image: '/assets/fishpond.jpg',
  github: 'https://github.com/ae-ching/FishpondProductionMonitoringSystem',
  live: 'https://fishpondproductionmonitoringsystem.onrender.com/',
}

const others = [
  {
    name: 'Mochi-Mochi Booking System',
    emoji: '📅',
    status: 'In Development',
    type: 'Booking System',
    desc: 'Personalized resort booking system with calendar, reservations, and payment integration.',
    tech: ['React', 'Node.js', 'Firebase'],
    image: '/assets/booking.jpg',
  },
  {
    name: 'Programming Mini Games',
    emoji: '🎮',
    status: 'Completed',
    type: 'Interactive Web App',
    desc: 'Collection of mini-games built for IS Week as VP of the Programming Club.',
    tech: ['React', 'Node.js', 'Vite', 'Bootstrap'],
    image: '/assets/mini-games.jpg',
  },
  {
    name: 'Lost & Found App',
    emoji: '🔎',
    status: 'In Development',
    type: 'Web Application',
    desc: 'Centralized Lost & Found platform for a school community.',
    tech: ['React', 'Node.js', 'Firebase'],
    image: '/assets/lost-found.jpg',
  },
]

const analysis = [
  {
    title: 'Business Process Redesign',
    year: '2026',
    items: ['As-is and to-be analysis', 'Process evaluation', 'BPMN diagrams'],
  },
  {
    title: 'Design & Usability Evaluation',
    year: '2026',
    items: ['UI/UX design', 'Figma prototyping', 'Usability evaluation', 'Recommendations'],
  },
  {
    title: 'Performance Evaluation — Goldilocks',
    year: '2026',
    items: ['KPI & KRA identification', 'Performance measurement', 'Business requirements analysis'],
  },
  {
    title: 'System Documentation — Fishpond',
    year: '2026',
    items: ['System architecture', 'Database design & ERD', 'ML methodology docs', 'Module documentation'],
  },
  {
    title: 'Fenex Living — Business Plan',
    year: '2026',
    items: ['Business concept', 'Market analysis', 'Strategy & planning', 'Financial planning'],
  },
]

function Status({ status }) {
  const done = status.includes('Completed')
  return (
    <span className={`status-pill ${done ? 'done' : 'wip'}`}>
      {done ? <CheckCircle2 size={11} /> : <Construction size={11} />}
      {status}
    </span>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">
            Development projects, systems analysis, and documentation that demonstrate
            both technical ability and structured thinking.
          </p>
        </div>

        <div className="featured-card">
          <div className="featured-visual">
            <img src={featured.image} alt={featured.name} className="featured-img" />
            <div className="featured-img-overlay" />
            <Status status={featured.status} />
          </div>
          <div className="featured-body">
            <div className="featured-meta">
              <span className="featured-emoji">{featured.emoji}</span>
              <span className="featured-type">{featured.type}</span>
              <span className="featured-year">{featured.year}</span>
            </div>
            <h3 className="featured-title">{featured.name}</h3>
            <p className="featured-desc">{featured.desc}</p>
            <ul className="featured-features">
              {featured.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <div className="featured-tech">
              {featured.tech.map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>
            <div className="featured-actions">
              <a href={featured.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={14} />
                View Live
              </a>
              <a href={featured.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <Github size={14} />
                Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="subsection-header">
          <h3>More Projects</h3>
          <div className="glow-line" />
        </div>
        <div className="project-grid">
          {others.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-card-visual">
                <img src={p.image} alt={p.name} className="project-card-img" />
                <div className="project-card-overlay" />
                <Status status={p.status} />
              </div>
              <div className="project-card-body">
                <div className="project-card-meta">
                  <span className="project-emoji">{p.emoji}</span>
                  <span className="project-type">{p.type}</span>
                </div>
                <h4>{p.name}</h4>
                <p>{p.desc}</p>
                <div className="project-card-tech">
                  {p.tech.map((t, j) => (
                    <span key={j} className="tech-pill-sm">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="subsection-header">
          <h3>Systems & Business Analysis</h3>
          <div className="glow-line" />
        </div>
        <div className="analysis-grid">
          {analysis.map((a, i) => (
            <div key={i} className="analysis-card">
              <div className="analysis-card-top">
                <FileText size={16} />
                <span className="analysis-year">{a.year}</span>
              </div>
              <h4>{a.title}</h4>
              <ul>
                {a.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
