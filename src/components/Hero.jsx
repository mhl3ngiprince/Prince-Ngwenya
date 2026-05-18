import React, { useState, useEffect } from 'react'

const stats = [
  { icon: '💻', value: '10+', label: 'Projects & Apps Built' },
  { icon: '🚀', value: '3rd Year', label: 'ICT (App Development)' },
  { icon: '🌐', value: 'Full', label: 'Stack Capabilities' }
]

const heroPhrases = [
  'Scalable Web Systems',
  'Robust Application Logic',
  'Cloud-Integrated Backends'
]

const assetBase = import.meta.env.BASE_URL || '/'

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
          <source src={`${assetBase}portfolio.mp4`} type="video/mp4" />
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
            Hi, I’m Prince — an Application Developer building clean interfaces, robust backend logic, and software solutions that scale.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Explore projects
              <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>

          <div className="hero-notes">
            <div className="hero-badge">Java • Python • C# • React • Cloud Infrastructure</div>
            <p>Engineered with structural integrity, performance optimization, and clean architecture.</p>
          </div>
        </div>

        <aside className="hero-panel fade-in fade-in-delay-2">
          <div className="hero-panel-grid">
            <div className="hero-card glass-card">
              <div className="hero-card-header hero-card-header-no-avatar">
                <div>
                  <p className="hero-card-title">Mhlengie Prince</p>
                  <p className="hero-card-subtitle">Application Developer & Software Engineer</p>
                </div>
              </div>

              <p className="hero-card-copy">
                I develop modern software applications bridging intuitive frontends with powerful server-side code. My focus is on web engineering, data flows, and secure deployment.
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

            <div className="hero-avatar-panel glass-card">
              <div className="avatar-frame hero-avatar-panel-frame">
                <img
                  src={`${assetBase}prince.jpeg`}
                  alt="Mhlengie Prince Ngwenya"
                  className={`avatar ${imageLoaded ? 'loaded' : ''} ${avatarHover ? 'hovered' : ''}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  onMouseEnter={() => setAvatarHover(true)}
                  onMouseLeave={() => setAvatarHover(false)}
                  loading="eager"
                />
              </div>
              <div className="hero-avatar-content">
                <p className="hero-avatar-caption">Prince Ngwenya</p>
                <p className="hero-avatar-copy">A strong visual introduction with my portrait positioned beside the portfolio summary.</p>
              </div>
            </div>
          </div>

          <div className="hero-highlights">
            <article className="hero-highlight glass-card">
              <h3>Full-Stack Logic</h3>
              <p>Efficient database management and secure, RESTful API integrations built with production-ready frameworks.</p>
            </article>
            <article className="hero-highlight glass-card">
              <h3>Clean Code Architecture</h3>
              <p>Strong adherence to OOP principles, structural patterns, and performance metrics to ensure code maintainability.</p>
            </article>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero