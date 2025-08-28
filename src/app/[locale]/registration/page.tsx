'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Cpu, Target, Sparkles, CalendarDays, Download } from "lucide-react"
import Navbar from "@/components/navbar"
import LazyAnimatedBackground from "@/components/lazy-animated-background"
import PageHeader from "@/components/page-header"
import ContactSection from "@/components/contact-section"
import Link from "next/link"
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function Registration() {
  const t = useTranslations('registration')
  const tCommon = useTranslations('common')
  const params = useParams()
  const locale = params.locale as string
  return (
    <>
      <Navbar />
      <LazyAnimatedBackground>
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
          badgeText={t('badge')}
          badgeIcon={<Target className="w-4 h-4 mr-2" />}
          showBackButton={true}
          showRegisterButton={false}
        />

        {/* Investment Packages */}
        <section className="relative z-10 py-16 sm:py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16 scroll-animate">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                {t('investmentPackages')}
              </h2>
              <p className="text-base sm:text-lg text-gray-400">
                {t('investmentDesc')}
              </p>
            </div>
            
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <Card className="bg-black/60 border-red-900/50 backdrop-blur-md hover:border-red-600/70 transition-all duration-300 text-center relative overflow-hidden group scroll-animate shadow-xl shadow-black/50">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg sm:text-xl text-white mb-2">{t('packages.earlyAccess.title')}</CardTitle>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">{t('packages.earlyAccess.price')}</div>
                  <CardDescription className="text-sm sm:text-base text-red-400">{t('packages.earlyAccess.period')}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="text-left space-y-2 sm:space-y-3 text-sm text-gray-300 mb-4 sm:mb-6">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{t('packages.earlyAccess.features.bootcamp')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{t('packages.earlyAccess.features.certificate')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{t('packages.earlyAccess.features.mentorship')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{t('packages.earlyAccess.features.resources')}</span>
                    </li>
                  </ul>
                  <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                    <p className="text-xs text-red-400 font-semibold">{t('packages.earlyAccess.savings')}</p>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white border border-red-500/50 text-sm sm:text-base shadow-lg">
                    {t('packages.earlyAccess.button')}
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border-2 border-red-600/70 backdrop-blur-md hover:border-red-500/90 transition-all duration-300 text-center relative overflow-hidden group scroll-animate shadow-xl shadow-black/50">
                <div className="absolute top-0 right-0 bg-red-600 text-black px-2 sm:px-3 py-1 text-xs font-bold rounded-bl-lg">
                  {t('packages.standard.popular')}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-lg sm:text-xl text-white mb-2">{t('packages.standard.title')}</CardTitle>
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">{t('packages.standard.price')}</div>
                  <CardDescription className="text-sm sm:text-base text-red-400">{t('packages.standard.period')}</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="text-left space-y-2 sm:space-y-3 text-sm text-gray-300 mb-4 sm:mb-6">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{t('packages.standard.features.bootcamp')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{t('packages.standard.features.certificate')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{t('packages.standard.features.mentorship')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{t('packages.standard.features.ebook')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{t('packages.standard.features.placement')}</span>
                    </li>
                  </ul>
                  <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-2 sm:p-3 mb-3 sm:mb-4">
                    <p className="text-xs text-red-400 font-semibold">{t('packages.standard.value')}</p>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white border border-red-500/50 text-sm sm:text-base shadow-lg">
                    {t('packages.standard.button')}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Registration Process */}
        <section className="relative z-10 py-20 bg-gradient-to-r from-black via-red-900/10 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                {t('process')}
              </h2>
              <p className="text-lg text-gray-400">
                {t('processDesc')}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                      <span className="text-2xl font-bold text-red-400">1</span>
                    </div>
                    <CardTitle className="text-lg text-white">{t('steps.fillForm.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">
                      {t('steps.fillForm.description')}
                    </p>
                    <div className="text-xs text-gray-400">
                      {t('steps.fillForm.time')}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                      <span className="text-2xl font-bold text-red-400">2</span>
                    </div>
                    <CardTitle className="text-lg text-white">{t('steps.payment.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">
                      {t('steps.payment.description')}
                    </p>
                    <div className="text-xs text-gray-400">
                      {t('steps.payment.time')}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                      <span className="text-2xl font-bold text-red-400">3</span>
                    </div>
                    <CardTitle className="text-lg text-white">{t('steps.confirmation.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">
                      {t('steps.confirmation.description')}
                    </p>
                    <div className="text-xs text-gray-400">
                      {t('steps.confirmation.time')}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="relative z-10 py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                {t('requirements')}
              </h2>
              <p className="text-lg text-gray-400">
                {t('requirementsDesc')}
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">{t('requirementsSections.technical.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      {t('requirementsSections.technical.items.laptop')}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      {t('requirementsSections.technical.items.software')}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      {t('requirementsSections.technical.items.internet')}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      {t('requirementsSections.technical.items.equipment')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">{t('requirementsSections.participant.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      {t('requirementsSections.participant.items.education')}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      {t('requirementsSections.participant.items.experience')}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      {t('requirementsSections.participant.items.portfolio')}
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 scroll-animate enhanced-hover neon-border md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">{t('requirementsSections.commitment.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      {t('requirementsSections.commitment.items.fullProgram')}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      {t('requirementsSections.commitment.items.timeAvailability')}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      {t('requirementsSections.commitment.items.activeParticipation')}
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      {t('requirementsSections.commitment.items.projectCompletion')}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 scroll-animate">
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  {tCommon('readyToTransform')}
                </span>
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed scroll-animate">
                {tCommon('transformDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 scroll-animate">
                <a href="https://example.com/flyer.pdf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-12 py-4 rounded-lg border border-red-500/50 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-105">
                    <Download className="mr-2 h-6 w-6" />
                    {tCommon('downloadFlyer')}
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </a>
                <Link href={`/${locale}/timeline`}>
                  <Button size="lg" variant="outline" className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 text-lg px-12 py-4 rounded-lg backdrop-blur-sm transition-all duration-300">
                    <CalendarDays className="mr-2 h-6 w-6" />
                    {tCommon('viewSchedule')}
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