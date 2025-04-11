'use client'

import { useEffect } from 'react'

export const useIntersectionObserver = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          
          // Animation des barres de progression
          const progressBars = entry.target.querySelectorAll('.animate-progress')
          progressBars.forEach((bar: any) => {
            const progressValue = bar.getAttribute('data-progress') || '100%'
            bar.style.width = progressValue
          })
        }
      })
    }, { threshold: 0.1 })

    fadeElements.forEach(el => observer.observe(el))

    return () => {
      fadeElements.forEach(el => observer.unobserve(el))
    }
  }, [])
}

export const useParallaxEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector('.parallax') as HTMLElement
      if (parallax) {
        const scrollPosition = window.pageYOffset
        parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}