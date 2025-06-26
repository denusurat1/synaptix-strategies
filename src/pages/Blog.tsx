// Blog.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blogData';

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 pt-32">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4">Insights & Resources</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Stay informed with the latest insights, trends, and best practices in life sciences technology.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition font-medium ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* Placeholder for blog post image (removed as requested) */}
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString()}</div>
                  <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Want these insights in your inbox?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md text-gray-900 flex-grow max-w-md"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
