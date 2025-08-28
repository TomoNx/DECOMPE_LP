'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Cpu, Target, Users, Download } from "lucide-react"
import Navbar from "@/components/navbar"
import LazyAnimatedBackground from "@/components/lazy-animated-background"
import ContactSection from "@/components/contact-section"
import { useTranslations } from 'next-intl'
import Link from "next/link"
import { useParams } from 'next/navigation'

export default function Home() {
  const t = useTranslations('hero')
  const tSections = useTranslations('sections')
  const tCommon = useTranslations('common')
  const params = useParams()
  const locale = (params?.locale as string) || 'en'

  return (
    <>
      <Navbar />
      <LazyAnimatedBackground>
        {/* Hero Section */}
        <section className="relative z-10 overflow-hidden min-h-[85vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-black to-red-600/20"></div>
          <div className="relative container mx-auto px-4 py-8 md:py-12 text-center flex flex-col justify-center min-h-[75vh]">
            <div className="mb-6 scroll-animate -mt-4">
              <Badge className="mb-3 bg-red-600/20 text-red-400 border-red-600/50 hover:bg-red-600/30 backdrop-blur-sm">
                <Cpu className="w-4 h-4 mr-2" />
                {t('nationalCompetition')}
              </Badge>
            </div>

            <div className="absolute top-16 left-8 w-16 h-16 border-2 border-red-600/30 rotate-45"></div>
            <div className="absolute bottom-16 right-8 w-14 h-14 border-2 border-red-600/30 rotate-12"></div>
            
            <div className="relative scroll-animate -mt-3">
              <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent animate-pulse cyber-text">
                  DECOMPE
                </span>
                <span className="text-white ml-4">4.0</span>
              </h1>
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-24 h-24 bg-red-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative mb-6 scroll-animate -mt-2">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-red-800/20 px-5 py-2 rounded-full border border-red-600/30 backdrop-blur-sm">
                <Cpu className="w-5 h-5 text-red-400" />
                <p className="text-lg md:text-xl font-light text-red-300">
                  {t('subtitle')}
                </p>
              </div>
            </div>
            
            <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-gray-300 leading-relaxed scroll-animate -mt-1">
              {t('description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center scroll-animate">
              <a href="https://example.com/flyer.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-base px-8 py-3 rounded-lg border border-red-500/50 shadow-md shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-105 enhanced-hover neon-border">
                  <Download className="mr-2 h-4 w-4" />
                  {t('downloadFlyerButton')}
                </Button>
              </a>
              <Link href={`/${locale}/about`}>
                <Button size="lg" variant="outline" className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 text-base px-8 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 enhanced-hover neon-border">
                  <Target className="mr-2 h-4 w-4" />
                  {t('exploreButton')}
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Geometric Decorations */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

          
        </section>

        {/* Quick Info Section */}
        <section className="relative z-10 py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                    <Cpu className="w-8 h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{tSections('innovation.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    {tSections('innovation.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                    <Users className="w-8 h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{tSections('community.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    {tSections('community.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                    <Target className="w-8 h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{tSections('impact.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    {tSections('impact.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 scroll-animate">
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  {tCommon('readyToJoin')}
                </span>
              </h2>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed scroll-animate">
                {tCommon('joinDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 scroll-animate">
                <a href="https://example.com/flyer.pdf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-base px-10 py-3 rounded-lg border border-red-500/50 shadow-md shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-105">
                    <Download className="mr-2 h-5 w-5" />
                    {tCommon('downloadFlyer')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link href={`/${locale}/timeline`}>
                  <Button size="lg" variant="outline" className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 text-base px-10 py-3 rounded-lg backdrop-blur-sm transition-all duration-300">
                    <Cpu className="mr-2 h-5 w-5" />
                    {tCommon('learnMore')}
                  </Button>
                </Link>
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