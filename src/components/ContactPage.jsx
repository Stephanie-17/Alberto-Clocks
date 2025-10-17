import React, { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    // <div className="contact-page">
    //   <div className="contact-container">
    //     <div className="contact-header">
    //       <h1>Get in Touch</h1>
    //       <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
    //     </div>

    //     <div className="contact-content">
    //       <div className="contact-info">
    //         <div className="info-block">
    //           <h3>Email</h3>
    //           <p><a href="mailto:hello@example.com">hello@example.com</a></p>
    //         </div>
    //         <div className="info-block">
    //           <h3>Phone</h3>
    //           <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
    //         </div>
    //         <div className="info-block">
    //           <h3>Address</h3>
    //           <p>123 Main Street<br />New York, NY 10001<br />United States</p>
    //         </div>
    //         <div className="info-block">
    //           <h3>Hours</h3>
    //           <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
    //         </div>
    //       </div>

    //       <form className="contact-form" onSubmit={handleSubmit}>
    //         {submitted && <div className="success-message">Thank you! We'll get back to you soon.</div>}
            
    //         <div className="form-group">
    //           <label htmlFor="name">Name</label>
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             value={formData.name}
    //             onChange={handleChange}
    //             required
    //             placeholder="Your name"
    //           />
    //         </div>

    //         <div className="form-group">
    //           <label htmlFor="email">Email</label>
    //           <input
    //             type="email"
    //             id="email"
    //             name="email"
    //             value={formData.email}
    //             onChange={handleChange}
    //             required
    //             placeholder="your@email.com"
    //           />
    //         </div>

    //         <div className="form-group">
    //           <label htmlFor="subject">Subject</label>
    //           <input
    //             type="text"
    //             id="subject"
    //             name="subject"
    //             value={formData.subject}
    //             onChange={handleChange}
    //             required
    //             placeholder="How can we help?"
    //           />
    //         </div>

    //         <div className="form-group">
    //           <label htmlFor="message">Message</label>
    //           <textarea
    //             id="message"
    //             name="message"
    //             value={formData.message}
    //             onChange={handleChange}
    //             required
    //             placeholder="Your message here..."
    //           ></textarea>
    //         </div>

    //         <button type="submit" className="submit-btn">Send Message</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>

    <section id="contact-us" class="contact-section">
  <div class="contact-container">
    <h2 class="contact-title">Contact Us</h2>
    <p class="contact-intro">
      We’re always happy to hear from you — whether it’s about a service, a product inquiry, or a custom request.
    </p>

    <div class="contact-details">
      <p><strong>Email:</strong> support@albertowatch.com</p>
      <p><strong>Phone:</strong> +1 (212) 555-0198</p>
      <p><strong>Address:</strong> 125 Madison Avenue, New York, NY 10016</p>
      <p><strong>Business Hours:</strong> Monday – Saturday | 9:00 AM – 6:00 PM</p>
    </div>

    <p class="contact-form-note">
      Or, send us a message directly through our <strong>Contact Form</strong> — our team will respond within 24 hours.
    </p>
  </div>
</section>
  );
}