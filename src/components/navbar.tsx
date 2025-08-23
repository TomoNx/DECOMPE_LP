'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Zap, Shield, Cpu, Target } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import LanguageSwitcher from '@/components/language-switcher'

export default function Navbar() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Remove locale from pathname for comparison
  const currentPath = pathname.replace(`/${locale}`, '') || '/'

  const navItems = [
    { path: '/', label: t('home'), icon: <Zap className="w-4 h-4" /> },
    { path: '/about', label: t('about'), icon: <Shield className="w-4 h-4" /> },
    { path: '/timeline', label: t('timeline'), icon: <Cpu className="w-4 h-4" /> },
    { path: '/registration', label: t('registration'), icon: <Target className="w-4 h-4" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-lg border-b border-red-600/20 shadow-lg shadow-red-600/10' 
            : 'bg-transparent'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 transition-opacity duration-500 ${isScrolled || isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-between h-16">
            
            {/* Newgrub (Mix Logo and Nav)*/}
            <div className="flex items-center">
              {/* Logo */}
              <div 
                onClick={() => window.location.href = '/'}
                className="flex items-center group transition-all duration-300 hover:scale-105 cursor-pointer ml-2"
              >
                <Image 
                  src="/logo.svg" 
                  alt="DECOMPE Logo" 
                  width={85}
                  height={85} 
                  className="transition-all duration-300 group-hover:scale-110" 
                  priority
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent leading-tight">
                    DECOMPE
                  </span>
                  <span className="text-xs text-red-400 font-mono tracking-wider">
                    v4.0
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1 ml-16">
                {navItems.map((item, index) => {
                  if (item.path === '/') {
                    return (
                      <div
                        key={item.path}
                        onClick={() => window.location.href = '/'}
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
                  }
                  
                  return (
                    <Link
                      key={item.path}
                      href={`/${locale}${item.path}`}
                      className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
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
                    </Link>
                  )
                })}
              </div>
            </div>


            {/* Language Switcher*/}
            <div className="hidden md:flex items-center justify-end mr-2">
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-600/10 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Tidak ada perubahan */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-red-600/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent"></div>
            <div className="container mx-auto px-4 py-6 relative z-10">
              <div className="flex flex-col gap-3">
                {navItems.map((item, index) => {
                  if (item.path === '/') {
                    return (
                      <div
                        key={item.path}
                        onClick={() => {
                          window.location.href = '/'
                          setIsOpen(false)
                        }}
                        className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden cursor-pointer ${
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
                        <div className="relative flex items-center gap-3 w-full">
                          <div className={`p-2 rounded-lg ${
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
                  }
                  
                  return (
                    <Link
                      key={item.path}
                      href={`/${locale}${item.path}`}
                      onClick={() => setIsOpen(false)}
                      className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
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
                      <div className="relative flex items-center gap-3 w-full">
                        <div className={`p-2 rounded-lg ${
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
                    </Link>
                  )
                })}
              </div>
              <div className="mt-6 pt-6 border-t border-red-600/20">
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>
    </>
  )
}