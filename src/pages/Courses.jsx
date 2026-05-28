import React, { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import '../styles/pages/Courses.css';
import { 
  FaFilter,
  FaLayerGroup,
  FaTimes,
  FaChevronDown,
  FaSearch,
  FaPlayCircle,
  FaGraduationCap,
  FaLaptopCode,
  FaChartLine,
  FaCertificate,
  FaRocket,
  FaUsers,
  FaClock,
  FaBrain,
  FaDatabase,
  FaShieldAlt,
  FaPalette,
  FaCloud,
  FaMobileAlt
} from 'react-icons/fa';

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const categories = ['all', 'Web Development', 'Data Science', 'Mobile Development', 'DevOps', 'Design', 'Security', 'Cloud', 'AI & ML'];
  const levels = ['all', 'Beginner', 'Intermediate', 'Advanced'];

  // Category icons mapping
  const categoryIcons = {
    'Web Development': <FaLaptopCode />,
    'Data Science': <FaChartLine />,
    'Mobile Development': <FaMobileAlt />,
    'DevOps': <FaRocket />,
    'Design': <FaPalette />,
    'Security': <FaShieldAlt />,
    'Cloud': <FaCloud />,
    'AI & ML': <FaBrain />,
    'all': <FaLaptopCode />
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredCourses = courses.filter(course => {
    if (selectedCategory !== 'all' && course.category !== selectedCategory) return false;
    if (selectedLevel !== 'all' && course.level !== selectedLevel) return false;
    if (searchTerm && !course.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !course.description.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div className={`courses-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Animated Background Layer */}
      <div className="background-3d">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="page-header">
        <div className="container">
          <div className="header-content">
            <div className="title-wrapper">
              <h1 className="title-main">
                <span className="title-gradient">Discover Courses</span>
                <span className="title-sub">Learn. Grow. Succeed.</span>
              </h1>
              {/* <div className="title-underline"></div> */}
            </div>
            <p className="header-subtitle">
              Browse our comprehensive collection of technology courses designed for all skill levels.
            </p>
            
            {/* Search Bar */}
            {/* <div className="search-container">
              <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="search-clear"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Mobile Filter Toggle */}
          <button 
            className="filter-toggle"
            onClick={() => setIsFilterVisible(!isFilterVisible)}
          >
            <FaFilter /> Filters <FaChevronDown className={`chevron ${isFilterVisible ? 'rotate' : ''}`} />
          </button>

          {/* Filters */}
          <div className={`filters ${isFilterVisible ? 'visible' : ''}`}>
            <div className="filter-card">
              <div className="filter-group">
                <label htmlFor="category" className="filter-label">
                  <FaFilter className="filter-icon" /> Category:
                </label>
                <div className="select-wrapper">
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="filter-select"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        <span className="option-content">
                          {category !== 'all' && (
                            <span className="option-icon">{categoryIcons[category]}</span>
                          )}
                          {category === 'all' ? 'All Categories' : category}
                        </span>
                      </option>
                    ))}
                  </select>
                  <div className="select-arrow"></div>
                </div>
              </div>

              <div className="filter-group">
                <label htmlFor="level" className="filter-label">
                  <FaLayerGroup className="filter-icon" /> Level:
                </label>
                <div className="select-wrapper">
                  <select
                    id="level"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="filter-select"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>
                        <span className="option-content">
                          {level === 'all' ? 'All Levels' : level}
                        </span>
                      </option>
                    ))}
                  </select>
                  <div className="select-arrow"></div>
                </div>
              </div>

              {/* <div className="filter-group">
                <div className="results-count">
                  <span className="count-number">{filteredCourses.length}</span>
                  <span className="count-label">of {courses.length} courses</span>
                </div>
              </div> */}

              <div className="filter-group">
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedLevel('all');
                    setSearchTerm('');
                  }}
                  className="btn btn-outline"
                >
                  <FaTimes /> Clear All
                </button>
              </div>
            </div>
          </div>

          {/* Category Quick Filter */}
          <div className="category-quick-filter">
            <div className="quick-filter-header">
              <FaFilter className="quick-filter-icon" />
              <span>Browse by Category</span>
            </div>
            <div className="quick-filter-items">
              {categories.filter(cat => cat !== 'all').map(category => (
                <button
                  key={category}
                  className={`quick-filter-item ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span className="quick-filter-icon">
                    {categoryIcons[category]}
                  </span>
                  <span className="quick-filter-text">{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="courses-grid">
              {filteredCourses.map((course, index) => (
                <div 
                  key={course.id} 
                  className="course-card-wrapper"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CourseCard {...course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">
                <FaLaptopCode />
                <div className="pulse-ring"></div>
              </div>
              <h3>No courses found</h3>
              <p>Try adjusting your filters to find what you're looking for.</p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                  setSearchTerm('');
                }}
                className="btn btn-primary btn-glow"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Course Features */}
          <div className="course-features">
            <div className="feature">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <FaPlayCircle />
                </div>
                <div className="icon-orbital"></div>
              </div>
              <h3>Project-Based Learning</h3>
              <p>Build real-world projects that you can showcase in your portfolio.</p>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <FaGraduationCap />
                </div>
                <div className="icon-orbital"></div>
              </div>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with years of experience.</p>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <FaClock />
                </div>
                <div className="icon-orbital"></div>
              </div>
              <h3>Flexible Schedule</h3>
              <p>Self-paced learning with lifetime access to course materials.</p>
            </div>
            <div className="feature">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">
                  <FaCertificate />
                </div>
                <div className="icon-orbital"></div>
              </div>
              <h3>Certification</h3>
              <p>Receive industry-recognized certificates upon completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              '--delay': `${Math.random() * 5}s`,
              '--duration': `${15 + Math.random() * 10}s`,
              '--size': `${5 + Math.random() * 15}px`,
              left: `${Math.random() * 100}%`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Courses;