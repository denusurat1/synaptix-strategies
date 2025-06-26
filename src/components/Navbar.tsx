import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMobileLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="../public/logo1.png" alt="Logo" className="w-12 h-12" />
              <span className="ml-2 text-lg font-semibold text-gray-900">Synaptix Strategies</span>
            </Link>
          </div>


          {/* Desktop Navigation + CTA */}
          <div className="hidden md:flex md:items-center space-x-6">
            <Link to="/services" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200">
              Services
            </Link>
            <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200">
              About
            </Link>
            <Link to="/blog" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200">
              Blog
            </Link>
            <Link to="/#testimonials" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors duration-200">
              Testimonials
            </Link>
            <div className="flex items-center space-x-3">
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
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-1 border-2 border-primary-600 text-primary-600 font-medium rounded-lg hover:text-primary-700 hover:font-bold hover:bg-primary-100 transition-colors duration-200"
              >
                Join Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
          <Link onClick={handleMobileLinkClick} to="/services" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md">
            Services
          </Link>
          <Link onClick={handleMobileLinkClick} to="/about" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md">
            About
          </Link>
          <Link onClick={handleMobileLinkClick} to="/blog" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md">
            Blog
          </Link>
          <Link onClick={handleMobileLinkClick} to="/#testimonials" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md">
            Testimonials
          </Link>
          <Link onClick={handleMobileLinkClick} to="/contact" className="flex items-center px-3 py-2 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 hover:text-white hover:font-bold rounded-md">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
