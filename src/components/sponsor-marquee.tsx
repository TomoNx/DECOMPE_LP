'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"

interface SponsorMarqueeProps {
  className?: string
  speed?: 'slow' | 'medium' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
}

const sponsors = [
  {
    name: "Cyber University",
    image: "/images/sponsors/LH.jpg",
    description: "LH"
  },
]

export default function SponsorMarquee({ 
  className,
  speed = 'medium',
  direction = 'left',
  pauseOnHover = true
}: SponsorMarqueeProps) {
  const animationDuration = {
    slow: '40s',
    medium: '20s', 
    fast: '15s'
  }[speed]

  return (
    <section className={cn("relative py-12 overflow-hidden rounded-xl", className)}>
      <div className="mx-auto px-4 mb-8 max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Our Sponsors
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Trusted by industry leaders and innovators
          </p>
        </div>
      </div>

      <div className="relative w-full">

        {/* Marquee wrapper */}
        <div 
          className="flex overflow-hidden w-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
          }}
        >
          <div 
            className={cn(
              "flex animate-marquee space-x-8 shrink-0",
              pauseOnHover && "hover:pause"
            )}
            style={{
              animation: direction === 'left' 
                ? `marquee ${animationDuration} linear infinite`
                : `marquee-reverse ${animationDuration} linear infinite`
            }}
          >
            {/* Repeat items for continuous scroll */}
            {[...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
              <div
                key={`sponsor-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="min-w-[140px] max-w-[240px] h-[90px] flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-transparent px-4">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.name}
                    width={220}
                    height={90}
                    className="w-auto h-auto max-w-[220px] max-h-[85px] object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Border line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
    </section>
  )
}