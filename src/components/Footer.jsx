import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaRocket
} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/courses', label: 'Courses' },
    { to: '/blog', label: 'Blog' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact' },
  ];

  const courseCategories = [
    { label: 'Web Development' },
    { label: 'Data Science' },
    { label: 'Mobile Development' },
    { label: 'DevOps & Cloud' },
    { label: 'UI/UX Design' },
    { label: 'Cybersecurity' },
  ];

  const socialLinks = [
    {
      platform: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/curiositytechpark?igsh=ODUyb2dwcHQ5NG0x',
      className: 'instagram'
    },
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/company/curiosity-tech/posts/?feedView=all',
      className: 'linkedin'
    },
    {
      platform: 'GitHub',
      icon: <FaGithub />,
      url: '#',
      className: 'github'
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* ---------- BRAND ---------- */}
          <div className="footer-section">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">
                  <FaRocket />
                </span>
                <span className="logo-text">Curiosity Tech</span>
              </div>

              <p className="footer-description">
                Empowering the next generation of technology innovators through hands-on learning and expert-led courses.
              </p>
            </div>

            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className={`social-link ${social.className}`}
                  aria-label={social.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ---------- QUICK LINKS ---------- */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- CATEGORIES ---------- */}
          <div className="footer-section">
            <h3 className="footer-heading">Course Categories</h3>
            <ul className="footer-links">
              {courseCategories.map((category) => (
                <li key={category.label}>
                  <span className="footer-link">{category.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- CONTACT ---------- */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Info</h3>

            <div className="contact-info">
              <p className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:contact@curiositytech.com">
                  contact@curiositytech.com
                </a>
              </p>

              <p className="contact-item">
                <FaPhone className="contact-icon phone-inverse" />
                <span>+91-9860555369</span>
              </p>

              <p className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                  1st Floor, Plot No 81, Wardha Rd, Gajanan Nagar, Nagpur.
                </span>
              </p>
            </div>
          </div>

        </div>

        {/* ---------- BOTTOM ---------- */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} Curiosity Tech. All rights reserved.
          </div>

          <div className="footer-legal">
            <Link to="/privacy" className="legal-link">Privacy Policy</Link>
            <Link to="/terms" className="legal-link">Terms of Service</Link>
            <Link to="/cookies" className="legal-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;