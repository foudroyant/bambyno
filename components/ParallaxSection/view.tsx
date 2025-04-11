'use client'

import { useEffect } from 'react'
import { useIntersectionObserver } from '@/lib/animations'

export default function ParallaxSection() {
  useIntersectionObserver()
  useParallaxEffect()

  return (
    <div className="parallax h-64" style={{ 
      backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative'
    }}>
      <div className="parallax-overlay absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h3 className="text-3xl font-bold mb-4 fade-in">Innovation & Excellence</h3>
          <p className="text-xl max-w-2xl mx-auto fade-in" style={{ transitionDelay: '0.3s' }}>
            Des solutions technologiques qui repoussent les limites du possible
          </p>
        </div>
      </div>
    </div>
  )
}

function useParallaxEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const parallax: Element | null = document.querySelector(".parallax");
      if (parallax) {
        const scrollPosition = window.pageYOffset
        parallax.setAttribute('style', `backgroundPositionY: ${scrollPosition * 0.5}px;`)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}