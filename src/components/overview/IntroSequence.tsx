import { useState, useEffect, useRef, useCallback, type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: ReactNode
}

export default function IntroSequence({ children }: Props) {
  const [done, setDone] = useState(() => !!sessionStorage.getItem('intro-seen'))
  const [phase, setPhase] = useState(0)
  const bgRef = useRef<HTMLDivElement>(null)

  const finish = useCallback(() => {
    sessionStorage.setItem('intro-seen', '1')
    setDone(true)
  }, [])

  useEffect(() => {
    if (done) return

    const t1 = setTimeout(() => setPhase(1), 100)
    const t2 = setTimeout(() => setPhase(2), 2000)
    const t3 = setTimeout(() => setPhase(3), 3800)
    const t4 = setTimeout(finish, 6200)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [done, finish])

  if (done) return <>{children}</>

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden bg-ink">
      {/* Background image — starts centered, pans right */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-no-repeat transition-all"
        style={{
          backgroundImage: 'url(/don-photo.jpg)',
          backgroundPosition: phase >= 1 ? '86% 20%' : '50% 20%',
          opacity: 0.85,
          filter: phase >= 2 ? 'brightness(0.92) contrast(1.08)' : 'brightness(1) contrast(1)',
          transitionDuration: '2s',
          transitionTimingFunction: 'ease-in-out',
        }}
      />

      {/* Color tint overlay — fades in at phase 2 */}
      <div
        className="absolute inset-0 transition-opacity duration-[1500ms]"
        style={{
          opacity: phase >= 2 ? 1 : 0,
          background: `
            radial-gradient(ellipse at 75% 35%, rgba(82,16,83,0.35) 0%, transparent 55%),
            radial-gradient(ellipse at 20% 80%, rgba(86,85,131,0.22) 0%, transparent 50%)`,
        }}
      />

      {/* Left fade overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-[1200ms]"
        style={{
          opacity: phase >= 2 ? 1 : 0,
          background: `linear-gradient(to right,
            rgba(26,10,26,0.92) 0%,
            rgba(26,10,26,0.55) 28%,
            rgba(26,10,26,0.10) 52%,
            rgba(26,10,26,0.0) 68%)`,
        }}
      />

      {/* Bottom/top fades */}
      <div
        className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-ink to-transparent transition-opacity duration-[1200ms]"
        style={{ opacity: phase >= 2 ? 1 : 0 }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-ink/90 to-transparent transition-opacity duration-[1200ms]"
        style={{ opacity: phase >= 2 ? 1 : 0 }}
      />

      {/* Scanline */}
      {phase >= 2 && (
        <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-pink-bright/[0.12] to-transparent animate-scan z-[3] pointer-events-none" />
      )}

      {/* Central reveal text — phase 3 */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center z-20 transition-all duration-1000"
        style={{ opacity: phase >= 3 ? 1 : 0, transform: phase >= 3 ? 'translateY(0)' : 'translateY(30px)' }}
      >
        <span className="text-[11px] tracking-[5px] text-pink/55 uppercase font-semibold mb-2">
          Vote for
        </span>
        <h1
          className="font-display text-5xl md:text-7xl font-black text-light leading-[1.05] tracking-[2px] text-center"
          style={{ textShadow: '0 0 30px rgba(224,90,170,0.5), 0 0 60px rgba(82,16,83,0.6)' }}
        >
          Don<br />
          <span className="text-pink-bright" style={{ textShadow: '0 0 30px rgba(244,114,200,0.7)' }}>
            Laliberte
          </span>
        </h1>
        <span className="font-heading text-sm tracking-[3.5px] text-pink-soft/70 uppercase mt-4">
          CSUS President · 2026
        </span>
      </div>

      {/* Inner border — phase 2 */}
      <div
        className="absolute inset-3.5 border border-pink/[0.18] z-[2] pointer-events-none transition-opacity duration-[1200ms]"
        style={{ opacity: phase >= 2 ? 1 : 0 }}
      />

      {/* Skip */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        whileHover={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        onClick={finish}
        className="absolute top-6 right-6 z-50 text-[10px] tracking-[3px] text-pink-soft/50 uppercase font-semibold border border-pink/20 px-3 py-1.5 hover:border-pink/40 hover:bg-purple-mid/20 transition-all cursor-pointer"
      >
        Skip
      </motion.button>
    </div>
  )
}
