/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../styles/Footer.css';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo-3.png'

const Footer = () => {
  return (
    <>

      <footer className="footer">
        {/* Left Section: Map */}
        <div className="footer__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.256288683889!2d77.6820050749682!3d8.73489809163125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04258ff47a1a55%3A0x6d9e95caa7c9f657!2sInfosmite%2C%20Kailash%20Nagar%2C%20Vannarpettai%2C%20Tirunelveli%2C%20Tamil%20Nadu%20627008!5e0!3m2!1sen!2sin!4v1696070006127!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: "0", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            title="Infosmite Office Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="footer__social">
          <h4>Connect with Us</h4>
          <div className="social-icons">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="mailto:info@example.com"><FaEnvelope /></a>
          </div>
          <img className="footer-logo" src={logo} alt="logo" />
        </div>
      </footer>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Infosmite. All rights reserved. || Designed and Developed by <span>Yalizen PVT.LTD.</span></p>
      </div>
    </>
  );
};

export default Footer;
