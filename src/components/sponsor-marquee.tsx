'use client'

import Marquee from "./marquee"

const sponsors = [
  {
    name: "Cyber University",
    image: "/images/sponsors/LH.jpg",
    description: "LH"
  },
]

export default function SponsorMarquee({ 
  speed = 'medium',
  direction = 'left',
  pauseOnHover = true
}: {
  speed?: 'slow' | 'medium' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
}) {
  return (
    <Marquee
      items={sponsors}
      speed={speed}
      direction={direction}
      pauseOnHover={pauseOnHover}
      title="Our Sponsors"
      subtitle="Trusted by industry leaders and innovators"
    />
  )
}