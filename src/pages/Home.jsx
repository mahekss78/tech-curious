import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, FaGraduationCap, FaUsers, FaChartLine, 
  FaAward, FaRobot, FaCode, FaUserGraduate, FaProjectDiagram,
  FaChevronRight, FaPlay, FaStar, FaShieldAlt,
  FaHandsHelping, FaInfinity, FaGem, FaMedal,
  FaLightbulb, FaGlobe, FaBriefcase
} from 'react-icons/fa';
import { courses, testimonials } from '../data/courses';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import '../styles/pages/Home.css';

// Updated Animated Stat Card Component with new style
const AnimatedStat = ({ number, label, icon: Icon, color, delay = 0 }) => {
  const colorClasses = {
    purple: 'stat-purple',
    navy: 'stat-navy',
    lavender: 'stat-lavender'
  };

  return (
    <motion.div
      className={`stat-card ${colorClasses[color] || 'stat-purple'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      <div className="stat-content">
        <div className={`stat-icon-wrapper stat-icon-${color}`}>
          <Icon className="stat-icon" />
        </div>
        <div>
          <div className="stat-number">{number}</div>
          <div className="stat-label">{label}</div>
        </div>
      </div>
    </motion.div>
  );
};

// Updated Feature Card Component with new style
const FeatureCard = ({ icon: Icon, title, description, gif, color = 'purple', delay = 0 }) => {
  return (
    <motion.div
      className={`feature-card feature-${color}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -15,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      <div className={`feature-icon-wrapper feature-icon-${color}`}>
        <Icon className="feature-icon" />
      </div>
      <div className="feature-image-container">
        <img 
          src={gif} 
          alt={title} 
          className="feature-image"
          loading="lazy"
        />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </motion.div>
  );
};

// Updated Glowing Button Component with new style
const GlowingButton = ({ children, href, variant = 'primary', icon: Icon = FaChevronRight }) => {
  return (
    <motion.a
      href={href}
      className={`glowing-button glowing-button-${variant}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{children}</span>
      <Icon className="button-icon" />
    </motion.a>
  );
};

// Testimonial Card Component (to match new style)
const TestimonialCardNew = ({ name, role, image, text, rating }) => {
  return (
    <div className="testimonial-card-new">
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} className="star-icon" />
        ))}
      </div>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <img src={image} alt={name} className="author-image" />
        <div>
          <h4 className="author-name">{name}</h4>
          <p className="author-role">{role}</p>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const featuredCourses = courses.slice(0, 4);
  const featuredTestimonials = testimonials.slice(0, 3);

  // Updated stats data with colors
  const stats = [
    { number: "50K+", label: "Students Empowered", icon: FaUsers, color: "purple" },
    { number: "200+", label: "Expert Instructors", icon: FaGraduationCap, color: "navy" },
    { number: "95%", label: "Career Advancement", icon: FaChartLine, color: "lavender" },
    { number: "500+", label: "Projects Built", icon: FaProjectDiagram, color: "purple" }
  ];

  // Updated features with colors
  const features = [
    {
      icon: FaRobot,
      title: "AI-Powered Learning",
      description: "Adaptive learning paths powered by artificial intelligence",
      gif: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600",
      color: "purple"
    },
    {
      icon: FaCode,
      title: "Interactive Coding",
      description: "Real-time coding environment with instant feedback",
      gif: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
      color: "navy"
    },
    {
      icon: FaUserGraduate,
      title: "Live Mentorship",
      description: "1:1 guidance from industry experts",
      gif: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
      color: "lavender"
    },
    {
      icon: FaProjectDiagram,
      title: "Real Projects",
      description: "Build portfolio with industry-standard projects",
      gif: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
      color: "purple"
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>
        
        <div className="container">
          <div className="hero-grid">
            <div>
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FaRocket className="badge-icon" />
                <span className="badge-text"> Transform Your Career</span>
              </motion.div>
              
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="gradient-text">Learn Tech Skills</span>
                <br />
                <span className="title-main">That Actually Matter</span>
                <br />
                <span className="title-subtitle">Join Our Learning Community</span>
              </motion.h1>
              
              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Your gateway to a world of innovation and knowledge! Join thousands who've transformed their careers with project-based courses and live mentorship.
              </motion.p>
              
              <motion.div
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <GlowingButton href="/courses" variant="primary">Get Started</GlowingButton>
                <GlowingButton href="/demo" variant="secondary" icon={FaPlay}>Explore Now</GlowingButton>
              </motion.div>
              
              <motion.div
                className="hero-features"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="feature-pill">
                  <FaGem className="pill-icon" />
                  <span className="pill-text">No Credit Card</span>
                </div>
                <div className="feature-pill">
                  <FaInfinity className="pill-icon" />
                  <span className="pill-text">Lifetime Access</span>
                </div>
                <div className="feature-pill">
                  <FaMedal className="pill-icon" />
                  <span className="pill-text">Certified</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="hero-image-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800" 
                  alt="Learning" 
                  className="hero-image"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge badge-purple">
              <FaChartLine className="icon-xs" />
              <span>TRUSTED RESULTS</span>
            </div>
            <h2 className="section-title">Proven Impact on Careers</h2>
            <p className="section-description">Join a community of learners achieving remarkable success</p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} {...stat} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge badge-white">
              <FaLightbulb className="icon-xs" />
              <span>WHY CHOOSE US</span>
            </div>
            <h2 className="section-title">
              A Better Way to <span className="gradient-text">Learn Tech</span>
            </h2>
            <p className="section-description">Experience learning designed for the modern world</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge badge-purple">
              <FaGraduationCap className="icon-xs" />
              <span>POPULAR COURSES</span>
            </div>
            <h2 className="section-title">
              Master In-Demand <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-description">Learn by building real projects with expert guidance</p>
          </div>
          
          <div className="courses-grid">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <CourseCard {...course} />
              </motion.div>
            ))}
          </div>
          
          <div className="section-cta">
            <GlowingButton href="/courses" variant="primary">Browse All Courses</GlowingButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge badge-white">
              <FaAward className="icon-xs" />
              <span>SUCCESS STORIES</span>
            </div>
            <h2 className="section-title">
              Real <span className="gradient-text">Results</span>, Real People
            </h2>
            <p className="section-description">See how our learners transformed their careers</p>
          </div>
          
          <div className="testimonials-grid">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <TestimonialCardNew {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-blob cta-blob-1"></div>
            <div className="cta-blob cta-blob-2"></div>
            
            <div className="cta-content">
              <div className="cta-icon-wrapper">
                <FaRocket className="cta-icon" />
              </div>
              
              <h2 className="cta-title">Start Your Journey Today</h2>
              
              <p className="cta-description">
                Join thousands who've transformed their careers. Take the first step toward your dream tech career.
              </p>
              
              <div className="cta-buttons">
                <GlowingButton href="/signup" variant="primary">Get Started Free</GlowingButton>
                <GlowingButton href="/courses" variant="secondary">Explore Courses</GlowingButton>
              </div>
              
              <div className="cta-footer">
                <FaStar className="cta-star" />
                <span>7-day free trial • No credit card required</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;