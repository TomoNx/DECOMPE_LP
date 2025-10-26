'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, BookOpen, CalendarDays, Download } from "lucide-react";
import Navbar from "@/components/navbar";
import LazyAnimatedBackground from "@/components/lazy-animated-background";
import PageHeader from "@/components/page-header";
import ContactSection from "@/components/contact-section";
import Timeline from "@/components/timeline";
import TimelineCard from "@/components/timeline-card";
import { timelineItems } from "@/config/timeline";
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function TimelinePage() {
  const t = useTranslations('timeline')
  const tCommon = useTranslations('common')
  const params = useParams()
  const locale = params?.locale as string || 'en'
  return (
    <>
      <Navbar />
      <LazyAnimatedBackground>
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
          badgeText={t('badge')}
          badgeIcon={<CalendarDays className="w-4 h-4 mr-2" />}
          showRegisterButton={true}
        />

        {/* Timeline Progress Section */}
        <section className="relative z-10 py-16 sm:py-20 bg-black">
          <div className="container mx-auto px-4">
            {/* Timeline Component */}
            <Timeline />

            {/* Timeline Cards - Desktop Only */}
            <div className="hidden md:block max-w-4xl mx-auto space-y-4 sm:space-y-6">
              {timelineItems.map((item, index) => (
                <TimelineCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="relative z-10 py-16 sm:py-20 bg-gradient-to-r from-black via-red-900/10 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                {t('importantDates')}
              </h2>
              <p className="text-base sm:text-lg text-gray-400">
                {t('importantDatesDesc')}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 sm:gap-6">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-red-400">{t('events.registrationPeriod.title')}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-400">{t('events.registrationPeriod.date')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {t('events.registrationPeriod.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-red-400">{t('events.selectionAnnouncement.title')}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-400">{t('events.selectionAnnouncement.date')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {t('events.selectionAnnouncement.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-red-400">{t('events.bootcampTraining.title')}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-400">{t('events.bootcampTraining.date')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {t('events.bootcampTraining.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg text-red-400">{t('events.competitionWeek.title')}</CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-400">{t('events.competitionWeek.date')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {t('events.competitionWeek.description')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-20 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  {t('readyToStart')}
                </span>
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                {t('readyToStartDesc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a href="https://drive.google.com/file/d/1UqpMHc8mF5oAlqI2WrAcIvKP5Wu9n5QN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 text-base px-10 py-3 rounded-lg backdrop-blur-sm transition-all duration-300">
                    <BookOpen className="mr-2 h-5 w-5" />
                    {tCommon('learnMore')}
                  </Button>
                </a>
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
  );
}