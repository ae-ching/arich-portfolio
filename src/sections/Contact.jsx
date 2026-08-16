import React from 'react'
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let&apos;s Connect</h2>

        <div className="contact-grid">
          <div className="contact-intro">
            <p className="contact-lead">
              Interested in working with me? Let&apos;s connect.
            </p>
            <p className="contact-text">
              I&apos;m currently seeking internship and entry-level opportunities in
              software development, systems analysis, and business analysis.
              Feel free to reach out — I&apos;d love to discuss how I can contribute
              to your team.
            </p>
            <a
              href="mailto:arichbolivar@gmai.com"
              className="btn btn-primary btn-lg"
            >
              <Mail size={18} />
              Email Me
            </a>
          </div>

          <div className="contact-links">
            <a href="mailto:arichbolivar@gmai.com" className="contact-link">
              <div className="contact-link-icon">
                <Mail size={20} />
              </div>
              <div className="contact-link-info">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value">arichbolivar@gmai.com</span>
              </div>
              <ArrowUpRight size={16} className="contact-link-arrow" />
            </a>

            <a href="tel:+639927081374" className="contact-link">
              <div className="contact-link-icon">
                <Phone size={20} />
              </div>
              <div className="contact-link-info">
                <span className="contact-link-label">Phone</span>
                <span className="contact-link-value">0992 708 1374</span>
              </div>
              <ArrowUpRight size={16} className="contact-link-arrow" />
            </a>

            <a
              href="https://www.linkedin.com/in/arichh"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <Linkedin size={20} />
              </div>
              <div className="contact-link-info">
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value">linkedin.com/in/arichh</span>
              </div>
              <ArrowUpRight size={16} className="contact-link-arrow" />
            </a>

            <a
              href="https://github.com/ae-ching"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-link-icon">
                <Github size={20} />
              </div>
              <div className="contact-link-info">
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value">github.com/ae-ching</span>
              </div>
              <ArrowUpRight size={16} className="contact-link-arrow" />
            </a>
          </div>
        </div>

        <footer className="footer">
          <p>© 2025 Arich Dalle Bolivar. Built with React.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
