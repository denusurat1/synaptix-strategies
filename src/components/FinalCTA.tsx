import React from 'react'
import { Link } from 'react-router-dom'

const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to elevate your operations?
        </h2>
        <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
          No obligation – just expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="btn bg-white text-primary-600 hover:bg-primary-100 hover:text-primary-700 hover:font-bold"
          >
            Schedule Your Free Call
          </Link>
          <button className="px-6 py-3 border-2 border-white text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Download Strategy Guide
          </button>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA 