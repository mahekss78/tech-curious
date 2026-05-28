import React from 'react';
import '../styles/TestimonialCard.css';

function TestimonialCard({ name, role, company, content, rating, avatar }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="testimonial-text">"{content}"</p>
      </div>
      
      <div className="testimonial-rating">
        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
      </div>
      
      <div className="testimonial-author">
        <div className="author-avatar">
          {avatar ? (
            <img src={avatar} alt={name} />
          ) : (
            <div className="avatar-placeholder">{name.charAt(0)}</div>
          )}
        </div>
        <div className="author-info">
          <h4 className="author-name">{name}</h4>
          <p className="author-role">{role}</p>
          <p className="author-company">{company}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;