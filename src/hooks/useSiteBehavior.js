import { useEffect } from 'react'

export default function useSiteBehavior() {
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Particles
    const particlesEl = document.getElementById('particles')
    if (particlesEl) {
      const count = window.innerWidth < 768 ? 30 : 60
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div')
        p.className = 'particle'
        p.style.left = Math.random() * 100 + '%'
        p.style.top = Math.random() * 100 + '%'
        p.style.animationDelay = Math.random() * 6 + 's'
        p.style.animationDuration = (Math.random() * 3 + 3) + 's'
        particlesEl.appendChild(p)
      }
    }

    // Smooth scrolling for internal anchors
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'))
    const header = document.querySelector('.header')
    function onAnchorClick(e) {
      const href = this.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        const headerHeight = header ? header.offsetHeight : 0
        const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
    anchors.forEach(a => a.addEventListener('click', onAnchorClick))

    // Fade-in observer
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    // Active nav tracking
    const navLinks = Array.from(document.querySelectorAll('.nav-link'))
    const sections = Array.from(document.querySelectorAll('section[id]'))
    function updateActive() {
      let current = ''
      sections.forEach(section => {
        const top = section.offsetTop - 200
        if (window.pageYOffset >= top) current = section.id
      })
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`)
      })
    }
    updateActive()
    window.addEventListener('scroll', updateActive)

    // Navbar background effect
    function onScrollNavbar() {
      const h = document.querySelector('.header')
      if (!h) return
      if (window.pageYOffset > 80) {
        h.style.background = 'rgba(0,0,0,0.82)'
      } else {
        h.style.background = ''
      }
    }
    window.addEventListener('scroll', onScrollNavbar)

    // Scroll progress
    function updateScrollProgress() {
      const progress = document.querySelector('.scroll-progress')
      if (progress) {
        const scrollTop = window.pageYOffset
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPercent = (scrollTop / docHeight) * 100
        progress.style.width = scrollPercent + '%'
      }
    }
    window.addEventListener('scroll', updateScrollProgress)

    // cleanup
    return () => {
      anchors.forEach(a => a.removeEventListener('click', onAnchorClick))
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('scroll', onScrollNavbar)
      if (particlesEl) particlesEl.innerHTML = ''
    }
  }, [])
}
