import type { LucideIcon } from 'lucide-react'
import {
  Archive,
  Inbox,
  Send,
  Star,
  Trash2,
  FileText,
} from 'lucide-react'

export interface SidebarItem {
  icon: LucideIcon
  label: string
  count?: number
  active?: boolean
}

export interface LabelItem {
  name: string
  color: string
}

export interface MessageItem {
  name: string
  subject: string
  preview: string
  time: string
  unread?: boolean
  active?: boolean
}

export const sidebarItems: SidebarItem[] = [
  { icon: Inbox, label: 'Inbox', count: 12, active: true },
  { icon: Star, label: 'Starred', count: 3 },
  { icon: Send, label: 'Sent' },
  { icon: FileText, label: 'Drafts', count: 2 },
  { icon: Archive, label: 'Archive' },
  { icon: Trash2, label: 'Trash' },
]

export const labels: LabelItem[] = [
  { name: 'Work', color: '#00d2ff' },
  { name: 'Personal', color: '#A4F4FD' },
  { name: 'Travel', color: '#f59e0b' },
  { name: 'Finance', color: '#10b981' },
]

export const messages: MessageItem[] = [
  {
    name: 'Linear',
    subject: 'Weekly product digest',
    preview: 'Your team shipped 23 issues this week...',
    time: '9:41 AM',
    unread: true,
    active: true,
  },
  {
    name: 'Sophia Chen',
    subject: 'Re: Q3 roadmap review',
    preview: 'Thanks for sending the deck over. I had a few thoughts...',
    time: '8:12 AM',
    unread: true,
  },
  {
    name: 'Figma',
    subject: 'Marcus commented on your file',
    preview: 'Love the new direction on the landing hero.',
    time: 'Yesterday',
  },
  {
    name: 'Stripe',
    subject: 'Payout of $12,480.00 sent',
    preview: 'Your payout is on its way to your bank...',
    time: 'Yesterday',
  },
  {
    name: 'Vercel',
    subject: 'Deployment ready for aura-web',
    preview: 'Preview is live at aura-web-g3f.vercel.app',
    time: 'Mon',
  },
  {
    name: 'GitHub',
    subject: '[aura/core] PR #482 approved',
    preview: 'david-lim approved your pull request.',
    time: 'Mon',
  },
]

export const readerParagraphs = [
  'Hi team,',
  'Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.',
  'Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.',
  'Let me know if you would like a deeper breakdown by project or contributor.',
  '— The Linear team',
]