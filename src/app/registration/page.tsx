'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Cpu, Target, Sparkles, CalendarDays } from "lucide-react"
import Navbar from "@/components/navbar"
import LazyAnimatedBackground from "@/components/lazy-animated-background"
import PageHeader from "@/components/page-header"
import ContactSection from "@/components/contact-section"
import Link from "next/link"

export default function Registration() {
  return (
    <>
      <Navbar />
      <LazyAnimatedBackground>
        <PageHeader
          title="Registration"
          subtitle="Investasi untuk transformasi karir digital Anda"
          badgeText="JOIN THE REVOLUTION"
          badgeIcon={<Target className="w-4 h-4 mr-2" />}
        >
          <Link href="/timeline">
            <Button variant="outline" className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 px-8 py-3 rounded-lg backdrop-blur-sm transition-all duration-300 enhanced-hover neon-border">
              <CalendarDays className="mr-2 h-5 w-5" />
              View Timeline
            </Button>
          </Link>
        </PageHeader>

        {/* Investment Packages */}
        <section className="relative z-10 py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Investment Packages
              </h2>
              <p className="text-lg text-gray-400">
                Pilih paket investasi yang sesuai dengan kebutuhan revolusi digital Anda
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center relative overflow-hidden group scroll-animate">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-white mb-2">Early Access</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">75K</div>
                  <CardDescription className="text-red-400">Until 15 NOV 2024</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="text-left space-y-3 text-sm text-gray-300 mb-6">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Full bootcamp access
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Digital certificate
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Mentorship opportunity
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Exclusive resources
                    </li>
                  </ul>
                  <div className="bg-red-900/10 border border-red-800/30 rounded-lg p-3 mb-4">
                    <p className="text-xs text-red-400 font-semibold">SAVE 25K FROM STANDARD PRICE</p>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white border border-red-500/50">
                    Secure Early Access
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-2 border-red-600/50 backdrop-blur-sm hover:border-red-500/70 transition-all duration-300 text-center relative overflow-hidden group scroll-animate">
                <div className="absolute top-0 right-0 bg-red-600 text-black px-3 py-1 text-xs font-bold rounded-bl-lg">
                  POPULAR
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-white mb-2">Standard</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">100K</div>
                  <CardDescription className="text-red-400">16 - 30 NOV 2024</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="text-left space-y-3 text-sm text-gray-300 mb-6">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Full bootcamp access
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Premium certificate
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Priority mentorship
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Free UI/UX ebook
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Job placement assistance
                    </li>
                  </ul>
                  <div className="bg-red-900/10 border border-red-800/30 rounded-lg p-3 mb-4">
                    <p className="text-xs text-red-400 font-semibold">BEST VALUE FOR COMPLETE EXPERIENCE</p>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white border border-red-500/50">
                    Join Standard
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center relative overflow-hidden group scroll-animate">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-xl text-white mb-2">Squad (3x)</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-2">250K</div>
                  <CardDescription className="text-red-400">Until 30 NOV 2024</CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="text-left space-y-3 text-sm text-gray-300 mb-6">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      All standard benefits
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Squad discount (save 50K)
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Group mentorship sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Team project guidance
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-red-400" />
                      Dedicated squad channel
                    </li>
                  </ul>
                  <div className="bg-red-900/10 border border-red-800/30 rounded-lg p-3 mb-4">
                    <p className="text-xs text-red-400 font-semibold">PER PERSON: ~83K ONLY</p>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white border border-red-500/50">
                    Build Squad
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
                Registration Process
              </h2>
              <p className="text-lg text-gray-400">
                3 langkah mudah untuk bergabung dengan revolusi digital
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                      <span className="text-2xl font-bold text-red-400">1</span>
                    </div>
                    <CardTitle className="text-lg text-white">Fill Form</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">
                      Lengkapi formulir pendaftaran dengan data diri dan portofolio (jika ada)
                    </p>
                    <div className="text-xs text-gray-400">
                      Estimasi waktu: 15 menit
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                      <span className="text-2xl font-bold text-red-400">2</span>
                    </div>
                    <CardTitle className="text-lg text-white">Payment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">
                      Pilih paket investasi dan lakukan pembayaran melalui metode yang tersedia
                    </p>
                    <div className="text-xs text-gray-400">
                      Estimasi waktu: 10 menit
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                      <span className="text-2xl font-bold text-red-400">3</span>
                    </div>
                    <CardTitle className="text-lg text-white">Confirmation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">
                      Tunggu konfirmasi dan akses ke materi persiapan eksklusif
                    </p>
                    <div className="text-xs text-gray-400">
                      Konfirmasi dalam 1x24 jam
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
                Requirements
              </h2>
              <p className="text-lg text-gray-400">
                Persyaratan untuk bergabung dengan DECOMPE 4.0
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">Technical Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      Laptop atau komputer dengan spesifikasi minimal
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      Software desain (Figma, Adobe XD, atau Sketch)
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      Koneksi internet stabil untuk online sessions
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      Webcam dan microphone untuk mentoring sessions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">Participant Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      Siswa SMA/SMK, mahasiswa, atau profesional muda
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      Pengalaman kurang dari 2 tahun di bidang UI/UX
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      Portfolio (tidak wajib, diutamakan)
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      Komitmen untuk mengikuti seluruh program
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
                  Ready to Transform Your Future?
                </span>
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed scroll-animate">
                Bergabunglah dengan DECOMPE 4.0 dan mulailah perjalanan Anda menjadi 
                <span className="text-red-400 font-semibold"> desainer interface masa depan</span> yang akan 
                <span className="text-red-400 font-semibold"> mengubah dunia digital</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 scroll-animate">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-12 py-4 rounded-lg border border-red-500/50 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-105">
                  <Shield className="mr-2 h-6 w-6" />
                  REGISTER NOW
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <Link href="/timeline">
                  <Button size="lg" variant="outline" className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 text-lg px-12 py-4 rounded-lg backdrop-blur-sm transition-all duration-300">
                    <CalendarDays className="mr-2 h-6 w-6" />
                    VIEW SCHEDULE
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