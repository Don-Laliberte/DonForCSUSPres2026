import { motion } from 'framer-motion'
import { useCountdown } from '../../hooks/useCountdown'

const units = ['days', 'hours', 'mins', 'secs'] as const

export default function Countdown() {
  const countdown = useCountdown()

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.45 }}
      className="mb-6"
    >
      <div className="text-[9px] tracking-[4px] text-pink/45 uppercase font-semibold mb-2">
        Next drop — Thursday at 2 PM
      </div>
      <div className="flex gap-2 items-center">
        {units.map((unit, i) => (
          <div key={unit} className="flex items-center gap-2">
            <div className="flex flex-col items-center border border-pink/25 py-2 px-3 bg-purple-deep/50 min-w-[52px]">
              <span
                className="font-heading text-[22px] font-black text-pink-bright leading-none"
                style={{ textShadow: '0 0 12px rgba(244,114,200,0.6)' }}
              >
                {countdown[unit]}
              </span>
              <span className="text-[8px] tracking-[2px] text-pink/40 uppercase mt-0.5">
                {unit}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="font-heading text-[20px] font-black text-pink/40 animate-blink-fast mb-3.5">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
