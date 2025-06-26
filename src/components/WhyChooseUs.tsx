import React from 'react'

const WhyChooseUs = () => {
  const features = [
    {
      title: "Industry Expertise",
      description: "Deep understanding of life sciences regulations and compliance requirements."
    },
    {
      title: "Data-Driven Approach",
      description: "Strategic decisions backed by comprehensive analysis and industry insights."
    },
    {
      title: "Compliance Focus",
      description: "Ensuring your operations meet all regulatory requirements while scaling."
    },
    {
      title: "Dedicated Support",
      description: "Personalized attention and ongoing guidance throughout your journey."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="h-12 w-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <div className="h-6 w-6 bg-primary-600 rounded-md"></div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs 