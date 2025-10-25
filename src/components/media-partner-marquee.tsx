'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"

interface MediaPartnerMarqueeProps {
  className?: string
  speed?: 'slow' | 'medium' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
}

const mediaPartners = [
  {
    name: "Kabar Lomba",
    image: "/images/media-partners/Logo KabarLomba.png",
    description: "Media Partner"
  },
  {
    name: "Lomba Tekno",
    image: "/images/media-partners/Logo LombaTekno.png",
    description: "Media Partner"
  },
  {
    name: "Lomba UI UX",
    image: "/images/media-partners/Logo LombaUIUX.png",
    description: "Media Partner"
  },
  {
    name: "Tekno Event Academy 25",
    image: "/images/media-partners/Logo TeknoEventAcademy25.png",
    description: "Media Partner"
  },
  {
    name: "Tekno Event Campus 25",
    image: "/images/media-partners/Logo TeknoEventCampus25.png",
    description: "Media Partner"
  },
  {
    name: "Edaran Event",
    image: "/images/media-partners/Edaran event.png",
    description: "Media Partner"
  },
]

export default function MediaPartnerMarquee({ 
  className,
  speed = 'fast',
  direction = 'right',
  pauseOnHover = true
}: MediaPartnerMarqueeProps) {
  const animationDuration = {
    slow: '20s',
    medium: '10s', 
    fast: '6s'
  }[speed]

  return (
    <section className={cn("relative py-12 overflow-hidden rounded-xl", className)}>
      <div className="mx-auto px-4 mb-8 max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Media Partners
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Supported by leading media and publications
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Marquee wrapper */}
        <div 
          className="flex overflow-hidden w-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
          }}
        >
          <div 
            className={cn(
              "flex animate-marquee space-x-6 shrink-0",
              pauseOnHover && "hover:pause"
            )}
            style={{
              animation: direction === 'left' 
                ? `marquee ${animationDuration} linear infinite`
                : `marquee-reverse ${animationDuration} linear infinite`
            }}
          >
            {/* Repeat items for continuous scroll */}
            {[...mediaPartners, ...mediaPartners, ...mediaPartners, ...mediaPartners, ...mediaPartners, ...mediaPartners, ...mediaPartners, ...mediaPartners].map((partner, index) => (
              <div
                key={`partner-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="min-w-[100px] max-w-[170px] h-[70px] flex items-center justify-center transition-all duration-300 group-hover:scale-110 bg-transparent px-3">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={150}
                    height={70}
                    className="w-auto h-auto max-w-[150px] max-h-[65px] object-contain filter grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
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