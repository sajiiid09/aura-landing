import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { LogoMark } from '@/components/primitives/LogoMark'
import { AppleButton } from '@/components/primitives/AppleButton'

const NAV_LINKS = ['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers']

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-50">
      <div className="max-w-6xl mx-auto px-6 pt-6">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="liquid-glass rounded-full px-4 py-2.5 flex items-center justify-between"
        >
          <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Aura home">
            <LogoMark className="w-7 h-7" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                className="text-white/60 text-sm font-medium hover:text-white transition-colors duration-300"
              >
                {link}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block">
            <AppleButton />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full mt-2 left-6 right-6 liquid-glass rounded-2xl p-4 flex flex-col gap-2 z-50"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-white/60 text-sm font-medium hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-white/10">
              <AppleButton full />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}