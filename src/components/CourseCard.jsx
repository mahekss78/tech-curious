import React, { useState } from 'react';
import '../styles/CourseCard.css';
import {
  FaBookmark, FaCertificate, FaVideo, FaFire,
  FaDesktop, FaChartLine, FaMobileAlt, FaDatabase,
  FaShieldAlt, FaRobot, FaCloud, FaLayerGroup,
  FaBookOpen, FaLanguage, FaArrowRight, FaEye
} from 'react-icons/fa';

function CourseCard({
  id,
  title,
  description,
  category,
  lectures = 0,
  imageUrl,
  certificate = false,
  isFeatured = false,
  isTrending = false,
  tags = []
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Get category icon
  const getCategoryIcon = (cat) => {
    const icons = {
      'Web Development': <FaDesktop />,
      'Data Science': <FaChartLine />,
      'Mobile Development': <FaMobileAlt />,
      'Programming': <FaLanguage />,
      'Database': <FaDatabase />,
      'Security': <FaShieldAlt />,
      'AI & ML': <FaRobot />,
      'Cloud': <FaCloud />,
      'Design': <FaLayerGroup />,
      'default': <FaBookOpen />
    };
    return icons[cat] || icons.default;
  };

  // Get category color
  const getCategoryColor = () => {
    const colors = {
      'Web Development': '#6C63FF', // Bright Purple
      'Data Science': '#7B68EE',    // Medium Purple
      'Mobile Development': '#6C63FF',
      'Programming': '#7B68EE',
      'Database': '#6C63FF',
      'Security': '#7B68EE',
      'AI & ML': '#6C63FF',
      'Cloud': '#7B68EE',
      'Design': '#6C63FF',
      'default': '#6C63FF'
    };
    return colors[category] || colors.default;
  };

  const categoryColor = getCategoryColor();
  const CategoryIcon = getCategoryIcon(category);

  const handleBookmark = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsBookmarked(!isBookmarked);
  };

  const handleViewDetails = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Add click animation
    const button = e.currentTarget;
    button.classList.add('clicked');
    setTimeout(() => {
      button.classList.remove('clicked');
      // Redirect to NotFound page
      window.location.href = '/not-found';
    }, 300);
  };

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleCardClick = () => {
    // Optional: Add click to flip on mobile
    if (window.innerWidth <= 768) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className={`course-card ${isFlipped ? 'flipped' : ''} ${isFeatured ? 'featured' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{ '--category-color': categoryColor }}
    >
      <div className="card-inner">
        {/* FRONT SIDE - Minimal Info */}
        <div className="card-front">
          {/* Bookmark Button - Left Side */}
          <button 
            className={`bookmark-btn ${isBookmarked ? 'bookmarked' : ''}`}
            onClick={handleBookmark}
            aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark course'}
          >
            <FaBookmark />
          </button>

          {/* Featured & Trending Badges */}
          <div className="card-badges">
            {isFeatured && (
              <span className="badge badge-featured">
                <FaCertificate /> Featured
              </span>
            )}
            {isTrending && (
              <span className="badge badge-trending">
                <FaFire /> Trending
              </span>
            )}
          </div>

          {/* Category Badge */}
          <div className="category-badge">
            {CategoryIcon}
            <span>{category}</span>
          </div>

          {/* Course Image */}
          <div 
            className="course-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="image-overlay"></div>
          </div>

          {/* Front Side Content */}
          <div className="front-content">
            <h3 className="course-title">{title}</h3>
            
            {/* Quick Info */}
            <div className="quick-info">
              {lectures > 0 && (
                <div className="info-item">
                  <FaVideo />
                  <span>{lectures} Lessons</span>
                </div>
              )}
              {certificate && (
                <div className="info-item">
                  <FaCertificate />
                  <span>Certificate</span>
                </div>
              )}
            </div>

            {/* Short Description */}
            <p className="short-description">
              {description.length > 80 ? `${description.substring(0, 80)}...` : description}
            </p>

            {/* Hover Hint */}
            <div className="hover-hint">
              <FaEye />
              <span>Hover for details</span>
            </div>
          </div>
        </div>

        {/* BACK SIDE - Full Details */}
        <div className="card-back">
          {/* Back Header */}
          <div className="back-header">
            <h3 className="back-title">{title}</h3>
            <div className="back-category">
              {CategoryIcon}
              <span>{category}</span>
            </div>
          </div>

          {/* Full Description */}
          <div className="full-description">
            <h4>Course Description</h4>
            <p>{description}</p>
          </div>

          {/* Detailed Information */}
          <div className="detailed-info">
            <div className="info-section">
              <h4>Course Details</h4>
              <div className="details-grid">
                {lectures > 0 && (
                  <div className="detail-item">
                    <FaVideo />
                    <div>
                      <span className="detail-label">Total Lessons</span>
                      <span className="detail-value">{lectures}</span>
                    </div>
                  </div>
                )}
                {certificate && (
                  <div className="detail-item">
                    <FaCertificate />
                    <div>
                      <span className="detail-label">Certificate</span>
                      <span className="detail-value">Yes</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tags/Skills */}
            {tags.length > 0 && (
              <div className="tags-section">
                <h4>What You'll Learn</h4>
                <div className="tags-container">
                  {tags.slice(0, 5).map((tag, index) => (
                    <span key={index} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                  {tags.length > 5 && (
                    <span className="more-tags">+{tags.length - 5} more</span>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <div className="action-section">
            <button 
              onClick={handleViewDetails}
              className="view-details-btn"
            >
              <span>View Full Details</span>
              <FaArrowRight />
            </button>
          </div>

          {/* Flip Back Hint */}
          <div className="flip-hint">
            <span>Move away to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;