import { motion } from 'motion/react'
import { Search } from 'lucide-react'
import { AppleLogo } from '@/components/primitives/AppleLogo'

const MENU_ITEMS = ['File', 'Edit', 'View', 'Go', 'Window', 'Help']

function menuItemClass(index: number): string {
  if (index <= 2) return 'text-white/70'
  if (index === 3) return 'hidden sm:inline text-white/70'
  return 'hidden md:inline text-white/70'
}

export function MacMenuBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
      className="h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs">
        <div className="flex items-center gap-3">
          <AppleLogo className="w-3.5 h-3.5" />
          <span className="font-bold text-white">Aura</span>
          {MENU_ITEMS.map((item, index) => (
            <span key={item} className={menuItemClass(index)}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <Search className="w-3.5 h-3.5" />
          <span>Wed May 6 1:09 PM</span>
        </div>
      </div>
    </motion.div>
  )
}