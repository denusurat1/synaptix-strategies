import React from 'react'

const logos = [
  { src: '/takeda-logo.svg', alt: 'Takeda' },
  { src: '/roche-logo.svg', alt: 'Roche' },
  { src: '/bms-logo.svg', alt: 'Bristol Myers Squibb' },
  { src: '/NHS-logo.svg', alt: 'Nestle Health Science' },
  { src: '/pacira-logo.svg', alt: 'Pacira' }
]

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="text-center text-gray-500 mb-8 text-xs uppercase tracking-wider font-medium">
          Delivered for leading life sciences organizations through consulting engagements*
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
