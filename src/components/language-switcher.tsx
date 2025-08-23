'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { locales } from '@/routing'

const languages = [
  { code: 'en', name: 'EN', flag: '🇺🇸' },
  { code: 'id', name: 'ID', flag: '🇮🇩' }
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return
    
    // Remove current locale from pathname if it exists
    const currentPath = pathname.replace(`/${locale}`, '') || '/'
    
    // Create new URL with new locale
    const newUrl = currentPath === '/' ? `/${newLocale}` : `/${newLocale}${currentPath}`
    
    // Use window.location.href for a clean page transition
    window.location.href = newUrl
  }

  return (
    <div className="relative">
      {/* Toggle Switch Container */}
      <div className="relative flex items-center bg-black/40 border border-red-600/30 rounded-full p-1 backdrop-blur-sm">
        {/* Background Slider */}
        <div 
          className={`absolute top-1 bottom-1 w-12 bg-gradient-to-r from-red-600 to-red-700 rounded-full transition-all duration-300 ease-in-out shadow-lg shadow-red-600/25 ${
            locale === 'en' ? 'left-1' : 'left-12'
          }`}
        />
        
        {/* Language Options */}
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`relative z-10 flex items-center justify-center w-12 h-8 rounded-full transition-all duration-300 cursor-pointer ${
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
}