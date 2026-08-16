import React from 'react'
import { ExternalLink, Github, CheckCircle2, Construction } from 'lucide-react'

const featuredProject = {
  name: 'Fishpond Production Monitoring & Harvest Prediction System',
  emoji: '🐟',
  status: 'Completed — Published',
  year: '3rd Year of College',
  type: 'Web Application / Machine Learning',
  description:
    'Web-based platform for multiple fishpond owners to monitor, record, and analyze fish production data.',
  features: [
    'User accounts & individual data management',
    'Production monitoring & data analysis',
    'Harvest prediction using ML',
  ],
  tech: ['Django', 'Python', 'Random Forest Regressor'],
  image: '/assets/fishpond.jpg',
  github: 'https://github.com/ae-ching/FishpondProductionMonitoringSystem',
  live: 'https://fishpondproductionmonitoringsystem.onrender.com/',
}

const otherProjects = [
  {
    name: 'Mochi-Mochi Booking System',
    emoji: '📅',
    status: 'In Development',
    type: 'Web Application / Booking System',
    description:
      'Personalized booking system for Mochi-Mochi Resort to manage reservations and booking schedules.',
    features: ['Booking calendar', 'Reservation status', 'Notifications', 'Payment options'],
    tech: ['React', 'Node.js', 'Firebase'],
    image: '/assets/booking.jpg',
  },
  {
    name: 'Programming Mini Games',
    emoji: '🎮',
    status: 'Completed',
    type: 'Interactive Web Application',
    description:
      'Collection of mini-games created for an IS Week event while serving as Vice President of the Programming Club.',
    features: ['Tetris', 'Snake', 'Slot Machine', 'Reaction Game', 'Memory Game', 'Jumbled Letters'],
    tech: ['React', 'Node.js', 'Vite', 'Bootstrap'],
    image: '/assets/mini-games.jpg',
  },
  {
    name: 'Lost & Found App',
    emoji: '🔎',
    status: 'In Development',
    type: 'Web Application',
    description:
      'Centralized Lost & Found platform for a school community.',
    features: ['Missing/found item reporting', 'Centralized item management'],
    tech: ['React', 'Node.js', 'Firebase'],
    image: '/assets/lost-found.jpg',
  },
]

const analysisProjects = [
  {
    title: 'Business Process Redesign and Improvement Proposal',
    year: '2026',
    items: ['As-is and to-be analysis', 'Process evaluation', 'BPMN diagrams'],
  },
  {
    title: 'Design and Usability Evaluation of a Prototype',
    year: '2026',
    items: ['UI/UX design', 'Prototype development using Figma', 'Usability evaluation', 'Findings and recommendations'],
  },
  {
    title: 'Performance Evaluation Framework — Goldilocks Bakeshop Inc.',
    year: '2026',
    items: ['KPI and KRA identification', 'Performance measurement', 'Business requirements analysis', 'Organizational/process analysis', 'Evaluation framework design'],
  },
  {
    title: 'System Documentation — Fishpond Production Monitoring & Harvest Prediction System',
    year: '2026',
    items: ['System architecture', 'Database design and entity relationships', 'System module documentation', 'Authentication and dashboard modules', 'Fishpond, harvest, analytics, and prediction modules', 'Machine learning methodology and prediction workflow', 'Model and dataset documentation', 'System application in a real-world context'],
  },
  {
    title: 'Fenex Living — Business Plan Mockup',
    year: '2026',
    items: ['Business concept development', 'Market and business analysis', 'Business strategy and planning', 'Operational and financial planning'],
  },
]

function StatusBadge({ status }) {
  const isCompleted = status.includes('Completed')
  return (
    <span className={`status-badge ${isCompleted ? 'completed' : 'dev'}`}>
      {isCompleted ? <CheckCircle2 size={12} /> : <Construction size={12} />}
      {status}
    </span>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A collection of development projects, systems analysis work, and business
          documentation that demonstrate my ability to build and analyze systems.
        </p>

        {/* ── Featured Project ── */}
        <div className="featured-project">
          <div className="featured-image">
            <img
              src={featuredProject.image}
              alt={featuredProject.name}
              className="project-img"
            />
            <div className="featured-overlay">
              <StatusBadge status={featuredProject.status} />
            </div>
          </div>
          <div className="featured-content">
            <div className="featured-meta">
              <span className="featured-emoji">{featuredProject.emoji}</span>
              <span className="featured-type">{featuredProject.type}</span>
              <span className="featured-year">{featuredProject.year}</span>
            </div>
            <h3 className="featured-title">{featuredProject.name}</h3>
            <p className="featured-desc">{featuredProject.description}</p>
            <ul className="featured-features">
              {featuredProject.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <div className="featured-tech">
              {featuredProject.tech.map((t, i) => (
                <span key={i} className="tech-pill">{t}</span>
              ))}
            </div>
            <div className="featured-actions">
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={14} />
                View Live
              </a>
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                <Github size={14} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ── Other Development Projects ── */}
        <div className="projects-subsection">
          <h3 className="subsection-title">Additional Development Projects</h3>
          <div className="project-grid">
            {otherProjects.map((project, i) => (
              <div key={i} className="project-card">
                <div className="project-card-image">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-img"
                  />
                  <div className="project-card-overlay">
                    <StatusBadge status={project.status} />
                  </div>
                </div>
                <div className="project-card-body">
                  <div className="project-card-meta">
                    <span className="project-emoji">{project.emoji}</span>
                    <span className="project-type">{project.type}</span>
                  </div>
                  <h4 className="project-card-title">{project.name}</h4>
                  <p className="project-card-desc">{project.description}</p>
                  <div className="project-card-tech">
                    {project.tech.map((t, j) => (
                      <span key={j} className="tech-pill-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Systems & Business Analysis ── */}
        <div className="projects-subsection">
          <h3 className="subsection-title">Systems & Business Analysis</h3>
          <p className="subsection-desc">
            Documentation, analysis, and IS coursework demonstrating structured
            thinking and professional communication.
          </p>
          <div className="analysis-grid">
            {analysisProjects.map((proj, i) => (
              <div key={i} className="analysis-card">
                <div className="analysis-header">
                  <h4 className="analysis-title">{proj.title}</h4>
                  <span className="analysis-year">{proj.year}</span>
                </div>
                <ul className="analysis-list">
                  {proj.items.map((item, j) => (
                    <li key={j}>
                      <span className="analysis-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
