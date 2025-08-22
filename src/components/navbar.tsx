'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Zap, Shield, Cpu, Target, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activePath, setActivePath] = useState('/')
  const [isHovered, setIsHovered] = useState(false)

  const navItems = [
    { path: '/', label: 'Home', icon: <Zap className="w-4 h-4" /> },
    { path: '/about', label: 'About', icon: <Shield className="w-4 h-4" /> },
    { path: '/timeline', label: 'Timeline', icon: <Cpu className="w-4 h-4" /> },
    { path: '/registration', label: 'Registration', icon: <Target className="w-4 h-4" /> },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handlePathChange = () => {
      setActivePath(window.location.pathname)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('popstate', handlePathChange)
    handlePathChange()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('popstate', handlePathChange)
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
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group transition-all duration-300 hover:scale-105"
            >
              {/* Langsung letakkan Image di sini */}
              <Image 
                src="/logo.svg" 
                alt="DECOMPE Logo" 
                width={85} //Size
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
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                    activePath === item.path
                      ? 'text-red-400'
                      : 'text-gray-400 hover:text-red-400'
                  }`}
                >
                  {/* Background effect */}
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    activePath === item.path
                      ? 'bg-red-600/20 border border-red-600/30 shadow-lg shadow-red-600/20'
                      : 'bg-transparent group-hover:bg-red-600/10'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-2">
                    <div className={`transition-all duration-300 ${
                      activePath === item.path ? 'text-red-400' : 'text-gray-500 group-hover:text-red-400'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                    {activePath === item.path && (
                      <div className="w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/registration"
                className="group relative flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>Join Now</span>
                </div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-red-600/20 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-600/5 to-transparent"></div>
            
            <div className="container mx-auto px-4 py-6 relative z-10">
              <div className="flex flex-col gap-3">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                      activePath === item.path
                        ? 'text-red-400'
                        : 'text-gray-400 hover:text-red-400'
                    }`}
                  >
                    {/* Background effect */}
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      activePath === item.path
                        ? 'bg-red-600/20 border border-red-600/30 shadow-lg shadow-red-600/20'
                        : 'bg-transparent group-hover:bg-red-600/10'
                    }`}></div>
                    
                    {/* Content */}
                    <div className="relative flex items-center gap-3 w-full">
                      <div className={`p-2 rounded-lg ${
                        activePath === item.path 
                          ? 'bg-red-600/20 text-red-400' 
                          : 'bg-gray-800/50 text-gray-500 group-hover:bg-red-600/20 group-hover:text-red-400'
                      } transition-colors duration-300`}>
                        {item.icon}
                      </div>
                      <span className="font-medium flex-1">{item.label}</span>
                      {activePath === item.path && (
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-red-600/20">
                <Link
                  href="/registration"
                  onClick={() => setIsOpen(false)}
                  className="group relative w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="relative flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span>Join Now</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </div>
                </Link>
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