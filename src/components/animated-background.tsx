'use client'

import { useEffect, useState } from 'react'

interface AnimatedBackgroundProps {
  children: React.ReactNode
}

export default function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
      setShowScrollTop(scrollTop > 500)
    }

    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate')
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', animateOnScroll)
    
    handleScroll()
    animateOnScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', animateOnScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      
      {/* Scroll to Top Button */}
      <div className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`} onClick={scrollToTop} />

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-red-900/10 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIiBkPSJNMzYgMzRjMC0yLjIwOTEzOSAxLjc5MDg2MS00IDQtNHM0IDEuNzkwODYxIDQgNC0xLjc5MDg2MSA0LTQgNC00IDEuNzkwODYxLTQgNHptMCA2Yy0xLjEwNDU2OSAwLTItLjg5NTQzMS0yLTJzLjg5NTQzMS0yIDItMiAyIC44OTU0MzEgMiAyLS44OTU0MzEgMi0yIDJ6Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          
          {/* Enhanced Animated particles */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                  opacity: Math.random() * 0.8 + 0.2,
                  background: `radial-gradient(circle, ${i % 3 === 0 ? '#FF0000' : i % 3 === 1 ? '#DC143C' : '#8B0000'} 0%, transparent 70%)`,
                  boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 3 === 0 ? '#FF0000' : i % 3 === 1 ? '#DC143C' : '#8B0000'}`
                }}
              />
            ))}
          </div>
          
          {/* Matrix rain effect */}
          <div className="matrix-rain">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="matrix-column"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  fontSize: `${Math.random() * 10 + 10}px`
                }}
              >
                {Array.from({ length: 20 }, () => 
                  String.fromCharCode(Math.random() * 94 + 33)
                ).join('')}
              </div>
            ))}
          </div>
          
          {/* Glitch effect overlay */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 mix-blend-overlay">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-glitch"></div>
          </div>
        </div>
        
        {children}
      </div>
    </>
  )
}