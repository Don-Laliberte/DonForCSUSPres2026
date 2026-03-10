import { motion } from 'framer-motion'

export default function ComingSoon() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.6 }}
      className={`
        border border-purple-blue/35 bg-purple-blue/10
        flex items-center justify-between px-5 py-3.5
        lg:flex-col lg:items-center lg:justify-center lg:text-center lg:p-5 lg:aspect-square lg:gap-4
      `}
    >
      <div className="flex flex-col gap-1 lg:gap-2 lg:items-center">
        <span className="text-[9px] tracking-[4px] text-purple-blue uppercase font-bold">
          Drop 01 of ?
        </span>
        <span className="font-heading text-sm font-semibold text-light/65 tracking-[3px] uppercase">
          More to Come
        </span>
      </div>
      <div className="flex gap-[7px] items-center">
        {[0, 0.35, 0.7].map((delay, i) => (
          <span
            key={i}
            className="w-[7px] h-[7px] rounded-full bg-purple-blue"
            style={{ animation: `blink 1.6s ease-in-out infinite ${delay}s` }}
          />
        ))}
      </div>
    </motion.div>
  )
}
