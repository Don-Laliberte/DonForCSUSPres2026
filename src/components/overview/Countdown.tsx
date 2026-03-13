import { motion, AnimatePresence } from 'framer-motion'
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
      <AnimatePresence mode="wait">
        {countdown.expired ? (
          <motion.div
            key="complete"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="text-[9px] tracking-[4px] text-pink/45 uppercase font-semibold mb-2">
              Sequence Complete
            </div>
            <div
              className="border border-pink/25 bg-purple-deep/50 py-3 px-4 inline-block"
            >
              <span
                className="font-heading text-[15px] md:text-[17px] font-bold tracking-[2px] text-pink-bright uppercase leading-none"
                style={{ textShadow: '0 0 14px rgba(244,114,200,0.7), 0 0 30px rgba(224,90,170,0.4)' }}
              >
                Campaign Complete: Starting Protocol
                <span className="animate-typing-dots">...</span>
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="counting"
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-[9px] tracking-[4px] text-pink/45 uppercase font-semibold mb-2">
              Final drop — Friday at 3 PM
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
        )}
      </AnimatePresence>
    </motion.div>
  )
}
