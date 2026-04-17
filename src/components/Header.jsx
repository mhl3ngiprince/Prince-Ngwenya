import React, { useState } from 'react'


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <header className="header" role="banner">
      <div className="container">

        <a className="logo" href="#home">Mhlengie</a>
        <button 
          className="nav-hamburger" 
          onClick={toggleMobile}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          aria-controls="nav-list"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav aria-label="Main navigation">
          <ul id="nav-list" className={`nav-list ${mobileOpen ? 'open' : ''}`} role="menubar" style={{marginLeft:'auto'}}>

            <li role="none"><a className="nav-link" role="menuitem" href="#about">About</a></li>
            <li role="none"><a className="nav-link" role="menuitem" href="#experience">Experience</a></li>
            <li role="none"><a className="nav-link" role="menuitem" href="#projects">Projects</a></li>
            <li role="none"><a className="nav-link" role="menuitem" href="#github">GitHub</a></li>
            <li role="none"><a className="nav-link" role="menuitem" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
