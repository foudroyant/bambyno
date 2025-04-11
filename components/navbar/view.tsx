'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-purple-600">Bambyno</Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-purple-600 transition">Services</Link>
            <Link href="#about" className="text-gray-700 hover:text-purple-600 transition">À Propos</Link>
            <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition">Contact</Link>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {/* Icône menu burger */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white pb-4 px-4`}>
        <Link href="#services" className="block py-2 text-gray-700 hover:text-purple-600 transition">Services</Link>
        <Link href="#about" className="block py-2 text-gray-700 hover:text-purple-600 transition">À Propos</Link>
        <Link href="#contact" className="block py-2 text-gray-700 hover:text-purple-600 transition">Contact</Link>
      </div>
    </nav>
  )
}