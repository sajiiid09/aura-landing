import { ChevronRight } from 'lucide-react'
import { AppleLogo } from './AppleLogo'

interface AppleButtonProps {
  label?: string
  full?: boolean
}

export function AppleButton({ label = 'Download Aura', full }: AppleButtonProps) {
  return (
    <button
      type="button"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 shadow-[0_4px_24px_rgba(255,255,255,0.12)] transition-all hover:bg-white/90 hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98] ${full ? 'w-full' : ''}`}
    >
      <AppleLogo />
      <span>{label}</span>
      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-px" />
    </button>
  )
}