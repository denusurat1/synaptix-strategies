import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/blogData';

interface BlogPostType {
  id: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  image?: string;
  content: string;
}

const BlogPost: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id: string }>();
  const posts = blogPosts as BlogPostType[];
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center pt-32">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary-600 hover:underline">Back to Blog</Link>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 pt-32">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-primary-600 font-medium">{new Date(post.date).toLocaleDateString()}</span>
            <h1 className="text-4xl font-bold mt-4 mb-6">{post.title}</h1>
          </div>
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-12 flex items-center justify-center overflow-hidden">
            {post.image && <img src={post.image} alt={post.title} className="object-cover w-full h-full" />}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Found this helpful? Let's talk.</h2>
          <Link to="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-md font-medium hover:bg-primary-700 hover:font-bold hover:text-white transition duration-300 inline-block">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BlogPost; 