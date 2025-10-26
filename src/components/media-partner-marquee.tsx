'use client'

import Marquee from "./marquee"

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
  speed = 'fast',
  direction = 'right',
  pauseOnHover = true
}: {
  speed?: 'slow' | 'medium' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
}) {
  return (
    <Marquee
      items={mediaPartners}
      speed={speed}
      direction={direction}
      pauseOnHover={pauseOnHover}
      title="Media Partners"
      subtitle="Supported by leading media and publications"
    />
  )
}