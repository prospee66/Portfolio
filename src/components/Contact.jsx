import { useState } from 'react'

const initialForm = { name: '', email: '', subject: '', message: '' }

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function Contact() {
  const [form, setForm]         = useState(initialForm)
  const [errors, setErrors]     = useState({})
  const [loading, setLoading]   = useState(false)
  const [success, setSuccess]   = useState(false)
  const [submitError, setSubmitError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  function validate() {
    const newErrors = {}
    if (!form.name.trim())                           newErrors.name    = 'Please enter your name'
    if (!form.email.trim() || !isValidEmail(form.email)) newErrors.email = 'Please enter a valid email'
    if (!form.message.trim())                        newErrors.message = 'Please enter your message'
    return newErrors
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    setSubmitError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '149b167d-5656-4cae-9a29-3fee753a35f6',
          name: form.name,
          email: form.email,
          subject: form.subject || 'Portfolio Contact',
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSuccess(true)
        setForm(initialForm)
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setSubmitError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section wrapper" id="contact">
      <div className="top-header">
        <h1>Contact Me</h1>
      </div>

      <div className="row">
        {/* Contact Info */}
        <div className="col">
          <div className="contact-info">
            <h2>Find Me</h2>
            <p>
              <i className="uil uil-envelope"></i>
              oppongprosper71@gmail.com
            </p>
            <p>
              <i className="uil uil-phone"></i>
              +233 531 718 212
            </p>
            <p>
              <i className="uil uil-map-marker"></i>
              Accra, Ghana
            </p>
            <p>
              <i className="uil uil-globe"></i>
              Available for freelance work
            </p>

            <div className="contact-social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-social-btn github">
                <i className="uil uil-github-alt"></i> GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-social-btn linkedin">
                <i className="uil uil-linkedin-alt"></i> LinkedIn
              </a>
              <a href="https://whatsapp.com/dl/" target="_blank" rel="noreferrer" className="contact-social-btn whatsapp">
                <i className="uil uil-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col">
          <form className="form-control" onSubmit={handleSubmit} noValidate>
            <div className="form-input">
              <div style={{ width: '100%' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={`input-field${errors.name ? ' error' : ''}`}
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <small className="error-message">{errors.name}</small>}
              </div>
              <div style={{ width: '100%' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={`input-field${errors.email ? ' error' : ''}`}
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <small className="error-message">{errors.email}</small>}
              </div>
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input-subject"
              value={form.subject}
              onChange={handleChange}
            />

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                className={errors.message ? 'error' : ''}
                value={form.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <small className="error-message">{errors.message}</small>}
            </div>

            <div className="form-button">
              <button
                type="submit"
                className={`btn${loading ? ' loading' : ''}`}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <i className="uil uil-message"></i>}
              </button>
            </div>

            {success && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitError && (
              <div className="error-message" style={{ marginTop: '0.75rem' }}>
                {submitError}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
