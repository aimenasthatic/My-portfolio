import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="fade-up " data-aos="fade-up">Contact Me</h2>
      <form data-aos="fade-in" className="contact-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Subject" />
        <input type="tel" placeholder="Phone Number" />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
