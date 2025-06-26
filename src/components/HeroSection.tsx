import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                Transform Your Cloud Systems
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Expert consulting services to help you navigate regulatory challenges, optimize processes, and drive digital transformation in the life sciences industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg text-white bg-primary-600 hover:text-white hover:font-bold hover:bg-primary-700 transition-colors duration-200 shadow-sm"
              >
                <svg 
                  className="w-4 h-4 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                Book Free Call
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-4 py-2.5 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:text-primary-700 hover:font-bold hover:bg-primary-100 transition-colors duration-200"
              >
                <svg 
                  className="w-1 h-1 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 2 2"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
                Explore Services
              </Link>
            </div>
          </div>

          {/* Image Illustration */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-xl shadow-sm p-4 transform hover:scale-105 transition-transform duration-200">
              <img 
                src="/image.png" 
                alt="Life Science Illustration" 
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
