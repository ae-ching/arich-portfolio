import React from 'react'
import { GraduationCap, Target, CheckCircle2 } from 'lucide-react'

const whatIDo = [
  'Systems analysis',
  'Full-stack development',
  'Database design',
  'UI/UX prototyping',
  'Web application development',
  'Machine learning / data-driven projects',
  'Documentation',
]

const aspirations = [
  'Systems Analysis',
  'Business Analysis',
  'Software & Web Development',
]

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <span className="section-label">About Me</span>

        <div className="about-grid">
          {/* Left column — bio */}
          <div className="about-bio">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              Information Systems student with hands-on experience in systems analysis,
              database design, UI/UX prototyping, and full-stack software development
              through academic projects. Seeking an internship opportunity to apply my
              technical and analytical skills while gaining practical professional experience.
            </p>

            <div className="about-education">
              <div className="edu-card">
                <div className="edu-icon">
                  <GraduationCap size={20} />
                </div>
                <div className="edu-info">
                  <h3>Bachelor of Science in Information Systems</h3>
                  <p>Richwell Colleges Inc.</p>
                  <span className="edu-year">2023 – Present</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — what I do & aspirations */}
          <div className="about-details">
            <div className="detail-block">
              <h3 className="detail-title">
                <Target size={16} />
                What I Do
              </h3>
              <ul className="detail-list">
                {whatIDo.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-block">
              <h3 className="detail-title">
                <Target size={16} />
                Career Aspirations
              </h3>
              <div className="aspiration-tags">
                {aspirations.map((item, i) => (
                  <span key={i} className="aspiration-tag">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
