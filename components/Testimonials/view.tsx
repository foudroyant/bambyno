'use client'

import { useIntersectionObserver } from '@/lib/animations'

export default function Testimonials() {
  useIntersectionObserver()

  const testimonials = [
    {
      rating: 5,
      quote: "Très professionnel pourtant la demande était atypique; Je recommande Foudroyant, un grand merci à lui.",
      author: "EQUINTAR",
      position: "Client Comeup"
    },
    {
      rating: 5,
      quote: "Le developpeur à repondu à mes attentes sur le dévellopement de mon extension. Il est à l'écoute. Je conseil de faire des fichiers word avec votre cahier des charges. Celà permet une meilleur comprehension.",
      author: "JeloueML",
      position: "Client Comeup"
    },
    {
      rating: 4.5,
      quote: "Toujours aussi rapide et efficace ! Merci . Je conseille vivement",
      author: "DjowYett",
      position: "Client Comuep"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 fade-in">Témoignages Clients</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto fade-in" style={{ transitionDelay: '0.2s' }}>
          Ce que disent mes clients à propos de mon travail
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 testimonial-card fade-in" 
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i}
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"} 
                      stroke="currentColor"
                      className="w-5 h-5 inline"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" 
                      />
                    </svg>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              
              <div className="flex items-center">
                <div className="bg-purple-100 text-purple-800 w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4">
                  {testimonial.author.substring(0, 2)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}