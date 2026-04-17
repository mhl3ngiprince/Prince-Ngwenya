import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero" id="home" role="banner">
      <div className="container">
        <div className="hero-inner">
          {/* Profile Image - Premium Avatar */}
          <div className={`avatar-wrapper fade-in-delay-1 ${isVisible ? 'visible' : ''}`}>
            <div className="avatar-container">
              <img
                src="/prince.jpeg"
                alt="Mhlengie Prince Ngwenya - Full-Stack Developer & AI/ML Enthusiast"
                className={`avatar ${imageLoaded ? 'loaded' : ''}`}
                onLoad={() => setImageLoaded(true)}
                loading="eager"
              />
            </div>
          </div>

          {/* Main Heading - Compelling Tagline */}
          <h1 className="hero-title fade-in-delay-2" tabIndex={0}>
            Transforming Ideas Into
            <br />
            <span className="highlight">Digital Impact</span>
          </h1>

          {/* Subtitle - Role Definition */}
          <p className="hero-subtitle fade-in-delay-3" aria-label="Professional summary">
            Full-Stack Developer • AI/ML Enthusiast • Tech Innovator
          </p>

          {/* Description - Compelling Value Proposition */}
          <div className="hero-description fade-in-delay-4">
            <p>
              Building elegant solutions that bridge the gap between innovation and real-world impact. 
              Specializing in full-stack development with expertise in modern web technologies and artificial intelligence.
            </p>
          </div>

          {/* Key Stats - Social Proof */}
          <div className="hero-stats fade-in-delay-4">
            <div className="stat-badge">
              <span className="stat-icon">💼</span>
              <span className="stat-text">ICT Diploma</span>
            </div>
            <div className="stat-badge">
              <span className="stat-icon">🏆</span>
              <span className="stat-text">15+ Projects</span>
            </div>
            <div className="stat-badge">
              <span className="stat-icon">📚</span>
              <span className="stat-text">20+ Certifications</span>
            </div>
          </div>

          {/* Call-to-Action Buttons - Premium CTAs */}
          <div className="hero-cta fade-in-delay-5" role="group" aria-label="Featured actions">
            <a 
              href="#projects" 
              className="btn btn-primary"
              aria-label="View my projects and portfolio"
            >
              <span>View My Work</span>
              <span className="btn-arrow">→</span>
            </a>
            <a 
              href="#contact" 
              className="btn btn-secondary"
              aria-label="Contact me for opportunities"
            >
              Get in Touch
            </a>
          </div>

          {/* Scroll Indicator - Smooth Animation */}
          <div className="scroll-indicator fade-in-delay-6">
            <span className="scroll-text">Scroll to explore more</span>
            <div className="scroll-animation" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
