'use client'

import { useState, useEffect, useCallback, useMemo, memo } from 'react'
import { Menu, X, Zap, Shield, Cpu, Target } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import LanguageSwitcher from '@/components/language-switcher'

// Memoized navigation item component for better performance
const NavItem = memo(({ item, currentPath, locale, router }: { item: any, currentPath: string, locale: string, router: any }) => {
  const handleClick = useCallback(() => {
    if (item.path === '/') {
      window.location.href = `/${locale}`
    } else {
      router.push(`/${locale}${item.path}`)
    }
  }, [item.path, locale, router])

  return (
    <div
      onClick={handleClick}
      className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden cursor-pointer ${
        currentPath === item.path
          ? 'text-red-400'
          : 'text-gray-400 hover:text-red-400'
      }`}
    >
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        currentPath === item.path
          ? 'bg-red-600/20 border border-red-600/30 shadow-lg shadow-red-600/20'
          : 'bg-transparent group-hover:bg-red-600/10'
      }`}></div>
      <div className="relative flex items-center gap-2">
        <div className={`transition-all duration-300 ${
          currentPath === item.path ? 'text-red-400' : 'text-gray-500 group-hover:text-red-400'
        }`}>
          {item.icon}
        </div>
        <span className="font-medium">{item.label}</span>
        {currentPath === item.path && (
          <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
        )}
      </div>
    </div>
  )

})

// Memoized mobile nav item
const MobileNavItem = memo(({ item, currentPath, locale, index, isOpen, onClose, router }: { 
  item: any, currentPath: string, locale: string, index: number, isOpen: boolean, onClose: () => void, router: any
}) => {
  const handleClick = useCallback(() => {
    if (item.path === '/') {
      window.location.href = `/${locale}`
    } else {
      router.push(`/${locale}${item.path}`)
    }
    onClose()
  }, [item.path, locale, router, onClose])

  return (
    <div
      onClick={handleClick}
      className={`group relative flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-500 overflow-hidden cursor-pointer transform ${
        isOpen 
          ? 'translate-x-0 opacity-100' 
          : 'translate-x-4 opacity-0'
      } ${
        currentPath === item.path
          ? 'text-red-400'
          : 'text-gray-400 hover:text-red-400'
      }`}
      style={{
        transitionDelay: isOpen ? `${index * 100}ms` : '0ms'
      }}
    >
      <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
        currentPath === item.path
          ? 'bg-red-600/20 border border-red-600/30 shadow-lg shadow-red-600/20'
          : 'bg-transparent group-hover:bg-red-600/10'
      }`}></div>
      <div className="relative flex items-center gap-3 w-full">
        <div className={`p-1.5 rounded-lg ${
          currentPath === item.path 
            ? 'bg-red-600/20 text-red-400' 
            : 'bg-gray-800/50 text-gray-500 group-hover:bg-red-600/20 group-hover:text-red-400'
        } transition-colors duration-300`}>
          {item.icon}
        </div>
        <span className="font-medium flex-1">{item.label}</span>
        {currentPath === item.path && (
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
        )}
      </div>
    </div>
  )

})

function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Memoize current path calculation
  const currentPath = useMemo(() => {
    return pathname.replace(`/${locale}`, '') || '/'
  }, [pathname, locale])

  // Memoize navigation items
  const navItems = [
    { path: '/', label: t('home'), icon: <Zap className="w-4 h-4" /> },
    { path: '/about', label: t('about'), icon: <Shield className="w-4 h-4" /> },
    { path: '/timeline', label: t('timeline'), icon: <Cpu className="w-4 h-4" /> },
  ]

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY > 20
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled)
    }
  }, [isScrolled])

  const handleMenuToggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const handleMenuClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const handleHomeClick = useCallback(() => {
    window.location.href = `/${locale}`
  }, [locale])

  useEffect(() => {
    let ticking = false
    
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', scrollHandler, { passive: true })

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [handleScroll])

  return (
    <>
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-lg border-b border-red-600/20 shadow-lg shadow-red-600/10' 
            : 'bg-transparent'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Animated Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 transition-opacity duration-500 ${isScrolled || isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div 
              className="flex items-center group transition-all duration-300 hover:scale-105 cursor-pointer flex-shrink-0"
              onClick={handleHomeClick}
            >
              <Image 
                src="/logo.svg" 
                alt="DECOMPE Logo" 
                width={70}
                height={70} 
                className="sm:w-[85px] sm:h-[85px] transition-all duration-300 group-hover:scale-110" 
                priority
              />
              <div className="flex flex-col ml-1 sm:ml-2">
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent leading-tight">
                  DECOMPE
                </span>
                <span className="text-[10px] sm:text-xs text-red-400 font-mono tracking-wider">
                  v4.0
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
                {navItems.map((item) => (
                  <NavItem 
                    key={item.path} 
                    item={item} 
                    currentPath={currentPath} 
                    locale={locale}
                    router={router}
                  />
                ))}              
            </div>

            {/* Language Switcher - Desktop */}
            <div className="hidden lg:flex items-center justify-end flex-shrink-0">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleMenuToggle}
              className="lg:hidden p-2 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-600/10 transition-all duration-300 relative overflow-hidden group flex-shrink-0"
            >
              <div className="absolute inset-0 bg-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className={`transition-all duration-300 transform ${
                  isOpen ? 'rotate-180 scale-105' : 'rotate-0 scale-100'
                }`}>
                  {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation*/}
        <div className={`lg:hidden bg-black/95 backdrop-blur-lg border-t border-red-600/20 relative overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen 
            ? 'max-h-96 opacity-100 translate-y-0' 
            : 'max-h-0 opacity-0 -translate-y-4'
        }`}>
          <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent"></div>
          <div className={`container mx-auto px-4 py-6 relative z-10 transition-all duration-500 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}>
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <MobileNavItem 
                  key={item.path}
                  item={item}
                  currentPath={currentPath}
                  locale={locale}
                  index={index}
                  isOpen={isOpen}
                  onClose={handleMenuClose}
                  router={router}
                />
              ))}
            </div>
            <div className={`mt-4 pt-4 border-t border-red-600/20 transition-all duration-500 transform ${
              isOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-4 opacity-0'
            }`}
            style={{
              transitionDelay: isOpen ? `${navItems.length * 100 + 200}ms` : '0ms'
            }}>
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}

export default memo(Navbar)