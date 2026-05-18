import React from 'react'

const aboutSections = [
  {
    title: '🎓 Education',
    items: [
      {
        heading: 'Diploma in Information Communication Technology',
        meta: 'Sol Plaatje University (Feb 2024 - Nov 2026)',
        details: 'Activities: Cricket, Training Coordinator at Circuit Breakers for Machine Learning'
      },
      {
        heading: 'Grade 12 - Physical Sciences, Life Science, Geography, Mathematics',
        meta: 'Borakanelo Secondary School (2018 - 2022)',
        details: 'Activities: Cricket'
      }
    ]
  },
  {
    title: '💼 Experience',
    items: [
      {
        heading: 'Training Coordinator',
        meta: 'Circuit Breakers (Aug 2024 - Present)',
        details: 'Coordinate training programs, develop technical training materials, and facilitate workshops on ICT infrastructure and emerging technologies.'
      },
      {
        heading: 'Student - ICT Diploma',
        meta: 'Sol Plaatje University (Feb 2024 - Present)',
        details: 'Pursuing diploma focusing on networking protocols, web development frameworks, and system administration.'
      },
      {
        heading: 'Cricket Player',
        meta: 'Sol Plaatje University Cricket Squad (Feb 2024 - Present)',
        details: 'Active player and promotional lead for the university team.'
      }
    ]
  },
  {
    title: '🏆 Skills & Certifications',
    items: [
      {
        heading: 'Technical Skills',
        meta: 'Core programming & tooling',
        details: 'Java, Python, React, Django, JavaScript, HTML/CSS, MATLAB, LAN/WAN'
      },
      {
        heading: 'AI & ML',
        meta: 'Emerging tech focus',
        details: 'AWS AI & ML, Generative AI, Machine Learning, Data Analysis'
      },
      {
        heading: 'Certifications',
        meta: 'Verified training',
        details: 'AWS AI & ML Scholars, Cisco Network Technician, Python 101, Data Science 101, MATLAB Onramp, Introduction to IoT'
      }
    ]
  }
]

const About = () => {
  return (
    <div className="glass-card fade-in" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-title fade-in">About</h2>

      <p className="muted about-description fade-in">
        A dynamic ICT student at Sol Plaatje University who blends software development, AI research, and community leadership to solve local challenges.
      </p>

      <div className="about-grid">
        {aboutSections.map((section) => (
          <article key={section.title} className="glass-card about-card fade-in" aria-labelledby={`${section.title}-heading`}>
            <h3 id={`${section.title}-heading`} className="about-card-title">{section.title}</h3>
            <div className="about-card-list">
              {section.items.map((item) => (
                <div key={item.heading} className="about-item">
                  <strong>{item.heading}</strong>
                  <p className="muted about-item-meta">{item.meta}</p>
                  <p className="muted about-item-details">{item.details}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="about-footer fade-in">
        <h3>🎯 Current Focus</h3>
        <p className="muted">
          Working on a Full Stack Web Development Internship with Future Interns, while staying active in cricket and cultural leadership at SPU.
        </p>
      </div>
    </div>
  )
}

export default About
