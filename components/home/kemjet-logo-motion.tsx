'use client'

import Image from 'next/image'
import { useState } from 'react'

export function KemjetLogoMotion() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    setTilt({
      x: -y * 8,
      y: x * 8,
    })
  }

  function resetTilt() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      className="relative flex min-h-[340px] items-center justify-center overflow-hidden sm:min-h-[440px] md:min-h-[520px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      {/* Subtle gold halo */}
      <div
        aria-hidden="true"
        className="absolute size-[65%] rounded-full bg-gold/10 blur-3xl motion-reduce:animate-none"
      />

      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="absolute size-[72%] rounded-full border border-gold/20"
      />
      <div
        aria-hidden="true"
        className="absolute size-[58%] rounded-full border border-forest/10"
      />

      {/* Logo */}
      <div
        className="relative z-10 w-[68%] max-w-[430px] motion-reduce:transform-none"
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 450ms ease-out',
        }}
      >
        <Image
          src="/images/kemjet-logo.png"
          alt="Kemjet Himalog"
          width={700}
          height={700}
          priority={false}
          sizes="(min-width: 768px) 430px, 68vw"
          className="h-auto w-full object-contain drop-shadow-[0_20px_35px_rgba(20,45,35,0.16)]"
        />
      </div>

      <span className="sr-only">
        Kemjet Himalog Technologies Private Limited
      </span>
    </div>
  )
}
