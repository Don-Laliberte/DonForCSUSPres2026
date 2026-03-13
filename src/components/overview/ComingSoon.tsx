import { motion, AnimatePresence } from 'framer-motion'
import { useCountdown } from '../../hooks/useCountdown'

export default function ComingSoon() {
  const { expired } = useCountdown()

  return (
    <AnimatePresence mode="wait">
      {expired ? (
        <motion.a
          key="video"
          href="https://youtu.be/JWBRmjhTtyU"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative border border-pink/15 bg-purple-deep/40 overflow-hidden group hover:border-pink/40 hover:bg-purple-mid/30 transition-[border-color,background-color,opacity] duration-150 flex items-center gap-3.5 p-3 px-3.5 lg:flex-col lg:items-center lg:justify-center lg:text-center lg:p-5 lg:aspect-square no-underline"
        >
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink to-purple-rich opacity-0 group-hover:opacity-100 transition-opacity duration-150 lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-pink to-purple-rich opacity-0 group-hover:opacity-100 transition-opacity duration-150 hidden lg:block" />
          <img
            src="/emotes/play.svg"
            alt="Watch"
            className="w-[52px] h-[52px] flex-shrink-0 object-contain lg:w-16 lg:h-16 lg:mb-3"
            style={{ filter: 'drop-shadow(0 0 6px rgba(224,90,170,0.4))' }}
          />
          <div className="flex flex-col gap-0.5 lg:gap-2">
            <span className="text-[9px] tracking-[4px] text-purple-blue uppercase font-bold">
              Final Drop
            </span>
            <span className="font-heading text-[11px] font-bold tracking-[3px] text-pink uppercase">
              Watch the Video
            </span>
          </div>
        </motion.a>
      ) : (
        <motion.div
          key="coming-soon"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.6 }}
          className="border border-purple-blue/35 bg-purple-blue/10 flex items-center justify-between px-5 py-3.5 lg:flex-col lg:items-center lg:justify-center lg:text-center lg:p-5 lg:aspect-square lg:gap-4"
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
      )}
    </AnimatePresence>
  )
}
