import React, { useEffect, useRef } from 'react';
import { 
  FaBullseye, 
  FaStar, 
  FaUsers, 
  FaRocket, 
  FaLightbulb, 
  FaUnlock, 
  FaChevronRight, 
  FaGlobe, 
  FaGraduationCap, 
  FaAward,
  FaChartLine,
  FaBriefcase,
  FaHeart,
  FaShieldAlt,
  FaHandsHelping,
  FaCode,
  FaBookOpen,
  FaUniversity,
  FaUserTie,
  FaMapMarkerAlt
} from 'react-icons/fa';
import '../styles/pages/About.css';

function About() {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);

  const teamMembers = [
    { name: 'Alex Johnson', role: 'Lead Instructor', bio: '10+ years in web development', image: null },
    { name: 'Dr. Sarah Chen', role: 'Data Science Expert', bio: 'PhD in Computer Science', image: null },
    { name: 'Mike Rodriguez', role: 'Mobile Development Lead', bio: 'Former Senior Engineer at TechCo', image: null },
    { name: 'Emma Wilson', role: 'Design Director', bio: 'Award-winning UX designer', image: null },
  ];

  const milestones = [
    { year: '2020', title: 'Founded', description: 'Started with 3 courses and 100 students', icon: <FaBookOpen />, color: '#3B82F6' },
    { year: '2021', title: 'Growth', description: 'Expanded to 20+ courses and 5,000 students', icon: <FaChartLine />, color: '#10B981' },
    { year: '2022', title: 'Recognition', description: 'Featured as Top Tech Education Platform', icon: <FaAward />, color: '#F59E0B' },
    { year: '2023', title: 'Expansion', description: 'Launched corporate training programs', icon: <FaBriefcase />, color: '#8B5CF6' },
    { year: '2024', title: 'Innovation', description: 'Introduced AI-powered learning paths', icon: <FaLightbulb />, color: '#EC4899' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up, .card-3d, .timeline-item').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      {/* Hero Section with 3D Effect */}
      <div className="about-hero" ref={heroRef}>
        <div className="hero-3d-container">
          <div className="hero-3d-shape shape-1"></div>
          <div className="hero-3d-shape shape-2"></div>
          <div className="hero-3d-shape shape-3"></div>
        </div>
        <div className="container">
          <div className="about-hero-content">
            <div className="hero-badge">
              <FaMapMarkerAlt className="badge-icon" />
              Our Story
            </div>
            <h1 className="hero-title">
              <span className="gradient-text">Empowering</span>
              <span className="hero-title-line-2">Tech Learners Worldwide</span>
            </h1>
            <p className="hero-subtitle">
              At Curiosity Tech, we believe that technology education should be accessible, 
              practical, and transformative. We're on a mission to bridge the tech skills gap 
              through innovative learning experiences.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Students Empowered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Expert Instructors</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Career Advancement</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision with 3D Cards */}
      <section className="section light-blue-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card card-3d">
              <div className="card-glow mission-glow"></div>
              <div className="card-icon pulse">
                <FaBullseye className="mission-icon" />
                <div className="icon-ring"></div>
              </div>
              <h2 className="card-title">Our Mission</h2>
              <p className="card-description">
                To democratize technology education by providing high-quality,
                accessible learning resources that empower individuals to build
                meaningful careers in tech.
              </p>
              <div className="card-decoration">
                <div className="decoration-dot mission-dot"></div>
                <div className="decoration-line mission-line"></div>
              </div>
            </div>
            
            <div className="vision-card card-3d">
              <div className="card-glow vision-glow"></div>
              <div className="card-icon rotate">
                <FaStar className="vision-icon" />
                <div className="icon-ring"></div>
              </div>
              <h2 className="card-title">Our Vision</h2>
              <p className="card-description">
                A world where anyone, anywhere can acquire the tech skills needed
                to thrive in the digital economy, regardless of their background
                or starting point.
              </p>
              <div className="card-decoration">
                <div className="decoration-dot vision-dot"></div>
                <div className="decoration-line vision-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values with Hover Effects */}
      <section className="section light-blue-section section-alt">
        <div className="container">
          <div className="section-header fade-in-up">
            <div className="section-label">
              <FaShieldAlt className="section-label-icon" />
              Core Principles
            </div>
            <h2>Our Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            {[
              { 
                icon: <FaHeart className="value-icon-svg" />, 
                title: 'Community First', 
                desc: 'We believe learning happens best in supportive communities where everyone grows together.',
                color: '#EF4444'
              },
              { 
                icon: <FaCode className="value-icon-svg" />, 
                title: 'Practical Focus', 
                desc: 'Our courses emphasize hands-on projects that build real-world skills.',
                color: '#3B82F6'
              },
              { 
                icon: <FaRocket className="value-icon-svg" />, 
                title: 'Continuous Innovation', 
                desc: 'We constantly update our content to reflect the latest industry trends.',
                color: '#8B5CF6'
              },
              { 
                icon: <FaHandsHelping className="value-icon-svg" />, 
                title: 'Accessibility', 
                desc: 'We strive to make quality tech education affordable and accessible to all.',
                color: '#10B981'
              },
            ].map((value, index) => (
              <div key={index} className="value-card card-3d" data-delay={index * 100}>
                <div className="value-icon hover-float" style={{ color: value.color }}>
                  {value.icon}
                  <div className="value-icon-bg" style={{ backgroundColor: `${value.color}20` }}></div>
                </div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
                <div className="value-hover-line" style={{ background: value.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team with 3D Avatars */}
      <section className="section light-blue-section">
        <div className="container">
          <div className="section-header fade-in-up">
            <div className="section-label">
              <FaUserTie className="section-label-icon" />
              Expert Team
            </div>
            <h2>Meet Our Team</h2>
            <p className="section-subtitle">Industry experts dedicated to your success</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card card-3d" data-delay={index * 200}>
                <div className="team-avatar-container">
                  <div className="team-avatar-3d">
                    <div className="avatar-glow"></div>
                    <div className="team-avatar">
                      {member.image ? (
                        <img src={member.image} alt={member.name} />
                      ) : (
                        <div className="avatar-placeholder">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    <div className="avatar-ring ring-1"></div>
                    <div className="avatar-ring ring-2"></div>
                  </div>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <FaUsers className="social-icon" />
                  <FaUniversity className="social-icon" />
                  <FaBriefcase className="social-icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Timeline */}
      <section className="section light-blue-section section-alt">
        <div className="container">
          <div className="section-header fade-in-up">
            <div className="section-label">
              <FaChartLine className="section-label-icon" />
              Our Journey
            </div>
            <h2>Milestones & Growth</h2>
            <p className="section-subtitle">Key moments that shaped our evolution</p>
          </div>
          
          <div className="timeline-3d" ref={timelineRef}>
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item card-3d" data-delay={index * 150}>
                <div className="timeline-connector"></div>
                <div className="timeline-icon pulse" style={{ color: milestone.color }}>
                  {milestone.icon}
                  <div className="timeline-icon-bg" style={{ backgroundColor: `${milestone.color}20` }}></div>
                </div>
                <div className="timeline-year glow-text">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
                <div className="timeline-dot" style={{ background: milestone.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated CTA */}
      <section className="section light-blue-section">
        <div className="container">
          <div className="about-cta card-3d">
            <div className="cta-glow"></div>
            <div className="cta-decoration">
              <div className="cta-orb orb-1"></div>
              <div className="cta-orb orb-2"></div>
            </div>
            <div className="cta-icon">
              <FaGraduationCap />
            </div>
            <h2>Join Our Learning Revolution</h2>
            <p>
              Ready to start your tech journey? Join thousands of learners who have 
              transformed their careers with Curiosity Tech.
            </p>
            <div className="cta-actions">
              <a href="/courses" className="btn btn-primary btn-large btn-glow">
                <span>Explore Courses</span>
                <FaChevronRight className="btn-icon" />
              </a>
              <a href="/contact" className="btn btn-outline btn-hover-3d">
                <FaUnlock className="btn-icon" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;