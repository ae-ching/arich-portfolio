import React from 'react'
import { Menu, X, FileText } from 'lucide-react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ scrolled, active, scrollTo }) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <a className="navbar-brand" onClick={() => scrollTo('home')}>
            <span className="brand-mark">A</span>
            <span className="brand-text">Arich</span>
          </a>

          <nav className="navbar-nav">
            {links.map((l) => (
              <button
                key={l.id}
                className={`nav-item ${active === l.id ? 'active' : ''}`}
                onClick={() => scrollTo(l.id)}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="navbar-actions">
            <a
              href="./assets/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-pill"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>
          </div>

          <button className="menu-toggle" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          {links.map((l) => (
            <button
              key={l.id}
              className={`mobile-link ${active === l.id ? 'active' : ''}`}
              onClick={() => { scrollTo(l.id); setOpen(false) }}
            >
              {l.label}
            </button>
          ))}
          <a
            href="./assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-resume"
          >
            <FileText size={16} />
            Download Resume
          </a>
        </div>
      </div>
      {open && <div className="mobile-backdrop" onClick={() => setOpen(false)} />}
    </>
  )
}

export default Navbar
