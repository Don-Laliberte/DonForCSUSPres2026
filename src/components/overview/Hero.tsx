import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' as const, delay },
  }),
}

export default function Hero() {
  return (
    <motion.div
      variants={fadeUp}
      custom={0.15}
      initial="hidden"
      animate="visible"
      className="flex items-end gap-5 mb-6"
    >
      {/* Sprite */}
      <div className="relative flex-shrink-0">
        <div
          className="absolute -inset-4 rounded-full animate-glow"
          style={{ background: 'radial-gradient(ellipse, rgba(224,90,170,0.3) 0%, transparent 70%)' }}
        />
        <img
          src="/NanashiPixel.svg"
          alt="Don Laliberte pixel avatar"
          className="w-[88px] h-auto pixelated relative z-[1] animate-float"
          style={{ filter: 'drop-shadow(0 0 10px rgba(224,90,170,0.7))' }}
        />
      </div>

      {/* Name block */}
      <div className="flex flex-col gap-1">
        <span className="text-[11px] tracking-[5px] text-pink/55 uppercase font-semibold">
          Vote for
        </span>
        <h1 className="font-display text-[42px] font-black text-light leading-[1.05] tracking-[1px]"
          style={{ textShadow: '0 0 30px rgba(224,90,170,0.5), 0 0 60px rgba(82,16,83,0.6)' }}
        >
          Don<br />
          <span
            className="text-pink-bright"
            style={{ textShadow: '0 0 30px rgba(244,114,200,0.7)' }}
          >
            Laliberte
          </span>
        </h1>
      </div>
    </motion.div>
  )
}
