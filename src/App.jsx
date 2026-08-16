import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const pos = window.scrollY + 300
      for (const s of sections) {
        const el = document.getElementById(s)
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar scrolled={scrolled} active={activeSection} scrollTo={scrollTo} />
      <Home scrollTo={scrollTo} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
