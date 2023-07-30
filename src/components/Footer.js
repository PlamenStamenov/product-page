import React from 'react';
import '../styles/Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <a href="/terms-and-conditions">T&C</a>
      <a href="/privacy-policy">Privacy Policy</a>
      <a href="/contact-us">Contact Us</a>
    </footer>
  );
}

export default Footer;