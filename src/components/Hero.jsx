import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

function Hero({ title, subtitle, ctaText, ctaLink, backgroundImage }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
            <div className="hero-actions">
              <Link to={ctaLink} className="btn btn-primary btn-large">
                {ctaText}
              </Link>
              <Link to="/courses" className="btn btn-outline">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;