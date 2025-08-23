'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import LazyAnimatedBackground from "@/components/lazy-animated-background"
import PageHeader from "@/components/page-header"
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('about')
  return (
    <>
      <Navbar />
      <LazyAnimatedBackground>
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
          badgeText={t('badge')}
          badgeIcon={<Shield className="w-4 h-4 mr-2" />}
        />

        {/* Evolution Content */}
        <section className="relative z-10 py-16 sm:py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105 group scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300">
                    <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent cyber-text">1.0</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white group-hover:text-red-400 transition-colors duration-300">{t('evolution.decompe1.title')}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-400">{t('evolution.decompe1.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {t('evolution.decompe1.description')}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-red-400 mb-2 text-sm sm:text-base">{t('evolution.decompe1.achievements')}</h4>
                    <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                      <li>• {t('evolution.decompe1.participants')}</li>
                      <li>• {t('evolution.decompe1.universities')}</li>
                      <li>• {t('evolution.decompe1.mentors')}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105 group relative scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300">
                    <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent cyber-text">2.0</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white group-hover:text-red-400 transition-colors duration-300">{t('evolution.decompe2.title')}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-400">{t('evolution.decompe2.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {t('evolution.decompe2.description')}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-red-400 mb-2 text-sm sm:text-base">{t('evolution.decompe2.achievements')}</h4>
                    <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                      <li>• {t('evolution.decompe2.participants')}</li>
                      <li>• {t('evolution.decompe2.partners')}</li>
                      <li>• {t('evolution.decompe2.workshops')}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105 group scroll-animate enhanced-hover neon-border sm:col-span-2 lg:col-span-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300">
                    <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent cyber-text">3.0</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-white group-hover:text-red-400 transition-colors duration-300">{t('evolution.decompe3.title')}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-400">{t('evolution.decompe3.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {t('evolution.decompe3.description')}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-red-400 mb-2 text-sm sm:text-base">{t('evolution.decompe3.achievements')}</h4>
                    <ul className="text-xs sm:text-sm text-gray-400 space-y-1">
                      <li>• {t('evolution.decompe3.participants')}</li>
                      <li>• {t('evolution.decompe3.mentors')}</li>
                      <li>• {t('evolution.decompe3.alumni')}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Theme Section */}
        <section className="relative z-10 py-20 bg-gradient-to-r from-black via-red-900/10 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                  {t('themeTitle')}
                </span>
              </h2>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-red-800/20 px-8 py-4 rounded-full border border-red-600/30 backdrop-blur-sm">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-red-300">{t('themeSubtitle')}</h3>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-75"></div>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto scroll-animate">
              <div className="bg-gradient-to-br from-red-900/10 to-black border border-red-900/30 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-lg text-gray-300 text-center leading-relaxed mb-6">
                  {t('themeDescription1')}
                </p>
                <p className="text-lg text-gray-300 text-center leading-relaxed">
                  {t('themeDescription2')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="relative z-10 py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                {t('targetTitle')}
              </h2>
              <p className="text-lg text-gray-400">
                {t('targetSubtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300 group-hover:scale-110">
                    <Users className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300">{t('targets.digitalNatives.title')}</CardTitle>
                  <CardDescription className="text-gray-400">{t('targets.digitalNatives.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 text-center">
                    {t('targets.digitalNatives.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300 group-hover:scale-110">
                    <Zap className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300">{t('targets.students.title')}</CardTitle>
                  <CardDescription className="text-gray-400">{t('targets.students.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 text-center">
                    {t('targets.students.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300 group-hover:scale-110">
                    <Shield className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300">{t('targets.professionals.title')}</CardTitle>
                  <CardDescription className="text-gray-400">{t('targets.professionals.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 text-center">
                    {t('targets.professionals.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300 group-hover:scale-110">
                    <Users className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300">{t('targets.hobbyists.title')}</CardTitle>
                  <CardDescription className="text-gray-400">{t('targets.hobbyists.subtitle')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 text-center">
                    {t('targets.hobbyists.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </LazyAnimatedBackground>
    </>
  )
}