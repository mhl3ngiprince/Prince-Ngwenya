import React from 'react'

const repos = [
  { name: 'kimConnect', description: 'Community platform for Kimberley services', language: 'HTML', stars: '12', updated: '2 weeks ago' },
  { name: 'FUTURE_FS_01', description: 'Full Stack Web Development Internship', language: 'JavaScript', stars: '8', updated: '3 weeks ago' },
  { name: 'HexSoftwares_Project_MhlengiePrinceNgwenya', description: 'Java OOP Projects Portfolio', language: 'Java', stars: '15', updated: '3 weeks ago' },
  { name: 'circuit-breakers', description: 'ML Training Programs & Workshops', language: 'TypeScript', stars: '6', updated: 'Feb 25' },
  { name: 'Ctrl-Alt-Elite', description: 'Geekulcha Hackathon Winner Project', language: 'HTML', stars: '22', updated: 'Sep 28, 2025' },
  { name: 'Agrilink', description: 'Digital Agricultural Marketplace', language: 'Python', stars: '18', updated: 'Oct 18, 2025' }
]

const GitHub = () => {
  return (
    <div className="glass-card fade-in" aria-labelledby="github-heading">
      <h2 id="github-heading" className="section-title fade-in">Source Code on GitHub</h2>
      <p className="muted github-intro fade-in">
        All my projects are open source and available on GitHub. Explore repositories that showcase my work in web development, AI, and software engineering.
      </p>

      <div className="github-stats stats-grid fade-in" aria-label="GitHub activity overview">
        <div className="stat-box">
          <span className="stat-number">15+</span>
          <span className="stat-label">Repositories</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">100+</span>
          <span className="stat-label">Commits</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">50+</span>
          <span className="stat-label">Stars</span>
        </div>
        <div className="stat-box">
          <span className="stat-number">AWS</span>
          <span className="stat-label">AI Scholar</span>
        </div>
      </div>

      <div className="repos-grid fade-in" aria-label="Featured GitHub repositories">
        {repos.map((repo) => (
          <article key={repo.name} className="glass-card repo-card" aria-labelledby={`repo-${repo.name}`}>
            <div className="repo-header">
              <h3 id={`repo-${repo.name}`} className="repo-name">
                <a href={`https://github.com/mhl3ngiprince/${repo.name}`} target="_blank" rel="noreferrer noopener">
                  {repo.name}
                </a>
              </h3>
              <span className="repo-language">{repo.language}</span>
            </div>
            <p className="repo-description">{repo.description}</p>
            <div className="repo-footer">
              <span className="repo-stars">⭐ {repo.stars}</span>
              <span className="repo-updated">Updated {repo.updated}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="github-cta fade-in">
        <a href="https://github.com/mhl3ngiprince" target="_blank" rel="noreferrer noopener" className="btn btn-primary">
          View All Repositories →
        </a>
      </div>
    </div>
  )
}

export default GitHub
