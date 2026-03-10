import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'who-am-i', label: 'Who am I' },
  { id: 'what-is-csus', label: 'CSUS' },
  { id: 'goals', label: 'Goals' },
]

export default function ScrollTracker() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.35 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed right-8 md:right-10 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-5"
    >
      {sections.map(({ id, label }, i) => {
        const isActive = active === id

        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label={`Scroll to ${label}`}
          >
            {/* Label — visible on hover or when active on md+ */}
            <span
              className={`
                text-[9px] tracking-[3px] uppercase font-heading font-semibold transition-all duration-300
                hidden md:block
                ${isActive
                  ? 'text-pink-bright opacity-100'
                  : 'text-pink-soft/30 opacity-0 group-hover:opacity-100 group-hover:text-pink-soft/60'
                }
              `}
            >
              {label}
            </span>

            {/* Dot + connecting line */}
            <div className="relative flex flex-col items-center">
              <div
                className={`
                  rounded-full transition-all duration-300
                  ${isActive
                    ? 'w-2.5 h-2.5 bg-pink-bright shadow-[0_0_10px_rgba(244,114,200,0.6)]'
                    : 'w-1.5 h-1.5 bg-pink/30 group-hover:bg-pink/60'
                  }
                `}
              />
              {/* Connecting line to next dot */}
              {i < sections.length - 1 && (
                <div className="absolute top-full mt-1.5 w-px h-3 bg-pink/15" />
              )}
            </div>
          </button>
        )
      })}
    </motion.div>
  )
}
