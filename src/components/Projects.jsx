import React from 'react'

const Projects = () => {
const projects = [
    {
      title: 'kimConnect',
      desc: 'Community-driven platform connecting local services and businesses in Kimberley. Built with modern web technologies to digitize the township economy.',
      tech: 'HTML, CSS, JavaScript, React',
      github: 'https://github.com/mhl3ngiprince/kimConnect',
      featured: true
    },
    {
      title: 'Ctrl+Alt+Elite (Geekulcha Hackathon)',
      desc: 'Award-winning hackathon project placing Top 10. Built a community-based service and delivery platform for local spaza shops to digitize the township economy.',
      tech: 'HTML, CSS, JavaScript, Team Project',
      github: 'https://github.com/mhl3ngiprince/Ctrl-Alt-Elite',
      featured: true
    },
    {
      title: 'Agrilink',
      desc: 'Digital marketplace connecting small-scale emerging farmers directly to broader markets. React and Django-based platform for agricultural transparency.',
      tech: 'React, Django, Python, PostgreSQL',
      github: 'https://github.com/mhl3ngiprince/Agrilink',
      featured: true
    },
    {
      title: 'Personal AI Mechanic (AWS)',
      desc: 'AI productivity app using Amazon PartyRock/Bedrock to predict vehicle maintenance from symptoms/mileage. AWS AI & ML Scholars project.',
      tech: 'AWS Bedrock, Generative AI, PartyRock',
      github: 'https://github.com/mhl3ngiprince?tab=repositories',
      featured: true
    },
    {
      title: 'MediGrid',
      desc: 'Healthcare management system for efficient medical record handling and appointment scheduling.',
      tech: 'Kotlin, Android, Firebase',
      github: 'https://github.com/mhl3ngiprince/MediGrid',
      featured: false
    },
    {
      title: 'EzaseSpaza',
      desc: 'Mobile application for township spaza shop management and digital transformation.',
      tech: 'Kotlin, Android, SQLite',
      github: 'https://github.com/mhl3ngiprince/EzaseSpaza',
      featured: false
    },
    {
      title: 'CampusConnect-SA',
      desc: 'University community platform connecting students, faculty, and local businesses.',
      tech: 'HTML, CSS, JavaScript, PHP',
      github: 'https://github.com/mhl3ngiprince/CampusConnect-SA',
      featured: false
    },
    {
      title: 'FineDine',
      desc: 'Restaurant management system with menu customization and order processing capabilities.',
      tech: 'Java, Android, SQLite',
      github: 'https://github.com/mhl3ngiprince/FineDine',
      featured: false
    },
    {
      title: 'HexSoftwares Java Projects',
      desc: 'Complete OOP banking app with deposits, withdrawals, balance checks and error handling. Library management system and student grade calculator.',
      tech: 'Java, OOP, NetBeans, Git',
      github: 'https://github.com/mhl3ngiprince/HexSoftwares_Project_MhlengiePrinceNgwenya',
      featured: true
    },
    {
      title: 'Circuit Breakers Training',
      desc: 'Machine learning training programs and technical workshops development.',
      tech: 'TypeScript, React, Node.js',
      github: 'https://github.com/mhl3ngiprince/circuit-breakers',
      featured: false
    }
  ]

  return (
    <div>
      <h2 className="section-title fade-in">Featured Projects</h2>
      <div className="projects-grid">
        {projects.filter(p => p.featured).map((p,idx)=> (
          <article key={idx} className="project-card glass-card">
            <div className="project-header">
              <h3>{p.title}</h3>
              {p.featured && <span className="featured-badge">⭐ Featured</span>}
            </div>
            <p className="project-description">{p.desc}</p>
            <div className="project-tech">
              {p.tech.split(', ').map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={p.github} target="_blank" rel="noreferrer noopener" className="btn btn-ghost project-btn">
                <span>View Code</span> <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="other-projects">
        <h3>Other Projects</h3>
        <div className="projects-list">
          {projects.filter(p => !p.featured).map((p,idx)=> (
            <div key={idx} className="project-item">
              <h4>{p.title}</h4>
              <p className="muted">{p.desc}</p>
              <div className="project-tech-small">
                {p.tech.split(', ').slice(0, 3).map((tech, i) => (
                  <span key={i} className="tech-tag-small">{tech}</span>
                ))}
              </div>
              <a href={p.github} target="_blank" rel="noreferrer noopener" className="project-link-small">View →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
