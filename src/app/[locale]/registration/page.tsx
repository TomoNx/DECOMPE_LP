'use client'

import Navbar from "@/components/navbar"
import LazyAnimatedBackground from "@/components/lazy-animated-background"
import PageHeader from "@/components/page-header"
import { Target } from "lucide-react"
import { useTranslations } from 'next-intl'
import Link from "next/link"
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function RegistrationClosed() {
  const t = useTranslations('registration')
  const params = useParams()
  const locale = (params?.locale as string) || 'en'

  return (
    <>
      <Navbar />
      <LazyAnimatedBackground>
        <PageHeader
          title={t('closedTitle')}
          subtitle={t('closedSubtitle')}
          badgeText="Registration Closed"
          badgeIcon={<Target className="w-4 h-4 mr-2" />}
          showBackButton={true}
          showRegisterButton={false}
        />
        <section className="relative z-10 py-20 text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Registration is currently closed.</h2>
            <p className="text-lg text-gray-400 mb-8">
              Thank you for your interest. Please check back later for future events.
            </p>
            <Link href={`/${locale}/`}>
              <Button>
                Return to Homepage
              </Button>
            </Link>
          </div>
        </section>
      </LazyAnimatedBackground>
    </>
  )
}
