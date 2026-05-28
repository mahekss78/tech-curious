import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaClock, FaBook, FaComments, FaCertificate, FaSync, FaUserGraduate } from 'react-icons/fa';
import { courses } from '../data/courses';
import '../styles/pages/CourseDetail.css';

function CourseDetail() {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="course-not-found">
        <div className="container">
          <h1>Course Not Found</h1>
          <p>The course you're looking for doesn't exist.</p>
          <Link to="/courses" className="btn btn-primary">
            Browse All Courses
          </Link>
        </div>
      </div>
    );
  }

  const modules = [
    { title: "Introduction & Setup", duration: "2 hours" },
    { title: "Core Concepts", duration: "8 hours" },
    { title: "Advanced Topics", duration: "12 hours" },
    { title: "Project Development", duration: "16 hours" },
    { title: "Deployment & Testing", duration: "6 hours" },
  ];

  return (
    <div className="course-detail-page">
      {/* Course Header */}
      <div className="course-header" style={{ background: `linear-gradient(135deg, ${getColorByCategory(course.category)}, ${getColorByCategory(course.category, true)})` }}>
        <div className="container">
          <div className="course-header-content">
            <div className="course-badge">{course.category}</div>
            <h1>{course.title}</h1>
            <p className="course-subtitle">{course.description}</p>
            
            <div className="course-meta-info">
              <div className="meta-item">
                <span className="meta-label">Level</span>
                <span className="meta-value">{course.level}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{course.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Instructor</span>
                <span className="meta-value">{course.instructor}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Price</span>
                <span className="meta-value price">₹{course.price}</span>
              </div>
            </div>

            <div className="course-actions">
              <button className="btn btn-primary btn-large">
                Enroll Now
              </button>
              <button className="btn btn-outline">
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="course-content">
          {/* Course Details */}
          <div className="course-details">
            <div className="detail-section">
              <h2>Course Overview</h2>
              <p>
                This comprehensive course is designed to take you from {course.level.toLowerCase()} to proficient in {course.category.toLowerCase()}. 
                You'll learn through hands-on projects, real-world examples, and expert guidance from industry professionals.
              </p>
            </div>

            <div className="detail-section">
              <h2>What You'll Learn</h2>
              <ul className="learning-objectives">
                <li>Master core concepts and best practices</li>
                <li>Build real-world applications and projects</li>
                <li>Understand industry-standard tools and workflows</li>
                <li>Prepare for technical interviews and career advancement</li>
                <li>Join a community of like-minded learners</li>
              </ul>
            </div>

            <div className="detail-section">
              <h2>Course Modules</h2>
              <div className="modules-list">
                {modules.map((module, index) => (
                  <div key={index} className="module-item">
                    <div className="module-number">Module {index + 1}</div>
                    <div className="module-content">
                      <h4>{module.title}</h4>
                      <p className="module-duration">Duration: {module.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="course-sidebar">
            <div className="sidebar-card">
              <h3>Course Includes</h3>
              <ul className="includes-list">
                <li><FaClock /> {course.duration} of video content</li>
                <li><FaBook /> Downloadable resources</li>
                <li><FaComments /> Community access</li>
                <li><FaCertificate /> Certificate of completion</li>
                <li><FaSync /> Lifetime updates</li>
                <li><FaUserGraduate /> Instructor support</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>Prerequisites</h3>
              <ul className="prerequisites-list">
                <li>Basic computer skills</li>
                <li>Internet connection</li>
                <li>Dedication to learn</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>Ready to Start?</h3>
              <button className="btn btn-primary btn-large btn-full">
                Enroll Now - ₹{course.price}
              </button>
              <p className="money-back">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getColorByCategory(category, secondary = false) {
  const colors = {
    'Web Development': secondary ? '#3b82f6' : '#2563eb',
    'Data Science': secondary ? '#8b5cf6' : '#7c3aed',
    'Mobile Development': secondary ? '#06b6d4' : '#0891b2',
    'DevOps': secondary ? '#10b981' : '#059669',
    'Design': secondary ? '#f59e0b' : '#d97706',
    'Security': secondary ? '#ef4444' : '#dc2626',
  };
  return colors[category] || (secondary ? '#64748b' : '#475569');
}

export default CourseDetail;