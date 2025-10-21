import React from 'react';
import './ContactPage.css';

export default function ContactPage() {
  return (
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
      We'll try our best to get back to you within <strong>24 hours</strong>
    </p>
  </div>
</section>
  );
}