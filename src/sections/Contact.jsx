import React from 'react'
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const links = [
  { icon: Mail, label: 'Email', value: 'arichbolivar@gmai.com', href: 'mailto:arichbolivar@gmai.com' },
  { icon: Phone, label: 'Phone', value: '0992 708 1374', href: 'tel:+639927081374' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/arichh', href: 'https://www.linkedin.com/in/arichh' },
  { icon: Github, label: 'GitHub', value: 'github.com/ae-ching', href: 'https://github.com/ae-ching' },
]

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-intro">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let&apos;s build<br />something together</h2>
            <p className="contact-body">
              I&apos;m currently seeking internship and entry-level opportunities
              in software development, systems analysis, and business analysis.
              If you think I&apos;d be a good fit for your team, I&apos;d love to hear from you.
            </p>
            <a href="mailto:arichbolivar@gmai.com" className="btn btn-primary btn-lg contact-cta">
              <Mail size={18} />
              Send me an email
            </a>
          </div>
          <div className="contact-links">
            {links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-link-card"
              >
                <div className="contact-link-icon">
                  <l.icon size={20} />
                </div>
                <div className="contact-link-info">
                  <span className="contact-link-label">{l.label}</span>
                  <span className="contact-link-value">{l.value}</span>
                </div>
                <ArrowUpRight size={16} className="contact-link-arrow" />
              </a>
            ))}
          </div>
        </div>
        <footer className="footer">
          <div className="footer-brand">
            <span className="footer-mark">A</span>
            <span>Arich Dalle Bolivar</span>
          </div>
          <p className="footer-copy">© 2025 — Designed & developed by Arich.</p>
        </footer>
      </div>
    </section>
  )
}

export default Contact
