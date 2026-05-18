import { useEffect } from 'react'

export default function useSiteBehavior() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) return

    const particlesEl = document.getElementById('particles')
    if (particlesEl) {
      const count = window.innerWidth < 768 ? 30 : 60
      for (let i = 0; i < count; i += 1) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 6}s`
        particle.style.animationDuration = `${Math.random() * 3 + 3}s`
        particlesEl.appendChild(particle)
      }
    }

    const header = document.querySelector('.header')
    const hero = document.querySelector('.hero')
    const scrollProgress = document.querySelector('.scroll-progress')
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]:not([href="#"])'))
    const navLinks = Array.from(document.querySelectorAll('.nav-link'))

    const onAnchorClick = (event) => {
      const anchor = event.currentTarget
      const href = anchor.getAttribute('href')
      if (!href) return

      const target = document.querySelector(href)
      if (!target) return

      event.preventDefault()
      const headerHeight = header ? header.offsetHeight : 0
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16
      window.scrollTo({ top, behavior: 'smooth' })
    }

    anchors.forEach((anchor) => anchor.addEventListener('click', onAnchorClick))

    const handleMouseMove = (event) => {
      if (!hero) return
      const x = (event.clientX / window.innerWidth - 0.5) * 24
      const y = (event.clientY / window.innerHeight - 0.5) * 18
      hero.style.setProperty('--mouse-x', `${x}px`)
      hero.style.setProperty('--mouse-y', `${y}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.fade-in').forEach((element) => observer.observe(element))

    const updateActiveNav = () => {
      let activeSection = ''
      sections.forEach((section) => {
        const offset = section.offsetTop - 200
        if (window.pageYOffset >= offset) {
          activeSection = section.id
        }
      })

      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${activeSection}`)
      })
    }

    const updateNavbarState = () => {
      if (!header) return
      if (window.pageYOffset > 80) {
        header.style.background = 'rgba(0, 0, 0, 0.82)'
      } else {
        header.style.background = ''
      }
    }

    const updateScrollProgress = () => {
      if (!scrollProgress) return
      const scrollTop = window.pageYOffset
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0
      scrollProgress.style.width = `${progress}%`
    }

    const handleScroll = () => {
      updateActiveNav()
      updateNavbarState()
      updateScrollProgress()
    }

    updateActiveNav()
    updateNavbarState()
    updateScrollProgress()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', updateActiveNav)

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', onAnchorClick))
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateActiveNav)
      window.removeEventListener('mousemove', handleMouseMove)
      if (particlesEl) particlesEl.innerHTML = ''
      observer.disconnect()
    }
  }, [])
}
