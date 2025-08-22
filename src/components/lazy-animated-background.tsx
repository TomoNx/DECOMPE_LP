'use client'

import { useEffect, useState, Suspense } from 'react'
import { Loader2 } from 'lucide-react'

interface LazyAnimatedBackgroundProps {
  children: React.ReactNode
}

// Heavy animated background component
function HeavyAnimatedBackground({ children }: LazyAnimatedBackgroundProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

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

    // Use requestAnimationFrame for better performance
    let rafId: number
    const optimizedScroll = () => {
      rafId = requestAnimationFrame(() => {
        handleScroll()
        animateOnScroll()
      })
    }

    window.addEventListener('scroll', optimizedScroll, { passive: true })
    
    // Initial calls
    handleScroll()
    animateOnScroll()

    return () => {
      window.removeEventListener('scroll', optimizedScroll)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Simplified background for reduced motion
  if (isReducedMotion) {
    return (
      <>
        {/* Simplified Scroll Progress Bar */}
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
        
        {/* Scroll to Top Button */}
        <div className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`} onClick={scrollToTop} />

        <div className="min-h-screen bg-black text-white overflow-x-hidden">
          {/* Simplified Background */}
          <div className="fixed inset-0 overflow-hidden z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-red-900/5 to-transparent"></div>
          </div>
          
          {children}
        </div>
      </>
    )
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      
      {/* Scroll to Top Button */}
      <div className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`} onClick={scrollToTop} />

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Optimized Animated Background */}
        <div className="fixed inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-red-900/10 to-transparent"></div>
          
          {/* Optimized particles - reduced count for performance */}
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 4 + 3}s`,
                  opacity: Math.random() * 0.6 + 0.2,
                  background: `radial-gradient(circle, ${i % 3 === 0 ? '#FF0000' : i % 3 === 1 ? '#DC143C' : '#8B0000'} 0%, transparent 70%)`,
                  boxShadow: `0 0 ${Math.random() * 8 + 3}px ${i % 3 === 0 ? '#FF0000' : i % 3 === 1 ? '#DC143C' : '#8B0000'}`,
                  willChange: 'transform, opacity',
                }}
              />
            ))}
          </div>
          
          {/* Optimized matrix rain - reduced count */}
          <div className="matrix-rain">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="matrix-column"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 15 + 10}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  fontSize: `${Math.random() * 8 + 8}px`,
                  willChange: 'transform',
                }}
              >
                {Array.from({ length: 15 }, () => 
                  String.fromCharCode(Math.random() * 94 + 33)
                ).join('')}
              </div>
            ))}
          </div>
          
          {/* Subtle glitch effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-3 mix-blend-overlay">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-glitch"></div>
          </div>
        </div>
        
        {children}
      </div>
    </>
  )
}

// Loading component
function BackgroundLoader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-0">
      <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
    </div>
  )
}

// Main component with lazy loading
export default function LazyAnimatedBackground({ children }: LazyAnimatedBackgroundProps) {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading delay for better perceived performance
    const timer = setTimeout(() => {
      setIsBackgroundLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {!isBackgroundLoaded && <BackgroundLoader />}
      <Suspense fallback={<BackgroundLoader />}>
        {isBackgroundLoaded && <HeavyAnimatedBackground>{children}</HeavyAnimatedBackground>}
      </Suspense>
    </>
  )
}