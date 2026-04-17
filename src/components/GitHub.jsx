import React from 'react'

const GitHub = () => {
  const repos = [
    { name: 'kimConnect', description: 'Community platform for Kimberley services', language: 'HTML', stars: '12', updated: '2 weeks ago' },
    { name: 'FUTURE_FS_01', description: 'Full Stack Web Development Internship', language: 'JavaScript', stars: '8', updated: '3 weeks ago' },
    { name: 'HexSoftwares_Project_MhlengiePrinceNgwenya', description: 'Java OOP Projects Portfolio', language: 'Java', stars: '15', updated: '3 weeks ago' },
    { name: 'circuit-breakers', description: 'ML Training Programs & Workshops', language: 'TypeScript', stars: '6', updated: 'Feb 25' },
    { name: 'Ctrl-Alt-Elite', description: 'Geekulcha Hackathon Winner Project', language: 'HTML', stars: '22', updated: 'Sep 28, 2025' },
    { name: 'Agrilink', description: 'Digital Agricultural Marketplace', language: 'Python', stars: '18', updated: 'Oct 18, 2025' }
  ]

  return (
    <div className="glass-card fade-in">
      <h2 className="section-title fade-in">Source Code on GitHub</h2>
      <p className="muted github-intro">
        All my projects are open source and available on GitHub. Feel free to explore, contribute, or use them as inspiration for your own projects.
      </p>

      <div className="github-stats">
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

      <div className="repos-grid">
        {repos.map((repo, idx) => (
          <div key={idx} className="repo-card">
            <div className="repo-header">
              <h3 className="repo-name">
                <a href={`https://github.com/mhl3ngiprince/${repo.name}`} target="_blank" rel="noreferrer">
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
          </div>
        ))}
      </div>

      <div className="github-cta">
        <a href="https://github.com/mhl3ngiprince" target="_blank" rel="noreferrer" className="btn btn-primary">
          View All Repositories →
        </a>
      </div>
    </div>
  )
}

export default GitHub