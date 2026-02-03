import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitError('')

    // EmailJS configuration
    // Replace these with your EmailJS credentials
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'alikalkidan0088@gmail.com', // Your email address
    }

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setIsSubmitting(false)
      setSubmitError('Failed to send message. Please try again or contact me directly via email.')
      setTimeout(() => setSubmitError(''), 5000)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alikalkidan0088@gmail.com',
      href: 'mailto:alikalkidan0088@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '09-86-47-01-89',
      href: 'tel:+251986470189',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Addis Ababa, Ethiopia',
      href: null,
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent to-cyan-400 mx-auto"></div>
        <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your visions.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-slate-200 mb-6">Contact Information</h3>
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 glass p-4 rounded-lg group"
              >
                <div className="p-3 glass rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-slate-200 hover:text-accent transition-colors font-medium"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-slate-200 font-medium">{info.value}</p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="glass p-8 rounded-xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-slate-700 focus:border-accent focus:ring-accent'
                } text-slate-200`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-slate-700 focus:border-accent focus:ring-accent'
                } text-slate-200`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-slate-700 focus:border-accent focus:ring-accent'
                } text-slate-200`}
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm"
              >
                <AlertCircle size={18} />
                <span>{submitError}</span>
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitted ? (
                <>
                  <CheckCircle size={20} />
                  Message Sent!
                </>
              ) : isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact


