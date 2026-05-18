import React, { useState, useEffect } from 'react'

const stats = [
  { icon: '💼', value: '15+', label: 'Projects Delivered' },
  { icon: '🚀', value: '5+', label: 'Years Experience' },
  { icon: '🌐', value: '10+', label: 'Industries Served' }
]

const heroPhrases = [
  'Digital Experiences',
  'Growth-driven Interfaces',
  'Elegant Web Systems'
]

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [avatarHover, setAvatarHover] = useState(false)
  const [typedText, setTypedText] = useState(heroPhrases[0])

  useEffect(() => {
    let phraseIndex = 0
    let isDeleting = false
    let currentText = ''
    let timerId = null

    const updateText = () => {
      const fullPhrase = heroPhrases[phraseIndex]
      if (isDeleting) {
        currentText = fullPhrase.substring(0, currentText.length - 1)
      } else {
        currentText = fullPhrase.substring(0, currentText.length + 1)
      }

      setTypedText(currentText)

      let delay = isDeleting ? 70 : 120
      if (!isDeleting && currentText === fullPhrase) {
        delay = 1600
        isDeleting = true
      } else if (isDeleting && currentText === '') {
        isDeleting = false
        phraseIndex = (phraseIndex + 1) % heroPhrases.length
        delay = 800
      }

      timerId = window.setTimeout(updateText, delay)
    }

    timerId = window.setTimeout(updateText, 500)
    return () => window.clearTimeout(timerId)
  }, [])

  return (
    <section className="hero hero-landing" id="home" aria-labelledby="hero-title">
      <div className="hero-video-wrapper" aria-hidden="true">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/portfolio.mp4" type="video/mp4" />
          Your browser does not support video backgrounds.
        </video>
        <div className="hero-video-mask" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy fade-in fade-in-delay-1 glass-card">
          <span className="hero-eyebrow">Portfolio</span>
          <h1 id="hero-title" className="hero-title">
            Crafting premium digital products with <span className="highlight live-text" aria-live="polite">
              {typedText}
              <span className="typed-cursor" aria-hidden="true">|</span>
            </span>
          </h1>

          <p className="hero-subtitle">
            Hi, I’m Prince — a full-stack creator building polished interfaces, modern brands, and web apps that scale.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore projects
              <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Book a call
            </a>
          </div>

          <div className="hero-notes">
            <div className="hero-badge">Design system, Web performance, AI tools</div>
            <p>Built for professionals who want an unforgettable digital presence.</p>
          </div>
        </div>

        <aside className="hero-panel fade-in fade-in-delay-2">
          <div className="hero-card glass-card">
            <div className="hero-card-header">
              <div className="avatar-frame">
                <img
                  src="/prince.jpeg"
                  alt="Mhlengie Prince Ngwenya"
                  className={`avatar ${imageLoaded ? 'loaded' : ''} ${avatarHover ? 'hovered' : ''}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  onMouseEnter={() => setAvatarHover(true)}
                  onMouseLeave={() => setAvatarHover(false)}
                  loading="eager"
                />
              </div>
              <div>
                <p className="hero-card-title">Mhlengie Prince</p>
                <p className="hero-card-subtitle">Creative Lead & Software Engineer</p>
              </div>
            </div>

            <p className="hero-card-copy">
              I design premium web experiences with speed, polish, and strategic clarity. My work blends visual storytelling with practical engineering.
            </p>

            <div className="hero-card-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat-item">
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-highlights">
            <article className="hero-highlight glass-card">
              <h3>Fast Delivery</h3>
              <p>Launch modern, responsive web experiences with best-in-class tooling and production-ready accessibility.</p>
            </article>
            <article className="hero-highlight glass-card">
              <h3>Modern UI</h3>
              <p>Clean layouts, premium motion, and interface details built to impress clients and hiring teams.</p>
            </article>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero
