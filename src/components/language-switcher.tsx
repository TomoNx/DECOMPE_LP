'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { memo, useCallback } from 'react'

const LanguageSwitcher = memo(() => {
  const locale = useLocale()
  const pathname = usePathname()

  const languages = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'id', name: 'ID', flag: '🇮🇩' }
  ] as const

  const handleLanguageChange = useCallback((newLocale: string) => {
    if (newLocale === locale) return
    
    // Get the actual browser URL path
    const fullPath = window.location.pathname
    
    // Remove current locale from the full path
    const pathWithoutLocale = fullPath.replace(/^\/[a-z]{2}(\/.*)?$/, '$1') || '/'
    
    // Create new URL with the selected locale
    const newUrl = pathWithoutLocale === '/' ? `/${newLocale}` : `/${newLocale}${pathWithoutLocale}`
    
    // Use window.location.href for clean page transition
    window.location.href = newUrl
  }, [locale])

  return (
    <div className="relative">
      {/* Toggle Switch Container */}
      <div className="relative flex items-center bg-black/40 border border-red-600/30 rounded-full p-1 backdrop-blur-sm">
        {/* Background Slider */}
        <div 
          className={`absolute top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-700 rounded-full transition-all duration-300 ease-in-out shadow-lg shadow-red-600/25 h-6 sm:h-8 ${
            locale === 'en' 
              ? 'left-1 w-10 sm:w-12' 
              : 'left-[2.75rem] sm:left-[3.25rem] w-10 sm:w-12'
          }`}
        />
        
        {/* Language Options */}
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`relative z-10 flex items-center justify-center w-10 h-6 sm:w-12 sm:h-8 rounded-full transition-all duration-300 cursor-pointer touch-manipulation ${
              locale === language.code 
                ? 'text-white font-medium' 
                : 'text-gray-400 hover:text-red-300'
            }`}
          >
            <span className="text-xs font-medium">{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
})

LanguageSwitcher.displayName = 'LanguageSwitcher'

export default LanguageSwitcher