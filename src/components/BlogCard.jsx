import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogCard.css';
import { 
  FaCalendarAlt, FaClock, FaExpand, FaCompress, FaTags, FaEye, FaBookmark,
  FaChevronRight, FaChevronDown, FaShareAlt, FaCode, FaChartLine, FaServer,
  FaMobile, FaPalette, FaShieldAlt, FaRobot, FaLink, FaFileAlt, FaLaptopCode
} from 'react-icons/fa';

function BlogCard({ id, title, excerpt, content, category, date, readTime, imageUrl, tags = [], views = 0 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const contentRef = useRef(null);

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric'
  });

  const getCategoryColor = (cat) => {
    const colors = {
      'Web Development': '#2563eb',
      'Data Science': '#059669',
      'DevOps': '#7c3aed',
      'Mobile Development': '#dc2626',
      'Design': '#ea580c',
      'Security': '#0891b2',
      'AI & ML': '#db2777',
      'Blockchain': '#4f46e5',
      'default': '#4b5563'
    };
    return colors[cat] || colors.default;
  };

  const categoryColor = getCategoryColor(category);

  // Format content for HTML display
  const formatContent = (rawContent) => {
    if (!rawContent) return '';
    let formatted = rawContent
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br/>')
      .replace(/## (.*?)\n/g, '<h2>$1</h2>')
      .replace(/### (.*?)\n/g, '<h3>$1</h3>')
      .replace(/#### (.*?)\n/g, '<h4>$1</h4>')
      .replace(/\* (.*?)\n/g, '<li>$1</li>')
      .replace(/1\. (.*?)\n/g, '<li>$1</li>')
      .split('</p>')
      .map(section => !section.includes('<h') && !section.includes('<li') && !section.includes('<p>') ? `<p>${section}</p>` : section)
      .join('</p>');
    return formatted;
  };

  const formattedContent = formatContent(content);

  const toggleReadMore = () => {
    setIsExpanded(prev => !prev);
    if (!isExpanded && contentRef.current) {
      contentRef.current.scrollTop = 0; // scroll to top on expand
    }
  };

  const handleBookmark = (e) => {
    e.stopPropagation();
    setIsBookmarked(prev => !prev);
  };

  return (
    <article className={`blog-card ${isExpanded ? 'expanded' : ''}`} style={{ '--category-color': categoryColor }}>
      {/* Image & Category */}
      <div className="blog-image-container" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="blog-category-badge" style={{ backgroundColor: categoryColor }}>
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="blog-content-wrapper">
        {/* Meta */}
        <div className="blog-meta">
          <div className="meta-item"><FaCalendarAlt style={{ color: categoryColor }} /> {formattedDate}</div>
          <div className="meta-item"><FaClock style={{ color: categoryColor }} /> {readTime}</div>
          {views > 0 && <div className="meta-item"><FaEye style={{ color: categoryColor }} /> {views}</div>}
        </div>

        {/* Title */}
        <h3 className="blog-title">
          <Link to={`/blog/${id}`}>
            <span className="title-text">{title}</span>
            {/* <span className="title-underline" style={{ backgroundColor: categoryColor }}></span> */}
          </Link>
        </h3>

        {/* Excerpt (only if not expanded) */}
        {!isExpanded && (
          <p className="blog-excerpt">{excerpt}</p>
        )}

        {/* Full Content (only if expanded) */}
        {isExpanded && (
          <div className="blog-full-content" ref={contentRef} dangerouslySetInnerHTML={{ __html: formattedContent }} />
        )}

        {/* Read More / Show Less */}
        <button className="read-more-button" onClick={toggleReadMore} style={{ backgroundColor: categoryColor }}>
          {isExpanded ? <><FaCompress /> Show Less</> : <><FaExpand /> Read More</>}
        </button>

        {/* Bookmark */}
        <button className={`bookmark-button ${isBookmarked ? 'bookmarked' : ''}`} onClick={handleBookmark}>
          <FaBookmark />
        </button>
      </div>
    </article>
  );
}

export default BlogCard;
