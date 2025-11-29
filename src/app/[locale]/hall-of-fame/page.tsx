'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Star, Award, Users, Presentation } from "lucide-react"
import Navbar from "@/components/navbar"
import LazyAnimatedBackground from "@/components/lazy-animated-background"
import PageHeader from "@/components/page-header"
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface TeamMember {
  name: string
  role?: string
}

interface TeamData {
  teamName: string
  university: string
  members: TeamMember[]
  logoPath?: string
  projectTitle?: string
  customTitle?: string
}

export default function HallOfFame() {
  const t = useTranslations('hallOfFame')

  // Template data - replace with actual winner data
  const champions: TeamData[] = [
    {
      teamName: "UX WIZARD",
      university: "",
      members: [
        { name: "Salsabiila Bazaluna Febriadini" },
        { name: "Mumtaz Aaliyah Fasya" }
      ],
      // logoPath: "/winners/team1-logo.png",
      projectTitle: "MALA"
    },
    {
      teamName: "CTRL + WIN",
      university: "",
      members: [
        { name: "Raja Zulkarnain Hasibuan" },
        { name: "Daffa Kisstanta Taufik" },
        { name: "Jasmine Varsha Ananda" }
      ],
      // logoPath: "/winners/team2-logo.png",
      projectTitle: "SafeZone"
    },
    {
      teamName: "Seng Agak Lucu",
      university: "",
      members: [
        { name: "Ardian Syah Pratama Putra" },
        { name: "Naufal Dzaki Al Thaafah" },
        { name: "Moh. Aliiffil Qodri VanozaAraby" }
      ],
      // logoPath: "/winners/team3-logo.png",
      projectTitle: "Circle Pay"
    }
  ]

  const favoriteWinner: TeamData = {
    teamName: "Seng Agak Lucu",
    university: "",
    members: [
      { name: "Ardian Syah Pratama Putra" },
      { name: "Naufal Dzaki Al Thaafah" },
      { name: "Moh. Aliiffil Qodri VanozaAraby" }
    ],
    // logoPath: "/winners/favorite-logo.png",
    projectTitle: "Circle Pay"
  }

  const bestPresentation: TeamData = {
    teamName: "Tim Best Presentation",
    university: "Universitas Example",
    members: [
      { name: "Nama Anggota 1", role: "Team Leader" },
      { name: "Nama Anggota 2", role: "Developer" },
      { name: "Nama Anggota 3", role: "Designer" }
    ],
    logoPath: "/winners/best-presentation-logo.png",
    projectTitle: "Judul Project Best Presentation"
  }

  const finalists: TeamData[] = [
    {
      teamName: "Bella Chao",
      university: "",
      members: [
        { name: "Aji Fahreza NR" },
        { name: "Muhammad Rizel Al fikri" },
        { name: "Muhammad Hilmansyah Lukman" }
      ],
      // logoPath: "/winners/finalist1-logo.png",
      projectTitle: "Good Jobs",
      customTitle: "Runner Up 1"
    },
    {
      teamName: "Pixellote",
      university: "",
      members: [
        { name: "Elgi Nabil Ramadhan" }
      ],
      // logoPath: "/winners/finalist2-logo.png",
      projectTitle: "Hematize",
      customTitle: "Runner Up 2"
    }
  ]

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-400 to-yellow-600'
      case 2: return 'from-gray-300 to-gray-500'
      case 3: return 'from-amber-600 to-amber-800'
      default: return 'from-red-400 to-red-600'
    }
  }

  const getRankBadge = (rank: number) => {
    const colors = ['text-yellow-400 border-yellow-600/50', 'text-gray-300 border-gray-500/50', 'text-amber-600 border-amber-700/50']
    return colors[rank - 1] || 'text-red-400 border-red-600/50'
  }

  const TeamCard = ({ team, rank, isFavorite = false, isFinalist = false, isBestPresentation = false }: { team: TeamData, rank?: number, isFavorite?: boolean, isFinalist?: boolean, isBestPresentation?: boolean }) => (
    <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105 group scroll-animate enhanced-hover neon-border">
      <CardHeader className="text-center pb-4">
        {/* Logo/Image Placeholder */}
        <div className="w-32 h-32 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300 overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Placeholder - Replace with actual logo */}
            {team.logoPath && (
              <Image
                src={team.logoPath}
                alt={`${team.teamName} logo`}
                width={128}
                height={128}
                className="object-contain"
                onError={(e) => {
                  // Fallback to icon if image not found
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <Users className="w-12 h-12 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
            </div>
          </div>
        </div>

        {/* Rank Badge */}
        {rank && (
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${getRankBadge(rank)} bg-black/50 mb-3`}>
            <Trophy className="w-5 h-5" />
            <span className="font-bold">{t('badges.champion')} {rank}</span>
          </div>
        )}
        {isFavorite && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-600/50 text-purple-400 bg-black/50 mb-3">
            <Star className="w-5 h-5" />
            <span className="font-bold">{t('badges.favorite')}</span>
          </div>
        )}
        {isBestPresentation && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-600/50 text-green-400 bg-black/50 mb-3">
            <Presentation className="w-5 h-5" />
            <span className="font-bold">{t('badges.bestPresentation')}</span>
          </div>
        )}
        {isFinalist && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-600/50 text-blue-400 bg-black/50 mb-3">
            <Award className="w-5 h-5" />
            <span className="font-bold">{team.customTitle || t('badges.finalist')}</span>
          </div>
        )}

        <CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors duration-300">
          {team.teamName}
        </CardTitle>
        <CardDescription className="text-gray-400">
          {team.university}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Project Title */}
        {team.projectTitle && (
          <div className="text-center pb-2 border-b border-red-900/30">
            <p className="text-sm text-gray-500 mb-1">{t('labels.project')}</p>
            <p className="text-base text-red-300 font-medium">{team.projectTitle}</p>
          </div>
        )}

        {/* Team Members */}
        <div>
          <p className="text-sm text-gray-500 mb-3 text-center">{t('labels.teamMembers')}</p>
          <div className="space-y-2">
            {team.members.map((member, idx) => (
              <div key={idx} className="bg-red-900/10 rounded-lg p-3 border border-red-900/20">
                <p className="text-sm text-white font-medium">{member.name}</p>
                {member.role && (
                  <p className="text-xs text-gray-400">{member.role}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <>
      <Navbar />
      <LazyAnimatedBackground>
        <PageHeader
          title={t('title')}
          subtitle={t('subtitle')}
          badgeText={t('badge')}
          badgeIcon={<Trophy className="w-4 h-4 mr-2" />}
        />

        {/* Champions Section */}
        <section className="relative z-10 py-16 sm:py-20 bg-gradient-to-b from-black to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {t('sections.champions.title')}
                </span>
              </h2>
              <p className="text-lg text-gray-400">
                {t('sections.champions.subtitle')}
              </p>
            </div>

            {/* All Champions in a Row - Champion 1 Elevated */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 items-end">
              {/* Champion 2 */}
              <div className="scroll-animate">
                <TeamCard team={champions[1]} rank={2} />
              </div>

              {/* Champion 1 - Elevated */}
              <div className="scroll-animate -mt-8 md:-mt-12">
                <div className="transform hover:scale-105 transition-all duration-300">
                  <TeamCard team={champions[0]} rank={1} />
                </div>
              </div>

              {/* Champion 3 */}
              <div className="scroll-animate">
                <TeamCard team={champions[2]} rank={3} />
              </div>
            </div>

            {/* Special Awards Section */}
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-green-400 to-purple-600 bg-clip-text text-transparent">
                  {t('sections.specialAwards.title')}
                </span>
              </h2>
              <p className="text-lg text-gray-400">
                {t('sections.specialAwards.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-8 max-w-xl mx-auto mb-16">
              <TeamCard team={favoriteWinner} isFavorite />
              {/* <TeamCard team={bestPresentation} isBestPresentation /> */}
            </div>

            {/* Finalists Section */}
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {t('sections.finalists.title')}
                </span>
              </h2>
              <p className="text-lg text-gray-400">
                {t('sections.finalists.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {finalists.map((team, idx) => (
                <TeamCard key={idx} team={team} isFinalist />
              ))}
            </div>
          </div>
        </section>

        {/* Congratulations Section */}
        <section className="relative z-10 py-16 bg-gradient-to-r from-red-900/20 via-black to-red-900/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-5 scroll-animate">
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  {t('congratulations.title')}
                </span>
              </h2>
              <p className="text-lg mb-6 text-gray-300 leading-relaxed scroll-animate">
                {t('congratulations.message')}
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-red-600/10 to-transparent"></div>
        </section>
      </LazyAnimatedBackground>
    </>
  )
}
