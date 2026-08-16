import React from 'react'
import { Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Sidebar({ activeSection, scrollTo, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-inner">
          {/* Brand */}
          <div className="sidebar-brand">
            <span className="brand-name">Arich</span>
            <span className="brand-tag">Portfolio</span>
          </div>

          {/* Navigation */}
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                <span className="nav-indicator" />
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Resume CTA */}
          <div className="sidebar-resume">
            <a
              href="/assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Social links */}
          <div className="sidebar-social">
            <a
              href="https://github.com/ae-ching"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/arichh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:arichbolivar@gmai.com"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />
      )}
    </>
  )
}

export default Sidebar
