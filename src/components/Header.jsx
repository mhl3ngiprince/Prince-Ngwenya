import React, { useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' }
]

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobile = () => setMobileOpen((current) => !current)
  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="header" role="banner">
      <div className="container header-inner">

        <a className="logo" href="#home">Mhlengie</a>
        <button
          type="button"
          className={`nav-hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={toggleMobile}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          aria-controls="nav-list"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className="nav" aria-label="Main navigation">
          <ul id="nav-list" className={`nav-list ${mobileOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <a className="nav-link" href={item.href} onClick={closeMobile}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
