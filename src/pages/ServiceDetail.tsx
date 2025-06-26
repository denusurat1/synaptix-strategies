// src/pages/ServiceDetail.tsx

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';

const ServiceDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 pt-32">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-primary-600 hover:underline">Back to Services</Link>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4 pt-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-20">{service.title}</h1>
          <p className="text-lg text-gray-700 mb-1">{service.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">About this Service</h2>
          <p className="text-gray-700 mb-6">
            At Synaptix Strategies, our {service.title.toLowerCase()} service is designed specifically for life sciences companies looking to grow while staying compliant. We tailor each engagement to your operational needs, regulatory environment, and technology ecosystem.
          </p>

          {service.benefits && (
            <>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Key Benefits</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-600 text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-md inline-block">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
