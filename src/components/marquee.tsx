'use client'

import { cn } from "@/lib/utils"
import Image from "next/image"
import React from "react"

interface MarqueeProps {
  className?: string
  speed?: 'slow' | 'medium' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  items: {
    name: string
    image: string
    description: string
  }[]
  title: string
  subtitle: string
}

export default function Marquee({
  className,
  speed = 'medium',
  direction = 'left',
  pauseOnHover = true,
  items,
  title,
  subtitle,
}: MarqueeProps) {
  const animationDuration = {
    slow: '80s',
    medium: '40s',
    fast: '30s'
  }[speed]

  const MINIMUM_ITEMS_FOR_SEAMLESS_LOOP = 12;
  let displayItems = [...items];
  if (items.length > 0 && items.length < MINIMUM_ITEMS_FOR_SEAMLESS_LOOP) {
    const repeatCount = Math.ceil(MINIMUM_ITEMS_FOR_SEAMLESS_LOOP / items.length);
    displayItems = Array(repeatCount).fill(items).flat();
  }

  return (
    <section className={cn("relative py-12 overflow-hidden rounded-xl", className)}>
      <div className="mx-auto px-4 mb-8 max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <div
          className="flex overflow-hidden w-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'
          }}
        >
          <div
            className={cn(
              "flex animate-marquee space-x-8 shrink-0 will-change-transform",
              pauseOnHover && "hover:pause"
            )}
            style={{
              animation: direction === 'left'
                ? `marquee ${animationDuration} linear infinite`
                : `marquee-reverse ${animationDuration} linear infinite`
            }}
          >
            {displayItems.map((item, index) => (
              <div
                key={`item-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="min-w-[140px] max-w-[240px] h-[90px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-transparent px-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={220}
                    height={90}
                    className="w-auto h-auto max-w-[220px] max-h-[85px] object-contain opacity-70 group-hover:opacity-100"
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
             {displayItems.map((item, index) => (
              <div
                key={`item-${index}-clone`}
                className="flex-shrink-0 group cursor-pointer"
                aria-hidden="true"
              >
                <div className="min-w-[140px] max-w-[240px] h-[90px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-transparent px-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={220}
                    height={90}
                    className="w-auto h-auto max-w-[220px] max-h-[85px] object-contain opacity-70 group-hover:opacity-100"
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
    </section>
  )
}
