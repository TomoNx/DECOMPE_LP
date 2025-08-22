'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Cpu, CalendarDays } from "lucide-react";
import Navbar from "@/components/navbar";
import LazyAnimatedBackground from "@/components/lazy-animated-background";
import PageHeader from "@/components/page-header";
import ContactSection from "@/components/contact-section";
import Timeline from "@/components/timeline";
import TimelineCard from "@/components/timeline-card";
import { timelineItems } from "@/config/timeline";
import Link from "next/link";

export default function TimelinePage() {
  return (
    <>
      <Navbar />
      <LazyAnimatedBackground>
        <PageHeader
          title="Mission Timeline"
          subtitle="Jadwal operasional untuk revolusi digital Anda"
          badgeText="MISSION TIMELINE"
          badgeIcon={<CalendarDays className="w-4 h-4 mr-2" />}
          showRegisterButton={true}
        />

        {/* Timeline Progress Section */}
        <section className="relative z-10 py-20 bg-black">
          <div className="container mx-auto px-4">
            {/* Timeline Component */}
            <Timeline />

            {/* Timeline Cards - Desktop Only */}
            <div className="hidden md:block max-w-4xl mx-auto space-y-6">
              {timelineItems.map((item, index) => (
                <TimelineCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="relative z-10 py-20 bg-gradient-to-r from-black via-red-900/10 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Important Dates
              </h2>
              <p className="text-lg text-gray-400">
                Catat tanggal-tanggal penting ini untuk mempersiapkan revolusi digital Anda
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">Registration Period</CardTitle>
                  <CardDescription className="text-gray-400">01 - 30 November 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    Daftar sekarang untuk mendapatkan early bird discount dan akses ke materi persiapan eksklusif.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">Selection Announcement</CardTitle>
                  <CardDescription className="text-gray-400">05 December 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    Pengumuman peserta yang lolos seleksi dan pembagian kelompok untuk bootcamp.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">Bootcamp Training</CardTitle>
                  <CardDescription className="text-gray-400">10 - 20 December 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    Pelatihan intensif dengan mentor expert dari industri teknologi terdepan.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-red-900/30 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-red-400">Competition Week</CardTitle>
                  <CardDescription className="text-gray-400">05 - 15 January 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    Seminggu penuh kompetisi desain dengan tantangan real-world dari perusahaan partner.
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
                  Ready to Start Your Journey?
                </span>
              </h2>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Jangan lewatkan kesempatan untuk menjadi bagian dari DECOMPE 4.0 - 
                <span className="text-red-400 font-semibold"> tempat di mana mimpi digital menjadi kenyataan</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link href="/registration">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-12 py-4 rounded-lg border border-red-500/50 shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:scale-105">
                    <Shield className="mr-2 h-6 w-6" />
                    REGISTER NOW
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-red-600/50 text-red-400 hover:bg-red-600/20 hover:text-red-300 text-lg px-12 py-4 rounded-lg backdrop-blur-sm transition-all duration-300">
                    <Cpu className="mr-2 h-6 w-6" />
                    LEARN MORE
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
  );
}