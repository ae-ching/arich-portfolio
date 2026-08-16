import React from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'

function Home({ scrollTo }) {
  return (
    <section id="home" className="home-section">
      <div className="container home-container">
        <div className="home-content">
          <div className="home-text">
            <span className="home-greeting">Welcome! I'm</span>
            <h1 className="home-name">
              Arich Dalle<br />Bolivar
            </h1>
            <p className="home-role">
              Information Systems Student
            </p>
            <p className="home-tagline">
              Aspiring Software & Web Developer | Systems Analyst | Business Analyst
            </p>
            <div className="home-keywords">
              <span>SDLC</span>
              <span>UI/UX</span>
              <span>SQL</span>
              <span>Documentation</span>
            </div>
            <div className="home-actions">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo('projects')}
              >
                View My Projects
                <ArrowRight size={16} />
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => scrollTo('contact')}
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="home-image">
            <div className="profile-frame">
              <img
                src="/assets/profile.jpg"
                alt="Arich Dalle Bolivar"
                className="profile-photo"
              />
              <div className="profile-ring" />
            </div>
          </div>
        </div>

        <button
          className="scroll-hint"
          onClick={() => scrollTo('about')}
          aria-label="Scroll down"
        >
          <ArrowDown size={18} />
        </button>
      </div>
    </section>
  )
}

export default Home
