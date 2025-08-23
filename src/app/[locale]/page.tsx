'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Cpu, Target, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import LazyAnimatedBackground from "@/components/lazy-animated-background"
import ContactSection from "@/components/contact-section"
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('hero')
  const tSections = useTranslations('sections')
  const tCommon = useTranslations('common')
  return (
    <>
      <Navbar />
      <LazyAnimatedBackground>
        {/* Hero Section */}
        <section className="relative z-10 overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-black to-red-600/20"></div>
          <div className="relative container mx-auto px-4 py-16 sm:py-24 md:py-32 text-center">
            <div className="mb-6 sm:mb-8 scroll-animate">
              <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600/50 hover:bg-red-600/30 backdrop-blur-sm text-xs sm:text-sm">
                <Cpu className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                {t('nationalCompetition')}
              </Badge>
            </div>

            <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 border-2 border-red-600/30 rotate-45"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-10 h-10 sm:w-16 sm:h-16 border-2 border-red-600/30 rotate-12"></div>
            
            <div className="relative scroll-animate">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent animate-pulse cyber-text">
                  DECOMPE
                </span>
                <span className="text-white ml-2 sm:ml-4">4.0</span>
              </h1>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-24 sm:h-24 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-16 h-16 sm:w-32 sm:h-32 bg-red-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative mb-6 sm:mb-8 scroll-animate">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-red-800/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-red-600/30 backdrop-blur-sm">
                <Cpu className="w-4 h-4 sm:w-6 sm:h-6 text-red-400" />
                <p className="text-lg sm:text-xl md:text-2xl font-light text-red-300">
                  {t('subtitle')}
                </p>
              </div>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed scroll-animate px-4">
              {t('description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center scroll-animate px-4">
              <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-lg border border-red-500/50 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-105 enhanced-hover neon-border">
                <Shield className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {t('registerButton')}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-lg backdrop-blur-sm transition-all duration-300 enhanced-hover neon-border">
                <Target className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {t('exploreButton')}
              </Button>
            </div>
          </div>
          
          {/* Geometric Decorations */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

          
        </section>

        {/* Quick Info Section */}
        <section className="relative z-10 py-16 sm:py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                    <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white">{tSections('innovation.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-300">
                    {tSections('innovation.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white">{tSections('community.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-300">
                    {tSections('community.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white">{tSections('impact.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-300">
                    {tSections('impact.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 sm:py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 scroll-animate">
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  {tCommon('readyToJoin')}
                </span>
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300 leading-relaxed scroll-animate px-4">
                {tCommon('joinDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 scroll-animate px-4">
                <Button size="lg" className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-lg border border-red-500/50 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-105">
                  <Shield className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  {tCommon('joinRevolutionNow')}
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-lg backdrop-blur-sm transition-all duration-300">
                  <Cpu className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  {tCommon('learnMore')}
                </Button>
              </div>
              
              <ContactSection />
            </div>
          </div>
          
          {/* Futuristic Bottom Border */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-red-600/10 to-transparent"></div>
        </section>
      </LazyAnimatedBackground>
    </>
  )
}