import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Their expertise in regulatory compliance transformed our operations.",
      author: "Pacira",
      role: "Director, Regulatory Operations",
      company: "Pacira"
    },
    {
      quote: "The strategic guidance helped us scale efficiently while maintaining quality.",
      author: "Neslte Health Sciences",
      role: "Sr. Director of Regulatory Affairs",
      company: "Neslte Health Sciences"
    },
    {
      quote: "Outstanding support in navigating complex regulatory and IT requirements.",
      author: "Elevar Therapeutics",
      role: "GxP IT Systems Director",
      company: "Elevar Therapeutics"
    }
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-gray-50 border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="text-primary-600 mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                {/*<div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-100 to-primary-50 mr-4"></div> */}
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials 