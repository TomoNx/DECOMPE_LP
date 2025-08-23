'use client'

import { useEffect, useState, Suspense, useCallback, useMemo, memo } from 'react'
import { Loader2 } from 'lucide-react'

interface LazyAnimatedBackgroundProps {
  children: React.ReactNode
}

// Heavy animated background component with performance optimizations
const HeavyAnimatedBackground = memo(({ children }: LazyAnimatedBackgroundProps) => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  // Memoize particle count based on device performance
  const particleCount = useMemo(() => {
    if (typeof window === 'undefined') return 8
    
    // Reduce particles on mobile devices and lower-end devices
    const isMobile = window.innerWidth <= 768
    const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4
    
    if (isMobile || isLowEnd) return 5
    return 8 // Reduced from 15 to 8 for better performance
  }, [])

  // Memoize matrix column count
  const matrixColumnCount = useMemo(() => {
    if (typeof window === 'undefined') return 3
    return window.innerWidth <= 768 ? 2 : 3 // Reduced from 5 to 3/2
  }, [])

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    setScrollProgress(progress)
    setShowScrollTop(scrollTop > 500)
  }, [])

  const animateOnScroll = useCallback(() => {
    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('visible')
      }
    })
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setIsReducedMotion(mediaQuery.matches)

    // Listen for changes to the media query
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Optimized scroll handler with throttling
    let rafId: number
    let ticking = false
    
    const optimizedScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(() => {
          handleScroll()
          animateOnScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', optimizedScroll, { passive: true })
    
    // Initial calls
    handleScroll()
    animateOnScroll()

    return () => {
      window.removeEventListener('scroll', optimizedScroll)
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
      if (rafId) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [handleScroll, animateOnScroll])

  // Memoize particles for better performance
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      animationDelay: Math.random() * 5,
      animationDuration: Math.random() * 3 + 4, // Slower animations
      opacity: Math.random() * 0.4 + 0.1, // Reduced opacity
      color: i % 3 === 0 ? '#FF0000' : i % 3 === 1 ? '#DC143C' : '#8B0000',
      boxShadowSize: Math.random() * 6 + 2, // Reduced glow
    }))
  }, [particleCount])

  // Memoize matrix columns
  const matrixColumns = useMemo(() => {
    return Array.from({ length: matrixColumnCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 10 + 15, // Slower
      animationDelay: Math.random() * 3,
      fontSize: Math.random() * 6 + 10, // Smaller font
      content: Array.from({ length: 10 }, () => // Reduced length
        String.fromCharCode(Math.random() * 94 + 33)
      ).join('')
    }))
  }, [matrixColumnCount])

  if (isReducedMotion) {
    return (
      <>
        {/* Simplified Scroll Progress Bar */}
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
        
        {/* Scroll to Top Button */}
        <div className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`} onClick={scrollToTop} />

        <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
          {/* Simplified Background */}
          <div className="fixed inset-0 overflow-hidden z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-red-900/5 to-transparent"></div>
          </div>
          
          <div className="relative z-10">
            {children}
          </div>
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

      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        {/* Optimized Animated Background */}
        <div className="fixed inset-0 overflow-hidden z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-red-900/8 to-transparent"></div>
          
          {/* Optimized particles - significantly reduced count */}
          <div className="absolute top-0 left-0 w-full h-full">
            {particles.map((particle) => (
              <div 
                key={particle.id}
                className="absolute rounded-full will-change-transform"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  top: `${particle.top}%`,
                  left: `${particle.left}%`,
                  animationDelay: `${particle.animationDelay}s`,
                  animationDuration: `${particle.animationDuration}s`,
                  opacity: particle.opacity,
                  background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
                  boxShadow: `0 0 ${particle.boxShadowSize}px ${particle.color}`,
                }}
              />
            ))}
          </div>
          
          {/* Optimized matrix rain - reduced count and complexity */}
          <div className="matrix-rain">
            {matrixColumns.map((column) => (
              <div
                key={column.id}
                className="matrix-column will-change-transform"
                style={{
                  left: `${column.left}%`,
                  animationDuration: `${column.animationDuration}s`,
                  animationDelay: `${column.animationDelay}s`,
                  fontSize: `${column.fontSize}px`,
                }}
              >
                {column.content}
              </div>
            ))}
          </div>
          
          {/* Subtle glitch effect - reduced intensity */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 mix-blend-overlay">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-glitch"></div>
          </div>
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </>
  )
})

// Loading component with memo
const BackgroundLoader = memo(() => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-0">
      <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
    </div>
  )
})

// Main component with immediate loading
export default function LazyAnimatedBackground({ children }: LazyAnimatedBackgroundProps) {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(true) // Start with true for immediate display

  // No loading delay - show content immediately
  useEffect(() => {
    setIsBackgroundLoaded(true)
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