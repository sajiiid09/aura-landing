import { motion } from 'motion/react'
import {
  Archive,
  Forward,
  MoreHorizontal,
  Paperclip,
  Reply,
  Search,
  Sparkles,
  Trash2,
} from 'lucide-react'
import {
  labels,
  messages,
  readerParagraphs,
  sidebarItems,
} from '@/data/inbox'

export function InboxMockup() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="overflow-x-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl min-w-[900px]"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="flex-1 text-center text-xs text-white/50">
              Aura — Inbox
            </span>
          </div>

          <div className="grid grid-cols-12 h-[520px]">
            <aside className="col-span-3 border-r border-white/10 bg-black/30 p-4 flex flex-col gap-4">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black text-xs font-semibold px-3 py-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Compose with Aura
              </button>

              <nav className="flex flex-col gap-0.5">
                {sidebarItems.map(({ icon: Icon, label, count, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs ${
                      active
                        ? 'bg-white/10 text-white'
                        : 'text-white/60 hover:bg-white/5'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="flex-1">{label}</span>
                    {count !== undefined && (
                      <span className="text-white/40">{count}</span>
                    )}
                  </div>
                ))}
              </nav>

              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">
                  Labels
                </p>
                <div className="flex flex-col gap-1.5">
                  {labels.map((label) => (
                    <div
                      key={label.name}
                      className="flex items-center gap-2 text-xs text-white/60"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: label.color }}
                      />
                      {label.name}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <div className="col-span-4 border-r border-white/10 flex flex-col">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 text-white/40">
                <Search className="w-3.5 h-3.5" />
                <span className="text-xs">Search mail</span>
              </div>
              <div className="flex-1 overflow-y-auto">
                {messages.map((msg) => (
                  <div
                    key={msg.name + msg.subject}
                    className={`px-4 py-3 border-b border-white/5 cursor-pointer ${
                      msg.active ? 'bg-white/5' : 'hover:bg-white/[0.03]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span
                        className={`text-xs ${msg.unread ? 'font-semibold text-white' : 'text-white/80'}`}
                      >
                        {msg.name}
                      </span>
                      <span className="text-[10px] text-white/40">{msg.time}</span>
                    </div>
                    <p
                      className={`text-xs truncate ${msg.unread ? 'text-white/90' : 'text-white/60'}`}
                    >
                      {msg.subject}
                    </p>
                    <p className="text-[10px] text-white/40 truncate mt-0.5">
                      {msg.preview}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-5 flex flex-col">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
                <div className="flex items-center gap-1">
                  {(
                    [
                      { Icon: Reply, label: 'Reply' },
                      { Icon: Forward, label: 'Forward' },
                      { Icon: Archive, label: 'Archive' },
                      { Icon: Trash2, label: 'Delete' },
                    ] as const
                  ).map(({ Icon, label }) => (
                    <button
                      key={label}
                      type="button"
                      aria-label={label}
                      className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60"
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="w-7 h-7 rounded-md hover:bg-white/5 flex items-center justify-center text-white/60"
                >
                  <MoreHorizontal className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <h3 className="text-sm font-semibold text-white mb-3">
                  Weekly product digest
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-xs font-semibold">
                    L
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">Linear</p>
                    <p className="text-[10px] text-white/40">to me · 9:41 AM</p>
                  </div>
                  <span className="ml-auto text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/60">
                    Work
                  </span>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#A4F4FD]" />
                    <span className="text-xs font-medium text-[#A4F4FD]">
                      Summary by Aura
                    </span>
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Your team closed 23 issues, merged 14 PRs, and shipped 2
                    features. Top contributor: Marcus. No action needed.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-white/70 leading-relaxed">
                  {readerParagraphs.map((para) => (
                    <p
                      key={para}
                      className={
                        para.startsWith('—') ? 'text-white/50' : ''
                      }
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-xs text-white/60">
                  <Paperclip className="w-3 h-3" />
                  digest-may-6.pdf
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}