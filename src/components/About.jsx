import React from 'react'

const About = () => {
  return (
    <div className="glass-card fade-in">
      <h2 className="section-title fade-in">About</h2>
      <div className="about-content">
        <p className="muted about-description">
          A dynamic 3rd-year Information and Communication Technology (ICT) student at Sol Plaatje University (SPU) with a passion for leveraging technology to solve local challenges. Combining technical expertise in Java, Python, and Full-Stack development with leadership in university sports and cultural promotion, I aim to bridge the gap between digital innovation and community impact.
        </p>

        <div className="about-grid">
          <div className="about-section">
            <h3>🎓 Education</h3>
            <div className="education-item">
              <strong>Diploma in Information Communication Technology</strong>
              <p className="muted">Sol Plaatje University (Feb 2024 - Nov 2026)</p>
              <p className="muted">Activities: Cricket, Training Coordinator at Circuit Breakers for Machine Learning</p>
            </div>
            <div className="education-item">
              <strong>Grade 12 - Physical Sciences, Life Science, Geography, Mathematics</strong>
              <p className="muted">Borakanelo Secondary School (2018 - 2022)</p>
              <p className="muted">Activities: Cricket</p>
            </div>
          </div>

          <div className="about-section">
            <h3>💼 Experience</h3>
            <div className="experience-item">
              <strong>Training Coordinator</strong>
              <p className="muted">Circuit Breakers (Aug 2024 - Present)</p>
              <p className="muted">Coordinate training programs, develop technical training materials, and facilitate workshops on ICT infrastructure and emerging technologies.</p>
            </div>
            <div className="experience-item">
              <strong>Student - ICT Diploma</strong>
              <p className="muted">Sol Plaatje University (Feb 2024 - Present)</p>
              <p className="muted">Pursuing diploma focusing on networking protocols, web development frameworks, and system administration.</p>
            </div>
            <div className="experience-item">
              <strong>Cricket Player</strong>
              <p className="muted">Sol Plaatje University Cricket Squad (Feb 2024 - Present)</p>
              <p className="muted">Active player and promotional lead for the university team.</p>
            </div>
          </div>

          <div className="about-section">
            <h3>🏆 Certifications & Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Technical Skills</h4>
                <div className="skill-tags">
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Django</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">HTML/CSS</span>
                  <span className="skill-tag">MATLAB</span>
                  <span className="skill-tag">LAN/WAN</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>AI & ML</h4>
                <div className="skill-tags">
                  <span className="skill-tag">AWS AI & ML</span>
                  <span className="skill-tag">Generative AI</span>
                  <span className="skill-tag">Machine Learning</span>
                  <span className="skill-tag">Data Analysis</span>
                </div>
              </div>

              <div className="skill-category">
                <h4>Certifications</h4>
                <div className="certifications-list">
                  <div className="cert-item">AWS AI & ML Scholars (Udacity)</div>
                  <div className="cert-item">Cisco Network Technician Career Path</div>
                  <div className="cert-item">Python 101 for Data Science (CognitiveClass)</div>
                  <div className="cert-item">Data Science 101 (CognitiveClass)</div>
                  <div className="cert-item">MATLAB Onramp (MathWorks)</div>
                  <div className="cert-item">Introduction to IoT (Cisco)</div>
                  <div className="cert-item">And 10+ more certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-footer">
          <h3>🎯 Current Focus</h3>
          <p className="muted">
            Currently working on Full Stack Web Development Internship with Future Interns, diving deep into modern web technologies while maintaining active involvement in cricket and cultural leadership at SPU.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
