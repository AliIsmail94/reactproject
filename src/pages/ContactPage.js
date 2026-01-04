import React from "react";
import "../styles/ContactPage.css";

function ContactPage() {
  return (
    <main className="page contact-page">

      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach us using the form below.</p>

      <form className="contact-form">
        <label>
          Email:
          <input type="email" required placeholder="Enter your email" />
        </label>

        <label>
          Phone Number:
          <input type="text" required placeholder="Enter your phone number" />
        </label>

        <label>
          Message:
          <textarea required placeholder="Write your message here"></textarea>
        </label>

        <button type="submit" className="btn-primary">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: support@neonpc.com</p>
        <p>Phone: +961 71 985 208</p>
      </div>

    </main>
  );
}

export default ContactPage;