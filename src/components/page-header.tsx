import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTranslations } from 'next-intl'

interface PageHeaderProps {
  title: string
  subtitle: string
  badgeText: string
  badgeIcon: React.ReactNode
  showBackButton?: boolean
  showRegisterButton?: boolean
}

export default function PageHeader({ 
  title, 
  subtitle, 
  badgeText, 
  badgeIcon, 
  showBackButton = true,
  showRegisterButton = false 
}: PageHeaderProps) {
  const t = useTranslations('common')
  return (
    <section className="relative z-10 overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-black to-red-600/20"></div>
      <div className="relative container mx-auto px-4 py-24 text-center">
        <div className="mb-8 scroll-animate">
          <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600/50 hover:bg-red-600/30 backdrop-blur-sm">
            {badgeIcon}
            {badgeText}
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight scroll-animate">
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent cyber-text">
            {title}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed scroll-animate">
          {subtitle}
        </p>
        
        <div className="flex justify-center gap-4 scroll-animate">
          {showBackButton && (
            <Link href="/">
              <Button variant="outline" className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 px-8 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 enhanced-hover neon-border">
                <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
                {t('backToHome')}
              </Button>
            </Link>
          )}
          {showRegisterButton && (
            <Link href="/registration">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg border border-red-500/50 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-105 enhanced-hover neon-border">
                Register Now
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}