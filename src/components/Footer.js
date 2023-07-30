import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import '../styles/Footer.scss';

function Footer() {
    return (
        <footer className="Footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <img src="your-logo-url" alt="logo" />
                    <p>Your Company Tagline</p>
                </div>
                
                <div className="footer-links">
                    <h4>About Us</h4>
                    <div className="links">
                        <a href="/terms-and-conditions">Terms & Conditions</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/contact-us">Contact Us</a>
                    </div>
                </div>
                
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p><strong>Email:</strong> info@yourcompany.com</p>
                    <p><strong>Phone:</strong> (123) 456-7890</p>
                    <p><strong>Address:</strong> 123 Your Street, Your City, Your Country</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">© {new Date().getFullYear()} Your Company Name. All rights reserved.</div>
                <div className="social-icons">
                    <a href="https://www.facebook.com/your-facebook-url"><FaFacebookF /></a>
                    <a href="https://twitter.com/your-twitter-url"><FaTwitter /></a>
                    <a href="https://www.instagram.com/your-instagram-url"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/your-linkedin-url"><FaLinkedinIn /></a>
                    <a href="https://www.youtube.com/your-youtube-url"><FaYoutube /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
