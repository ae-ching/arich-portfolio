import React from 'react'
import { ArrowRight, ArrowDown, Code2, GraduationCap, TrendingUp, Target } from 'lucide-react'

const stats = [
  { icon: GraduationCap, label: '4th Year', sub: 'Information Systems Student' },
  { icon: Code2, label: 'Projects', sub: 'Academic & Personal' },
  { icon: TrendingUp, label: 'Always', sub: 'Learning & Improving' },
  { icon: Target, label: 'Goal', sub: 'To build meaningful solutions' },
]

function Home({ scrollTo }) {
  return (
    <section id="home" className="home-section">
      <div className="home-bg-glow" />
      <div className="container">
        <div className="home-layout">
          <div className="home-text">
            <div className="home-greeting">
              <span className="greeting-line" />
              <span>Hello! I&apos;m</span>
            </div>
            <h1 className="home-name">
              Arich Dalle<br />
              <span className="home-name-accent">Bolivar</span>
            </h1>
            <p className="home-role">Information Systems Student</p>
            <p className="home-tagline">
              Aspiring Software & Web Developer | Systems Analyst | Business Analyst
            </p>
            <div className="home-actions">
              <button className="btn btn-primary btn-lg" onClick={() => scrollTo('projects')}>
                View My Projects
                <ArrowRight size={16} />
              </button>
              <button className="btn btn-outline btn-lg" onClick={() => scrollTo('contact')}>
                Contact Me
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="home-tech">
              <span className="tech-label">Tech I work with:</span>
              <div className="tech-chips">
                {['SDLC', 'UI/UX', 'SQL', 'Python', 'JavaScript', 'Documentation'].map((t) => (
                  <span key={t} className="tech-chip">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="home-visual">
            <div className="profile-wrapper">
              <div className="profile-glow" />
              <div className="profile-frame">
                <img src="/assets/profile.jpg" alt="Arich Dalle Bolivar" className="profile-img" />
              </div>
              <div className="profile-ring" />
              <div className="profile-badge">
                <Code2 size={16} />
                <div>
                  <span className="badge-title">Building solutions.</span>
                  <span className="badge-sub">Creating impact.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="scroll-hint" onClick={() => scrollTo('about')}>
          <ArrowDown size={16} />
          <span>Scroll down to explore</span>
        </button>

        <div className="stats-row">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-icon">
                <s.icon size={20} />
              </div>
              <div className="stat-info">
                <span className="stat-label">{s.label}</span>
                <span className="stat-sub">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
