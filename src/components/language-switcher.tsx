'use client'

import { useState } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe, Check } from 'lucide-react'
import { locales } from '@/routing'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' }
]

export default function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (newLocale: string) => {
    // Remove current locale from pathname if it exists
    const currentPath = pathname.replace(`/${locale}`, '') || '/'
    
    // Create new URL with new locale
    const newUrl = currentPath === '/' ? `/${newLocale}` : `/${newLocale}${currentPath}`
    
    // Use window.location.href for a clean page transition
    window.location.href = newUrl
    setIsOpen(false)
  }

  const currentLanguage = languages.find(lang => lang.code === locale)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 backdrop-blur-sm transition-all duration-300 enhanced-hover neon-border"
        >
          <Globe className="w-4 h-4 mr-2" />
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-black/90 border-red-900/30 backdrop-blur-sm"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="text-gray-300 hover:text-red-400 hover:bg-red-900/20 cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span>{language.flag}</span>
              <span>{language.name}</span>
            </div>
            {locale === language.code && (
              <Check className="w-4 h-4 text-red-400" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}