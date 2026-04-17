import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Mhlengie Prince Ngwenya</h3>
            <p className="muted">Full-Stack Developer & AI/ML Enthusiast crafting digital solutions with purpose.</p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li><a href="https://github.com/mhl3ngiprince" target="_blank" rel="noreferrer" className="footer-link">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/mhlengie-prince-ngwenya-728878268/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a></li>
              <li><a href="mailto:mhlengip269@gmail.com" className="footer-link">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">© {currentYear} Mhlengie Prince Ngwenya. All rights reserved.</p>
          <p className="footer-note">Designed & Built with React + Vite</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
