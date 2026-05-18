import React from 'react'

const items = [
  {
    icon: '🎓',
    company: 'Sol Plaatje University',
    role: 'ICT Diploma Student',
    period: 'Feb 2024 — Present',
    current: true,
    desc: 'Pursuing a comprehensive diploma in Information and Communication Technology, specializing in networking protocols, modern web development frameworks, and system administration.',
    highlights: ['Networking', 'Web Development', 'System Administration']
  },
  {
    icon: '💡',
    company: 'Circuit Breakers',
    role: 'Training Coordinator',
    period: 'Aug 2024 — Present',
    current: true,
    desc: 'Lead technical training initiatives, develop training materials, and facilitate workshops on ICT infrastructure and emerging technologies.',
    highlights: ['Training', 'Mentorship', 'Content Creation']
  },
  {
    icon: '⚙️',
    company: 'Hout Bay Yacht Club',
    role: 'Maintenance Technician',
    period: 'Past',
    current: false,
    desc: 'Gained hands-on experience in technical maintenance and troubleshooting, working on complex vessel systems and mechanical equipment.',
    highlights: ['Problem Solving', 'Reliability', 'Technical Support']
  }
]

const Experience = () => {
  return (
    <div>
      <h2 className="section-title fade-in">Experience & Education</h2>
      <div className="experience-timeline">
        {items.map((item, index) => (
          <article
            key={item.role}
            className={`experience-card glass-card fade-in ${item.current ? 'current' : 'past'}`}
            style={{ animationDelay: `${index * 0.18}s` }}
            aria-label={`${item.role} at ${item.company}`}
          >
            <div className="experience-marker">
              <span className="experience-icon" aria-hidden="true">{item.icon}</span>
              {item.current && <span className="experience-badge">Current</span>}
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-role">{item.role}</h3>
                <span className="experience-company">@ {item.company}</span>
              </div>
              <p className="experience-period">{item.period}</p>
              <p className="experience-desc">{item.desc}</p>
              <div className="experience-skills" aria-label="Key strengths">
                {item.highlights.map((skill) => (
                  <span key={skill} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Experience
