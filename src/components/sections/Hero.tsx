import { motion } from 'motion/react'
import { AppleButton } from '@/components/primitives/AppleButton'
import { gradientStyle } from '@/lib/gradientStyle'

export function Hero() {
  return (
    <section className="pt-20 md:pt-32 pb-24 md:pb-32 text-center flex flex-col items-center max-w-6xl mx-auto px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl md:text-8xl font-semibold tracking-tight leading-[0.9] drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)]"
      >
        <span className="text-white">Your email.</span>
        <br />
        <span className="animate-shiny" style={gradientStyle}>
          Revitalized
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 text-white/55 max-w-lg text-base md:text-lg leading-relaxed"
      >
        Aura is the premier inbox platform for the current era. It leverages
        powerful AI to organize, prioritize, and refine your messages into total
        clarity.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-col items-center gap-4"
      >
        <AppleButton />
        <p className="text-xs text-white/40">Download for Intel / Apple Silicon</p>
      </motion.div>
    </section>
  )
}