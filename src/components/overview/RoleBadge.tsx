import { motion } from 'framer-motion'

export default function RoleBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
      className="inline-flex items-center gap-2.5 border border-pink/30 px-4.5 py-2 mb-6.5 bg-purple-mid/20 self-start"
    >
      <span className="w-[5px] h-[5px] bg-pink rounded-full animate-blink" style={{ boxShadow: '0 0 6px #e05aaa' }} />
      <span className="font-heading text-[11px] font-semibold tracking-[3.5px] text-pink-soft uppercase">
        CSUS President · 2026 – 2027
      </span>
    </motion.div>
  )
}
