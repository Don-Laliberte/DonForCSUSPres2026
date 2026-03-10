import { motion } from 'framer-motion'

export default function Tagline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
      className="relative pl-[18px] mb-1.5"
    >
      {/* Accent bar */}
      <div
        className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full"
        style={{
          background: 'linear-gradient(to bottom, #f472c8, #7a1f7a)',
          boxShadow: '0 0 10px #e05aaa',
        }}
      />
      <h2
        className="font-heading text-[32px] font-black text-white tracking-[5px] uppercase leading-[1.15]"
        style={{ textShadow: '0 0 25px rgba(224,90,170,0.5)' }}
      >
        Hesitation<br />is Defeat
      </h2>
    </motion.div>
  )
}
