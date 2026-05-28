import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaRocket, FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';
import '../styles/pages/NotFound.css';

function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  // Auto-redirect after 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const quickLinks = [
    { path: '/', icon: <FaHome />, label: 'Home', description: 'Go back to homepage' },
    { path: '/courses', icon: <FaRocket />, label: 'Courses', description: 'Browse our courses' },
    { path: '/blog', icon: <FaSearch />, label: 'Blog', description: 'Read our latest articles' },
    { path: '/contact', icon: <FaExclamationTriangle />, label: 'Contact', description: 'Get help from our team' },
  ];

  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          {/* Animated Error Code */}
          <div className="error-code">
            <span className="error-digit">4</span>
            <span className="error-digit">0</span>
            <span className="error-digit">4</span>
          </div>

          {/* Main Message */}
          <div className="error-message">
            <h1>Oops! Page Not Found</h1>
            <p>
              The page you're looking for seems to have taken a wrong turn. 
              It might have been moved, deleted, or never existed in the first place.
            </p>
          </div>

          {/* Visual Element */}
          <div className="error-visual">
            <div className="floating-astronaut">
              <div className="spaceship">
                <FaRocket className="spaceship-icon" />
              </div>
              <div className="astronaut">
                <div className="helmet"></div>
                <div className="body"></div>
              </div>
            </div>
            <div className="floating-stars">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`star star-${i + 1}`}>★</div>
              ))}
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="redirect-timer">
            <div className="timer-circle">
              <svg className="timer-svg" width="60" height="60">
                <circle
                  className="timer-circle-bg"
                  cx="30"
                  cy="30"
                  r="28"
                />
                <circle
                  className="timer-circle-progress"
                  cx="30"
                  cy="30"
                  r="28"
                  style={{
                    strokeDasharray: 176,
                    strokeDashoffset: 176 - (176 * countdown) / 10
                  }}
                />
              </svg>
              <span className="timer-text">{countdown}</span>
            </div>
            <p className="timer-message">
              Redirecting to homepage in <span className="timer-seconds">{countdown}</span> seconds...
            </p>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline btn-large"
            >
              <FaArrowLeft /> Go Back
            </button>
            <Link to="/" className="btn btn-primary btn-large">
              <FaHome /> Go to Homepage
            </Link>
          </div>

          {/* Quick Links Grid */}
          <div className="quick-links-section">
            <h3>Quick Navigation</h3>
            <p className="section-subtitle">Here are some helpful links to get you back on track</p>
            
            <div className="quick-links-grid">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="quick-link-card"
                >
                  <div className="quick-link-icon">{link.icon}</div>
                  <div className="quick-link-content">
                    <h4>{link.label}</h4>
                    <p>{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Search Suggestion */}
          <div className="search-suggestion">
            <h3>Can't find what you're looking for?</h3>
            <p>Try searching our site:</p>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search courses, articles, or topics..."
                className="search-input"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    navigate(`/search?q=${e.target.value}`);
                  }
                }}
              />
              <button className="search-button">
                <FaSearch />
              </button>
            </div>
          </div>

          {/* Error Details (Collapsible) */}
          <details className="error-details">
            <summary>Technical Details</summary>
            <div className="error-info">
              <p><strong>Error Code:</strong> 404 - Resource Not Found</p>
              <p><strong>Current URL:</strong> {window.location.href}</p>
              <p><strong>Timestamp:</strong> {new Date().toLocaleString()}</p>
              <p><strong>Browser:</strong> {navigator.userAgent}</p>
              <p className="support-note">
                If you believe this is an error, please contact our support team with these details.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default NotFound;