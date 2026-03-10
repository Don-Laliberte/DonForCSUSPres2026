import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(true)
  const startedRef = useRef(false)

  const startPlayback = useCallback(() => {
    const audio = audioRef.current
    if (!audio || startedRef.current) return

    audio.volume = 0.35
    audio.loop = true
    audio.play().then(() => {
      startedRef.current = true
      setPlaying(true)
    }).catch(() => {})
  }, [])

  useEffect(() => {
    startPlayback()

    const onInteraction = () => {
      if (!startedRef.current) startPlayback()
    }

    document.addEventListener('click', onInteraction, { once: true })
    document.addEventListener('scroll', onInteraction, { once: true })
    document.addEventListener('keydown', onInteraction, { once: true })
    document.addEventListener('touchstart', onInteraction, { once: true })

    return () => {
      document.removeEventListener('click', onInteraction)
      document.removeEventListener('scroll', onInteraction)
      document.removeEventListener('keydown', onInteraction)
      document.removeEventListener('touchstart', onInteraction)
    }
  }, [startPlayback])

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      if (!startedRef.current) {
        audio.volume = 0.35
        audio.loop = true
      }
      audio.play().then(() => {
        startedRef.current = true
        setPlaying(true)
      }).catch(() => {})
    }
  }, [playing])

  return (
    <>
      <audio ref={audioRef} src="/bg-music.mp3" preload="none" />
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        onClick={toggle}
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full border border-pink/30 bg-ink/90 flex items-center justify-center hover:border-pink/60 hover:bg-purple-mid/30 transition-all duration-300 cursor-pointer group"
        title={playing ? 'Mute' : 'Play music'}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.svg
              key="playing"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="w-5 h-5 text-pink-bright group-hover:text-pink-soft transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
            </motion.svg>
          ) : (
            <motion.svg
              key="muted"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="w-5 h-5 text-pink/50 group-hover:text-pink-bright transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  )
}
