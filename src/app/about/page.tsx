'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import LazyAnimatedBackground from "@/components/lazy-animated-background"
import PageHeader from "@/components/page-header"

export default function About() {
  return (
    <>
      <Navbar />
      <LazyAnimatedBackground>
        <PageHeader
          title="Evolution of DECOMPE"
          subtitle="Jejak perjalanan inovasi desain yang menginspirasi generasi digital Indonesia"
          badgeText="ABOUT DECOMPE"
          badgeIcon={<Shield className="w-4 h-4 mr-2" />}
        />

        {/* Evolution Content */}
        <section className="relative z-10 py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105 group scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300">
                    <span className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent cyber-text">1.0</span>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors duration-300">DECOMPE 1.0</CardTitle>
                  <CardDescription className="text-gray-400">The Beginning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    Genesis era desain digital. Fondasi pertama yang membangun ekosistem kreativitas UI/UX di kalangan mahasiswa Indonesia.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-red-400 mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• 50+ peserta pertama</li>
                      <li>• 5 universitas terlibat</li>
                      <li>• 3 mentor industri</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105 group relative scroll-animate enhanced-hover neon-border">
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300">
                    <span className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent cyber-text">2.0</span>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors duration-300">DECOMPE 2.0</CardTitle>
                  <CardDescription className="text-gray-400">Business Integration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    "Shaping Creative Business Technology" - Fusi antara desain, strategi bisnis, dan teknologi untuk solusi komprehensif.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-red-400 mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• 120+ peserta</li>
                      <li>• 10+ perusahaan partner</li>
                      <li>• 8 workshop intensif</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 hover:transform hover:scale-105 group scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300">
                    <span className="text-3xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent cyber-text">3.0</span>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-red-400 transition-colors duration-300">DECOMPE 3.0</CardTitle>
                  <CardDescription className="text-gray-400">Complete Ecosystem</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
                    Ekosistem lengkap: bootcamp intensif, kompetisi ketat, dan webinar inspiratif untuk pengalaman transformasi penuh.
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-red-400 mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• 200+ peserta</li>
                      <li>• 15+ mentor expert</li>
                      <li>• 50+ alumni bekerja di tech</li>
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
                  Digital Revolution Interface
                </span>
              </h2>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/20 to-red-800/20 px-8 py-4 rounded-full border border-red-600/30 backdrop-blur-sm">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-red-300">Tema DECOMPE 4.0</h3>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse delay-75"></div>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto scroll-animate">
              <div className="bg-gradient-to-br from-red-900/10 to-black border border-red-900/30 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-lg text-gray-300 text-center leading-relaxed mb-6">
                  Di tengah revolusi digital yang tak terbendung, <span className="text-red-400 font-semibold">antarmuka menjadi medan perang</span> antara manusia dan teknologi. 
                  DECOMPE 4.0 memanggil para <span className="text-red-400 font-semibold">pionir digital</span> untuk menciptakan desain yang tidak hanya memukau secara visual, 
                  tetapi juga <span className="text-red-400 font-semibold">transformatif secara fungsional</span>.
                </p>
                <p className="text-lg text-gray-300 text-center leading-relaxed">
                  Tema ini menantang kita untuk merancang masa depan di mana setiap interaksi digital menjadi pengalaman yang 
                  <span className="text-red-400 font-semibold">tak terlupakan</span>, setiap interface menjadi <span className="text-red-400 font-semibold">karya seni</span>, 
                  dan setiap inovasi menjadi <span className="text-red-400 font-semibold">warisan peradaban</span>.
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
                Target Visionaries
              </h2>
              <p className="text-lg text-gray-400">
                Siapa saja yang siap menjadi agen perubahan digital?
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300 group-hover:scale-110">
                    <Users className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300">Digital Natives</CardTitle>
                  <CardDescription className="text-gray-400">Siswa SMA/SMK</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 text-center">
                    Generasi muda yang lahir di era digital, siap menjelajahi batas-batas kreativitas teknologi.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300 group-hover:scale-110">
                    <Zap className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300">Mahasiswa</CardTitle>
                  <CardDescription className="text-gray-400">D3/D4/S1</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 text-center">
                    Calon profesional yang ingin mengasah skill dan membangun portfolio impian.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300 group-hover:scale-110">
                    <Shield className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300">Profesional</CardTitle>
                  <CardDescription className="text-gray-400">Fresh Graduate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 text-center">
                    Para profesional muda yang ingin meningkatkan kompetensi dan berkontribusi pada industri.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 group scroll-animate enhanced-hover neon-border">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30 group-hover:border-red-500/50 transition-all duration-300 group-hover:scale-110">
                    <Users className="w-8 h-8 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-lg text-white group-hover:text-red-400 transition-colors duration-300">Hobbyist</CardTitle>
                  <CardDescription className="text-gray-400">Self-taught</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300 text-center">
                    Para penggemar desain yang belajar mandiri dan ingin mengukur kemampuan di kompetisi nasional.
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