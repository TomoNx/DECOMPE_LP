'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Cpu, Target, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import LazyAnimatedBackground from "@/components/lazy-animated-background"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <LazyAnimatedBackground>
        {/* Hero Section */}
        <section className="relative z-10 overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-black to-red-600/20"></div>
          <div className="relative container mx-auto px-4 py-24 md:py-32 text-center">
            <div className="mb-8 scroll-animate">
              <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600/50 hover:bg-red-600/30 backdrop-blur-sm">
                <Cpu className="w-4 h-4 mr-2" />
                KOMPETISI UI/UX NASIONAL
              </Badge>
            </div>

            <div className="absolute top-20 left-10 w-20 h-20 border-2 border-red-600/30 rotate-45"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-red-600/30 rotate-12"></div>
            
            <div className="relative scroll-animate">
              <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent animate-pulse cyber-text">
                  DECOMPE
                </span>
                <span className="text-white ml-4">4.0</span>
              </h1>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-red-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="relative mb-8 scroll-animate">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-red-800/20 px-6 py-3 rounded-full border border-red-600/30 backdrop-blur-sm">
                <Cpu className="w-6 h-6 text-red-400" />
                <p className="text-xl md:text-2xl font-light text-red-300">
                  Digital Revolution Interface
                </p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed scroll-animate">
              Masuki era baru desain digital di mana <span className="text-red-400 font-semibold">inovasi</span> bertemu dengan <span className="text-red-400 font-semibold">antarmuka masa depan</span>. 
              Bersainglah dengan para visioner muda Indonesia dan ciptakan desain yang akan mendefinisikan ulang dunia digital!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center scroll-animate">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-10 py-4 rounded-lg border border-red-500/50 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-105 enhanced-hover neon-border">
                <Shield className="mr-2 h-5 w-5" />
                Daftar Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 text-lg px-10 py-4 rounded-lg backdrop-blur-sm transition-all duration-300 enhanced-hover neon-border">
                <Target className="mr-2 h-5 w-5" />
                Explore The Future
              </Button>
            </div>
          </div>
          
          {/* Geometric Decorations */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>

          
        </section>

        {/* Quick Info Section */}
        <section className="relative z-10 py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                    <Cpu className="w-8 h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Desain interface yang revolusioner untuk masa depan digital
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                    <Users className="w-8 h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Bergabung dengan visioner muda dari seluruh Indonesia
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 text-center scroll-animate enhanced-hover neon-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900/20 to-red-700/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-red-600/30">
                    <Target className="w-8 h-8 text-red-400" />
                  </div>
                  <CardTitle className="text-xl text-white">Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Ciptakan perubahan nyata di industri teknologi
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 scroll-animate">
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Ready to Join the Revolution?
                </span>
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed scroll-animate">
                Jangan lewatkan kesempatan untuk menjadi bagian dari DECOMPE 4.0 - 
                <span className="text-red-400 font-semibold"> tempat di mana mimpi digital menjadi kenyataan</span> dan 
                <span className="text-red-400 font-semibold"> visioner seperti Anda menemukan panggungnya</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 scroll-animate">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-12 py-4 rounded-lg border border-red-500/50 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-105">
                  <Shield className="mr-2 h-6 w-6" />
                  JOIN REVOLUTION NOW
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
                <Button size="lg" variant="outline" className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 text-lg px-12 py-4 rounded-lg backdrop-blur-sm transition-all duration-300">
                  <Cpu className="mr-2 h-6 w-6" />
                  LEARN MORE
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