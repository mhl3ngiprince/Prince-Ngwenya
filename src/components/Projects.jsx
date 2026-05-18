import React from 'react'

const projects = [
  {
    title: 'kimConnect',
    desc: 'Community-driven platform connecting local services and businesses in Kimberley. Built with modern web technologies to digitize the township economy.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/mhl3ngiprince/kimConnect',
    featured: true
  },
  {
    title: 'Ctrl+Alt+Elite (Geekulcha Hackathon)',
    desc: 'Award-winning hackathon project placing Top 10. Built a community-based service and delivery platform for local spaza shops.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/mhl3ngiprince/Ctrl-Alt-Elite',
    featured: true
  },
  {
    title: 'Agrilink',
    desc: 'Digital marketplace connecting small-scale farmers to broader markets with React and Django technology.',
    tech: ['React', 'Django', 'Python', 'PostgreSQL'],
    github: 'https://github.com/mhl3ngiprince/Agrilink',
    featured: true
  },
  {
    title: 'Personal AI Mechanic (AWS)',
    desc: 'AI productivity app using Amazon Bedrock to predict vehicle maintenance from symptoms and mileage.',
    tech: ['AWS Bedrock', 'Generative AI', 'PartyRock'],
    github: 'https://github.com/mhl3ngiprince?tab=repositories',
    featured: true
  },
  {
    title: 'MediGrid',
    desc: 'Healthcare management system for efficient health records and appointment scheduling.',
    tech: ['Kotlin', 'Android', 'Firebase'],
    github: 'https://github.com/mhl3ngiprince/MediGrid',
    featured: false
  },
  {
    title: 'EzaseSpaza',
    desc: 'Mobile app for township spaza shop management and digital transformation.',
    tech: ['Kotlin', 'Android', 'SQLite'],
    github: 'https://github.com/mhl3ngiprince/EzaseSpaza',
    featured: false
  }
]

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured)
  const sideProjects = projects.filter((project) => !project.featured)

  return (
    <div>
      <h2 className="section-title fade-in">Featured Projects</h2>
      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <article key={project.title} className="project-card glass-card fade-in" aria-labelledby={`${project.title}-title`}>
            <div className="project-header">
              <h3 id={`${project.title}-title`}>{project.title}</h3>
              <span className="featured-badge">⭐ Featured</span>
            </div>
            <p className="project-description">{project.desc}</p>
            <div className="project-tech" aria-label="Tech stack">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer noopener" className="btn btn-ghost project-btn">
                <span>View Code</span> <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="other-projects fade-in">
        <h3>Other Projects</h3>
        <div className="projects-list">
          {sideProjects.map((project) => (
            <article key={project.title} className="glass-card project-item">
              <h4>{project.title}</h4>
              <p className="muted">{project.desc}</p>
              <div className="project-tech-small" aria-label="Project tech stack">
                {project.tech.slice(0, 3).map((tech) => (
                  <span key={tech} className="tech-tag-small">{tech}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer noopener" className="project-link-small">
                View →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
