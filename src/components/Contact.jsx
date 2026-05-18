import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
  const emailConfigured = Boolean(publicKey && serviceId && templateId)

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [publicKey])

  const validate = () => {
    const nextErrors = {}
    if (!formData.user_name.trim()) nextErrors.user_name = 'Please enter your name.'
    if (!formData.user_email.trim()) {
      nextErrors.user_email = 'Please enter an email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      nextErrors.user_email = 'Please enter a valid email address.'
    }
    if (!formData.message.trim()) nextErrors.message = 'Please enter a message.'
    return nextErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const sendEmail = async (e) => {
    e.preventDefault()

    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      setFeedback('Please fix the highlighted fields before submitting.')
      setStatus('error')
      return
    }

    if (!emailConfigured) {
      setStatus('error')
      setFeedback('Email service is not set up yet. Please reach out directly at mhlengip269@gmail.com.')
      return
    }

    setStatus('sending')
    setFeedback('')

    try {
      await emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      setStatus('success')
      setFeedback("Message sent successfully! I'll get back to you soon.")
      setFormData({ user_name: '', user_email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (error) {
      console.error(error)
      setStatus('error')
      setFeedback('Failed to send. Please email: mhlengip269@gmail.com')
    }
  }

  const contacts = [
    { icon: '✉️', label: 'Email', value: 'mhlengip269@gmail.com', href: 'mailto:mhlengip269@gmail.com' },
    { icon: '🐙', label: 'GitHub', value: '@mhl3ngiprince', href: 'https://github.com/mhl3ngiprince' },
    { icon: '💼', label: 'LinkedIn', value: 'Mhlengie Prince', href: 'https://www.linkedin.com/in/mhlengie-prince-ngwenya-728878268/' },
    { icon: '🌐', label: 'Portfolio', value: 'mhl3ngiprince.github.io', href: 'https://mhl3ngiprince.github.io/Prince-Ngwenya/' }
  ]

  return (
    <div className="glass-card fade-in" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-title fade-in">Let's Connect</h2>
      <p className="muted fade-in">Interested in collaborating or discussing opportunities? I'd love to hear from you.</p>

      <form id="contact-form" className="contact-form" onSubmit={sendEmail} noValidate>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your full name"
              className="form-input"
              aria-describedby="user_name_error"
              aria-invalid={Boolean(errors.user_name)}
              required
            />
            {errors.user_name && <p id="user_name_error" className="error-text">{errors.user_name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="form-input"
              aria-describedby="user_email_error"
              aria-invalid={Boolean(errors.user_email)}
              required
            />
            {errors.user_email && <p id="user_email_error" className="error-text">{errors.user_email}</p>}
          </div>

          <div className="form-group form-group-full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              className="form-input"
              aria-describedby="message_error"
              aria-invalid={Boolean(errors.message)}
              required
            />
            {errors.message && <p id="message_error" className="error-text">{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {feedback && (
          <p className={`status-message ${status === 'success' ? 'success' : 'error'}`} role="status" aria-live="polite">
            {feedback}
          </p>
        )}
      </form>

      <div className="contact-direct fade-in">
        <h3>Or reach out directly:</h3>
        <div className="contact-grid">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noreferrer noopener"
              className="contact-link"
              aria-label={`Connect via ${contact.label}`}
            >
              <span className="contact-icon" aria-hidden="true">{contact.icon}</span>
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
