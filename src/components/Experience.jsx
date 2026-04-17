import React from 'react'

const Experience = () => {
  const items = [
    { 
      icon: '🎓',
      company: 'Sol Plaatje University', 
      role: 'ICT Diploma Student', 
      period: 'Feb 2024 — Present', 
      current: true,
      desc: 'Pursuing a comprehensive diploma in Information and Communication Technology, specializing in networking protocols, modern web development frameworks, and system administration. Developing practical expertise in network architecture and enterprise ICT systems.',
      highlights: ['Networking', 'Web Dev', 'System Admin']
    },
    { 
      icon: '💡',
      company: 'Circuit Breakers', 
      role: 'Training Coordinator', 
      period: 'Aug 2024 — Present',
      current: true, 
      desc: 'Lead technical training initiatives, developing comprehensive training materials and facilitating advanced workshops on ICT infrastructure and cutting-edge technologies. Mentor students in machine learning and emerging tech trends.',
      highlights: ['Training', 'ML Mentoring', 'Content Creation']
    },
    { 
      icon: '⚙️',
      company: 'Hout Bay Yacht Club', 
      role: 'Maintenance Technician', 
      period: 'Past',
      current: false,
      desc: 'Gained valuable hands-on experience in technical maintenance and troubleshooting. Developed problem-solving skills through working on complex vessel systems and mechanical equipment.',
      highlights: ['Technical Skills', 'Problem Solving', 'Reliability']
    }
  ]

  return (
    <div>
      <h2 className="section-title fade-in">Experience & Education</h2>
      <div className="experience-timeline">
        {items.map((it, i) => (
          <div key={i} className={`experience-card fade-in ${it.current ? 'current' : 'past'}`} style={{animationDelay: `${i * 0.2}s`}}>
            <div className="experience-marker">
              <span className="experience-icon">{it.icon}</span>
              {it.current && <span className="experience-badge">Current</span>}
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="experience-role">{it.role}</h3>
                <span className="experience-company">@ {it.company}</span>
              </div>
              <p className="experience-period">{it.period}</p>
              <p className="experience-desc">{it.desc}</p>
              <div className="experience-skills">
                {it.highlights.map((skill, idx) => (
                  <span key={idx} className="skill-chip">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
