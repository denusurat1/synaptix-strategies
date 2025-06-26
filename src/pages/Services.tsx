import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services'; // Unified services array

const Services: React.FC = () => {
  return (
    <main>
      {/* Page Title Section */}
      <section className="bg-gray-50 py-16 pt-32">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Our Services</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12">
        <div className="container max-w-3xl mx-auto px-4">
          <p className="text-lg text-gray-600 text-center">
            We offer comprehensive consulting services tailored to the unique needs of life sciences
            companies. Our expertise spans from system implementation to strategic consulting to leverage
            the full potential of your technology. Whether you're looking to optimize your
            implementation, streamline operations, or enhance your overall business strategy, we have
            the expertise and resources to help you achieve your goals. Contact us today to learn more
            about our services and how we can support your life sciences company.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card hover:shadow-hover hover:-translate-y-1 transition duration-300 p-6 rounded-lg border border-gray-200 bg-white"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex flex-col space-y-3">
                  <Link
                    to="/contact"
                    className="btn btn-primary w-full text-center hover:text-white hover:font-bold hover:bg-primary-700 transition-colors duration-200"
                  >
                    Schedule a Call
                  </Link>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium text-center"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <p className="text-xl mb-6">Let's find the right solution for your business.</p>
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

export default Services;
