import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import GitHub from './components/GitHub'
import Contact from './components/Contact'
import Footer from './components/Footer'

import useSiteBehavior from './hooks/useSiteBehavior'

export default function App() {
  useSiteBehavior()

  return (
    <div className="site-root">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="bg-animation" aria-hidden />
      <div id="particles" className="particles" aria-hidden="true" />

      <Header />
      <main id="main-content">
        <div className="scroll-progress" aria-hidden="true"></div>
        <Hero />
        <section className="section" id="about">
          <div className="container">
            <About />
          </div>
        </section>
        <section className="section" id="experience">
          <div className="container">
            <Experience />
          </div>
        </section>
        <section className="section" id="projects">
          <div className="container">
            <Projects />
          </div>
        </section>
        <section className="section" id="github">
          <div className="container">
            <GitHub />
          </div>
        </section>
        <section className="section" id="contact">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
