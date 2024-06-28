import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })


  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //clear form data
    setFormData({ name: '', email: '', message: '' })
    
    console.log('Form submitted:', formData)
  }

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><i className="fas fa-map-marker-alt"></i> 123 Coffee St, Coffee City, Indore 12345</p>
          <p><i className="fas fa-phone"></i> (+91) 9752329928</p>
          <p><i className="fas fa-envelope"></i> info@coffeeshop.com</p>
          <p><i className="fas fa-clock"></i> Mon-Fri: 7am-8pm, Sat-Sun: 8am-9pm</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}