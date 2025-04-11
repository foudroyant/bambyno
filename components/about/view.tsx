'use client'

import Image from 'next/image'
import { useIntersectionObserver } from '@/lib/animations'

export default function About() {
  useIntersectionObserver()

  const skills = [
    "NextJS", "Flutter", "N8N", "FlutterFlow", "React-Native"
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 fade-in">
          <div className="relative">
            <Image 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
              alt="À propos" 
              width={400}
              height={400}
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        <div className="md:w-1/2 fade-in" style={{ transitionDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold mb-6">À Propos de Bambyno</h2>
          <p className="text-gray-600 mb-4">Passionné par les technologies web et l'intelligence artificielle, je mets mes compétences au service de vos projets les plus ambitieux.</p>
          <p className="text-gray-600 mb-6">Avec une approche centrée sur l'utilisateur et une attention particulière portée aux détails, je crée des solutions qui allient performance, élégance et fonctionnalité.</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium hover:scale-110 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div>
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-purple-600 rounded-full animate-progress" style={{ width: '0%', animationDelay: '0.5s' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>Compétences</span>
              <span>Expert</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}