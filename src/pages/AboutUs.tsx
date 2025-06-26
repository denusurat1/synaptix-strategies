import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <main>
      {/* Header Section */}
      <section className="bg-gray-50 py-16 pt-32">
        <div className="container">
          <h1 className="text-center">About Us</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-600 text-center">
            We are a team of experienced consultants dedicated to helping life sciences companies 
            navigate their digital transformation journey and upgrading to prepare for AI. With decades of combined experience in 
            the industry, we bring deep expertise and innovative solutions to every engagement.
          </p>
        </div>
      </section>
    
      {/* Mission & Approach Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="mb-6">Our Mission & Approach</h2>
              <p className="text-gray-600 mb-4">
                Our mission is to empower life sciences organizations with the tools and strategies 
                they need to thrive in an increasingly digital world. We believe in a collaborative 
                approach, working closely with our clients to understand their unique challenges 
                and develop tailored solutions.
              </p>
              <p className="text-gray-600">
                Through our proven methodology and deep industry knowledge, we help companies 
                streamline their operations, enhance compliance, and drive innovation while 
                maintaining the highest standards of quality and efficiency.
              </p>
            </div>
            <div className="h-500 bg-gray-200 rounded-lg">
            <img 
                src="../public/image2.png" 
                alt="Life Science Illustration" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Team Member 1
            <div className="card flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-primary-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600">
                With over 15 years of experience in life sciences consulting, Sarah leads our team 
                with a vision to transform how companies approach digital innovation.
              </p>
            </div>

            {/* Team Member 2
            <div className="card flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-primary-600 font-medium mb-3">Technical Director</p>
              <p className="text-gray-600">
                Michael brings deep technical expertise in Veeva systems and digital transformation, 
                helping clients implement cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <p className="text-xl mb-6">Let's talk about how we can support your goals.</p>
          <Link
            to="/contact"
            className="btn bg-white text-primary-600 hover:bg-primary-100 hover:text-primary-700 hover:font-bold"
          >
            Start with a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs; 