import type { ReactNode } from 'react'
import { BG_VIDEO_URL } from '@/lib/gradientStyle'
import { CinematicOverlay } from './CinematicOverlay'
import { HeadlineNoiseFilter } from './HeadlineNoiseFilter'

interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white selection:bg-brand/30">
      <HeadlineNoiseFilter />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          tabIndex={-1}
          className="w-full h-full object-cover object-[65%_center] scale-105 brightness-[0.85] pointer-events-none"
          src={BG_VIDEO_URL}
        />
      </div>

      <CinematicOverlay />

      <div className="relative z-10">{children}</div>
    </div>
  )
}