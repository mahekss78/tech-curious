import React, { useState } from 'react';
import { 
  FaSearch, 
  FaFire, 
  FaChartLine, 
  FaTags,
  FaEnvelope,
  FaCalendarAlt,
  FaClock,
  FaEye,
  FaDesktop,
  FaDatabase,
  FaRocket,
  FaBriefcase,
  FaGraduationCap,
  FaMobileAlt,
  FaShieldAlt,
  FaPalette,
  FaCloud,
  FaBrain
} from 'react-icons/fa';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import '../styles/pages/Blog.css';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Category icons mapping
  const categoryIcons = {
    'Web Development': <FaDesktop />,
    'Data Science': <FaChartLine />,
    'Mobile Development': <FaMobileAlt />,
    'DevOps': <FaRocket />,
    'Design': <FaPalette />,
    'Security': <FaShieldAlt />,
    'Cloud': <FaCloud />,
    'AI & ML': <FaBrain />,
    'Career': <FaBriefcase />,
    'Tutorials': <FaGraduationCap />,
    'all': <FaTags />
  };

  const categories = ['all', 'Web Development', 'Data Science', 'DevOps', 'Career', 'Tutorials', 'Mobile Development', 'Design', 'Security', 'Cloud', 'AI & ML'];

  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory !== 'all' && post.category !== selectedCategory) return false;
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 3);
  const blogCategories = categories.filter(cat => cat !== 'all');

  return (
    <div className="blog-page">
      <div className="page-header">
        <div className="container">
          <div className="header-content">
            <div className="title-wrapper">
              <h1 className="title-main">
                <span className="title-gradient">Tech Insights</span>
                <span className="title-sub">Discover & Learn</span>
              </h1>
              
            </div>
            <p className="header-subtitle">
              Stay updated with the latest trends, tutorials, and insights in technology.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Search and Filter */}
          <div className="blog-controls">
            {/* <div className="search-container">
              <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="search-clear"
                  >
                    ×
                  </button>
                )}
              </div>
            </div> */}

            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  <span className="filter-icon">
                    {categoryIcons[category]}
                  </span>
                  <span className="filter-text">
                    {category === 'all' ? 'All Articles' : category}
                  </span>
                </button>
              ))}
            </div>

            <div className="results-info">
              {/* <span className="results-count">
                <FaChartLine /> 
                <strong>{filteredPosts.length}</strong> articles found
              </span> */}
              {selectedCategory !== 'all' && (
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className="clear-filter"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>

          <div className="blog-layout">
            {/* Main Content */}
            <div className="blog-main">
              {filteredPosts.length > 0 ? (
                <>
                  <div className="featured-article">
                    <div className="featured-badge">
                      <FaFire /> Featured
                    </div>
                    <h2 className="featured-title">Latest Trends in 2024</h2>
                    <p className="featured-excerpt">
                      Explore the most exciting technology trends shaping the future of development.
                    </p>
                  </div>

                  <div className="blog-grid">
                    {filteredPosts.map((post) => (
                      <BlogCard key={post.id} {...post} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="no-posts">
                  <div className="no-posts-icon">
                    <FaSearch />
                  </div>
                  <h3>No articles found</h3>
                  <p>Try adjusting your search or filters.</p>
                  <button 
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                    className="btn btn-primary"
                  >
                    Show all articles
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="blog-sidebar">
              {/* Popular Articles */}
              <div className="sidebar-section popular-section">
                <div className="sidebar-header">
                  <FaFire className="sidebar-icon" />
                  <h3>Popular Articles</h3>
                </div>
                <div className="popular-posts">
                  {popularPosts.map((post, index) => (
                    <div key={post.id} className="popular-post">
                      <div className="popular-post-rank">
                        <span className="rank-number">#{index + 1}</span>
                      </div>
                      <div className="popular-post-content">
                        <div className="popular-post-category">
                          {categoryIcons[post.category]}
                          <span>{post.category}</span>
                        </div>
                        <h4 className="popular-post-title">{post.title}</h4>
                        <div className="popular-post-meta">
                          <span><FaCalendarAlt /> {post.date}</span>
                          <span><FaClock /> {post.readTime}</span>
                          {post.views && <span><FaEye /> {post.views}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-section categories-section">
                <div className="sidebar-header">
                  <FaTags className="sidebar-icon" />
                  <h3>Categories</h3>
                </div>
                <div className="sidebar-categories">
                  {blogCategories.map(category => {
                    const postCount = blogPosts.filter(p => p.category === category).length;
                    return (
                      <button
                        key={category}
                        className={`sidebar-category ${selectedCategory === category ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        <span className="category-info">
                          <span className="category-icon">{categoryIcons[category]}</span>
                          <span className="category-name">{category}</span>
                        </span>
                        <span className="category-count">
                          {postCount}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Newsletter */}
              <div className="sidebar-section newsletter">
                <div className="sidebar-header">
                  <FaEnvelope className="sidebar-icon" />
                  <h3>Stay Updated</h3>
                </div>
                <p>Get the latest tech insights delivered to your inbox.</p>
                <form className="newsletter-form">
                  <div className="input-group">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="newsletter-input"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-full">
                    Subscribe Now
                  </button>
                </form>
              </div>

              {/* Quick Stats */}
              <div className="sidebar-section stats-section">
                <div className="sidebar-header">
                  <FaChartLine className="sidebar-icon" />
                  <h3>Blog Stats</h3>
                </div>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">{blogPosts.length}</div>
                    <div className="stat-label">Total Articles</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">{blogCategories.length}</div>
                    <div className="stat-label">Categories</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">
                      {popularPosts[0]?.views || '5k+'}
                    </div>
                    <div className="stat-label">Top Views</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;