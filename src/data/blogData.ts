// blogData.ts
/**
 * @typedef {Object} BlogPostType
 * @property {string} id
 * @property {string} title
 * @property {string} author
 * @property {string} date
 * @property {string} summary
 * @property {string} [image]
 * @property {string} content
 * @property {string} category
 */

/** @type {BlogPostType[]} */
const blogPosts = [
  {
    id: 'future-of-life-sciences',
    title: 'The Future of Life Sciences Technology',
    author: 'John Smith',
    date: '2024-03-15',
    summary: 'Exploring emerging trends and technologies shaping the future of life sciences and healthcare.',
    image: '/images/blog1.jpg',
    category: 'Technology',
    content: `
      <h2>The Evolution of Life Sciences Technology</h2>
      <p>The life sciences industry is undergoing a significant transformation, driven by technological innovation and digital disruption. As we look to the future, several key trends are emerging that will shape the industry's trajectory.</p>
      <h2>Key Trends Shaping the Future</h2>
      <ul>
        <li>Artificial Intelligence and Machine Learning</li>
        <li>Cloud Computing and Data Management</li>
        <li>Digital Health Solutions</li>
        <li>Regulatory Technology (RegTech)</li>
      </ul>
      <h2>Impact on Business Operations</h2>
      <p>The integration of advanced technologies is revolutionizing how life sciences companies operate. From research and development to manufacturing and distribution, every aspect of the business is being transformed.</p>
      <h2>Looking Ahead</h2>
      <p>As we move forward, companies must adapt to these changes while maintaining compliance and ensuring patient safety. The future belongs to those who can effectively leverage technology while navigating the complex regulatory landscape.</p>
    `
  },
  {
    id: 'veeva-best-practices',
    title: 'Best Practices for Veeva Implementation',
    author: 'Sarah Johnson',
    date: '2024-03-10',
    summary: 'Learn the key strategies and considerations for successful Veeva system implementation.',
    image: '/images/blog2.jpg',
    category: 'Implementation',
    content: `
      <h2>Planning Your Veeva Implementation</h2>
      <p>Successful Veeva implementation starts with a clear strategy and stakeholder alignment. Here are some best practices to ensure a smooth rollout:</p>
      <ul>
        <li>Define clear objectives and success metrics</li>
        <li>Engage key stakeholders early</li>
        <li>Invest in user training and change management</li>
        <li>Leverage Veeva's best practice templates</li>
      </ul>
      <h2>Common Pitfalls</h2>
      <p>Avoid common mistakes such as underestimating data migration complexity and neglecting post-launch support.</p>
    `
  },
  {
    id: 'data-analytics-life-sciences',
    title: 'Data Analytics in Life Sciences',
    author: 'Michael Chen',
    date: '2024-03-05',
    summary: 'How data analytics is transforming decision-making in the life sciences industry.',
    image: '/images/blog3.jpg',
    category: 'Analytics',
    content: `
      <h2>The Power of Data</h2>
      <p>Data analytics is enabling life sciences companies to make more informed decisions, improve patient outcomes, and drive innovation.</p>
      <h2>Applications</h2>
      <ul>
        <li>Clinical trial optimization</li>
        <li>Real-world evidence generation</li>
        <li>Regulatory compliance monitoring</li>
      </ul>
      <h2>Future Outlook</h2>
      <p>As data sources grow, advanced analytics and AI will become even more critical to success in life sciences.</p>
    `
  }
];

export default blogPosts;
