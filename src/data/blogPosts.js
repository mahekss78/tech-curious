export const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt:
      "Explore the latest trends and technologies shaping web development, from AI-powered tools to new frameworks.",
    content: `The web development landscape is evolving rapidly. In 2024, we're seeing several key trends that every developer should be aware of:

1. AI Integration:
AI-powered tools are becoming essential for code generation, debugging, and optimization.

2. Edge Computing:
Faster load times and improved performance through distributed computing.

3. Web3 Technologies:
Decentralized applications and blockchain integration are gaining traction.

4. Progressive Web Apps:
PWAs continue to bridge the gap between web and mobile apps.

5. Low-Code / No-Code:
Empowering non-developers to build functional applications.

These trends are not just passing fads. They represent fundamental shifts in how we build for the web.`,
    category: "Web Development",
    author: "Alex Johnson",
    authorRole: "Senior Web Developer",
    date: "2024-03-15",
    readTime: "5 min",
    imageUrl:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Web Development", "Trends", "Technology", "2024"],
    featured: true
  },

  {
    id: 2,
    title: "Getting Started with Machine Learning: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of machine learning and how to start your journey in this exciting field.",
    content: `Machine learning might seem intimidating, but it's more accessible than ever. Here's how to get started:

Understanding the Basics:
Machine learning is a subset of artificial intelligence that enables computers to learn from data without being explicitly programmed.

Key Concepts:
- Supervised Learning: Learning from labeled data
- Unsupervised Learning: Finding patterns in unlabeled data
- Reinforcement Learning: Learning through trial and error

Getting Started Steps:
1. Learn Python: The primary language for machine learning
2. Master Libraries: NumPy, Pandas, Scikit-learn
3. Practice with Projects: Start with simple datasets
4. Join Communities: Learn from others

Remember, consistency is key in machine learning.`,
    category: "Data Science",
    author: "Dr. Sarah Chen",
    authorRole: "Data Science Lead",
    date: "2024-03-10",
    readTime: "8 min",
    imageUrl:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Machine Learning", "Beginner", "Python", "Data Science"],
    featured: true
  },

  {
    id: 3,
    title: "DevOps Best Practices for Startups",
    excerpt:
      "Learn how small teams can implement effective DevOps practices without large investments.",
    content: `Startups often struggle with implementing DevOps due to limited resources. Here are practical strategies:

Why DevOps Matters for Startups:
- Faster deployment cycles
- Improved collaboration
- Better reliability
- Cost efficiency

Essential Practices:
1. Start Small: Begin with CI/CD pipelines
2. Automate Testing: Save time and catch bugs early
3. Use Cloud Services: Scale without heavy infrastructure
4. Monitor Everything: Proactive issue detection
5. Document Processes: Knowledge sharing is crucial

Recommended Tools:
- CI/CD: GitHub Actions, Jenkins
- Containers: Docker, Kubernetes
- Monitoring: Prometheus, Grafana
- Cloud Platforms: AWS, Google Cloud, Azure

Start with what's essential and scale as you grow.`,
    category: "DevOps",
    author: "David Kim",
    authorRole: "DevOps Engineer",
    date: "2024-03-05",
    readTime: "6 min",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["DevOps", "Startups", "Best Practices", "Automation"],
    featured: true
  },

  {
    id: 4,
    title: "Mastering React Hooks: Tips and Tricks",
    excerpt:
      "Advanced techniques for using React Hooks effectively in your applications.",
    content: `React Hooks revolutionized how we write React components. Here are some advanced tips:

Custom Hooks:
Create reusable logic with custom hooks:

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

Performance Optimization:
- Use useMemo for expensive calculations
- Implement useCallback for stable function references
- Leverage React.memo for component memoization

Common Pitfalls:
- Infinite loops with useEffect
- Missing dependencies
- State updates based on previous state

Master these patterns to write cleaner, more efficient React code.`,
    category: "Web Development",
    author: "Mike Rodriguez",
    authorRole: "Frontend Architect",
    date: "2024-02-28",
    readTime: "7 min",
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "JavaScript", "Frontend", "Hooks"],
    featured: false
  },

  {
    id: 5,
    title: "Cybersecurity Fundamentals Every Developer Should Know",
    excerpt:
      "Essential security practices to protect your applications from common threats.",
    content: `Security should be a priority from day one. Here are fundamentals every developer needs:

Common Threats:
- SQL Injection: Always use parameterized queries
- XSS Attacks: Sanitize user input
- CSRF: Implement proper token validation
- Authentication Issues: Use strong password policies

Best Practices:
1. Input Validation: Never trust user input
2. HTTPS Everywhere: Encrypt all communications
3. Regular Updates: Keep dependencies patched
4. Security Headers: Implement CSP and HSTS
5. Error Handling: Do not leak sensitive information

Tools for Security:
- OWASP ZAP: Security testing
- Snyk: Dependency scanning
- Helmet.js: Security headers for Node.js

Security is not optional. It is essential.`,
    category: "Security",
    author: "James Carter",
    authorRole: "Security Specialist",
    date: "2024-02-20",
    readTime: "6 min",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Security", "Cybersecurity", "Best Practices", "Development"],
    featured: false
  },

  {
    id: 6,
    title: "Building Scalable Mobile Apps with React Native",
    excerpt:
      "Architecture patterns and best practices for creating maintainable React Native applications.",
    content: `React Native enables rapid mobile development, but scalability requires careful planning:

Architecture Patterns:
- Feature-based organization: Group by feature, not by type
- State management: Choose Redux, MobX, or Context API wisely
- Navigation: Implement clean navigation flows

Performance Tips:
- Optimize images: Use appropriate sizes and formats
- Code splitting: Load only what's needed
- Native modules: Use for computationally intensive tasks

Testing Strategy:
- Unit tests for business logic
- Component tests for UI
- End-to-end tests for critical flows

Deployment Pipeline:
- Automated builds
- Over-the-air updates with CodePush
- Monitoring with Sentry

Scale your React Native apps efficiently with these patterns.`,
    category: "Mobile Development",
    author: "Emma Wilson",
    authorRole: "Mobile Developer",
    date: "2024-02-15",
    readTime: "8 min",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Mobile", "Scalability", "Architecture"],
    featured: false
  }
];

export const blogCategories = [
  { id: 1, name: "Web Development", count: 12 },
  { id: 2, name: "Data Science", count: 8 },
  { id: 3, name: "Mobile Development", count: 6 },
  { id: 4, name: "DevOps", count: 7 },
  { id: 5, name: "Security", count: 5 },
  { id: 6, name: "Career", count: 9 },
  { id: 7, name: "Tutorials", count: 15 },
  { id: 8, name: "Industry News", count: 10 }
];

export const popularPosts = [
  { id: 1, title: "The Future of Web Development in 2024", views: 12500, comments: 42 },
  { id: 2, title: "Getting Started with Machine Learning", views: 9800, comments: 31 },
  { id: 4, title: "Mastering React Hooks", views: 8700, comments: 28 },
  { id: 6, title: "Building Scalable Mobile Apps", views: 7500, comments: 22 },
  { id: 5, title: "Cybersecurity Fundamentals", views: 6900, comments: 19 }
];
