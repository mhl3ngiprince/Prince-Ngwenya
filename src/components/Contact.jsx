import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY');
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending')
    
    try {
      await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
      setStatus('success')
      setFeedback('✓ Message sent successfully! I\'ll get back to you soon.')
      e.target.reset();
      setTimeout(() => setStatus('idle'), 4000)
    } catch (error) {
      setStatus('idle')
      setFeedback('Failed to send. Please email: mhlengip269@gmail.com')
      console.error(error);
    }
  };

  const contacts = [
    { icon: '✉️', label: 'Email', value: 'mhlengip269@gmail.com', href: 'mailto:mhlengip269@gmail.com' },
    { icon: '🐙', label: 'GitHub', value: '@mhl3ngiprince', href: 'https://github.com/mhl3ngiprince' },
    { icon: '💼', label: 'LinkedIn', value: 'Mhlengie Prince', href: 'https://www.linkedin.com/in/mhlengie-prince-ngwenya-728878268/' },
    { icon: '🌐', label: 'Portfolio', value: 'mhl3ngiprince.github.io', href: 'https://mhl3ngiprince.github.io/Prince-Ngwenya/' }
  ]

  return (
    <div className="glass-card fade-in">
      <h2 className="section-title fade-in">Let's Connect</h2>
      <p className="muted">Interested in collaborating or discussing opportunities? I'd love to hear from you.</p>
      
      <form style={{marginTop: '2rem'}} id="contact-form" onSubmit={sendEmail}>
        <div style={{display: 'grid', gap: '1rem'}}>
          <div className="form-group">
            <label htmlFor="user_name" style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500}}>Name</label>
            <input 
              id="user_name"
              name="user_name" 
              placeholder="Your full name" 
              className="form-input"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_email" style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500}}>Email</label>
            <input 
              id="user_email"
              name="user_email" 
              type="email" 
              placeholder="your@email.com" 
              className="form-input"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" style={{display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500}}>Message</label>
            <textarea 
              id="message"
              name="message" 
              rows="5" 
              placeholder="Tell me about your project or opportunity..." 
              className="form-input"
              required 
            />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary" 
            style={{justifySelf: 'start', opacity: status === 'sending' ? 0.7 : 1}}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {feedback && (
            <p style={{
              marginTop: '0.5rem',
              fontSize: '0.9rem',
              color: status === 'success' ? '#90EE90' : '#FFB6C6'
            }}>
              {feedback}
            </p>
          )}
        </div>
      </form>

      <div style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-strong)'}}>
        <h3 style={{marginBottom: '1rem', fontSize: '1rem', fontWeight: 600}}>Or reach out directly:</h3>
        <div className="contact-grid">
          {contacts.map((contact, idx) => (
            <a 
              key={idx}
              href={contact.href}
              target="_blank" 
              rel="noreferrer noopener" 
              className="contact-link"
              aria-label={`Connect via ${contact.label}`}
            >
              <span className="contact-icon">{contact.icon}</span>
              <div>
                <div className="contact-label">{contact.label}</div>
                <div className="contact-value">{contact.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
