import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/aimen-iqbal-64b384303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://wa.me/yourwhatsappnumber"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
      <p>&copy; 2024 Aimen Iqbal</p>
    </footer>
  );
};

export default Footer;
