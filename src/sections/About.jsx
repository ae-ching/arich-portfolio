import React from 'react'
import { GraduationCap, Briefcase, Sparkles } from 'lucide-react'

const whatIDo = [
  'Systems analysis',
  'Full-stack development',
  'Database design',
  'UI/UX prototyping',
  'Web application development',
  'Machine learning & data-driven projects',
  'Technical documentation',
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
        <div className="about-layout">
          <div className="about-main">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Bridging technology<br />and business insight
            </h2>
            <p className="about-body">
              Information Systems student with hands-on experience in systems analysis,
              database design, UI/UX prototyping, and full-stack software development
              through academic projects. I approach every project with a systems-thinking
              mindset — understanding not just how to build, but why it matters.
            </p>
            <p className="about-body">
              Currently seeking an internship opportunity to apply my technical and
              analytical skills while gaining practical professional experience in a
              real-world environment.
            </p>
            <div className="about-edu">
              <div className="edu-icon-wrap">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3>Bachelor of Science in Information Systems</h3>
                <p>Richwell Colleges Inc. <span className="edu-sep">·</span> 2023 – Present</p>
              </div>
            </div>
          </div>

          <div className="about-details">
            <div className="detail-card">
              <div className="detail-header">
                <Briefcase size={16} />
                <span>What I Do</span>
              </div>
              <ul className="detail-list">
                {whatIDo.map((item, i) => (
                  <li key={i}>
                    <Sparkles size={12} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="detail-card">
              <div className="detail-header">
                <Sparkles size={16} />
                <span>Career Aspirations</span>
              </div>
              <div className="aspiration-chips">
                {aspirations.map((a, i) => (
                  <span key={i} className="asp-chip">{a}</span>
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
