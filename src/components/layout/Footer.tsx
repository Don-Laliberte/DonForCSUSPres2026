import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-auto flex items-center gap-3.5 py-8"
    >
      <span className="text-[10px] tracking-[3px] text-pink/25 uppercase font-semibold">
        Don Laliberte
      </span>
      <span className="w-[3px] h-[3px] bg-pink/25 rotate-45" />
      <span className="text-[10px] tracking-[3px] text-pink/25 uppercase font-semibold">
        CSUS 2026–27
      </span>
      <span className="w-[3px] h-[3px] bg-pink/25 rotate-45" />
      <span className="text-[10px] tracking-[3px] text-pink/25 uppercase font-semibold">
        University of Calgary
      </span>
    </motion.footer>
  )
}
