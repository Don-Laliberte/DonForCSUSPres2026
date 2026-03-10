import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)

  const toggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    if (!started) {
      audio.volume = 0.35
      audio.loop = true
      audio.play().then(() => {
        setPlaying(true)
        setStarted(true)
      }).catch(() => {})
    } else if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play()
      setPlaying(true)
    }
  }, [playing, started])

  return (
    <>
      <audio ref={audioRef} src="/bg-music.wav" preload="none" />
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        onClick={toggle}
        className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full border border-pink/30 bg-ink/80 backdrop-blur-md flex items-center justify-center hover:border-pink/60 hover:bg-purple-mid/30 transition-all duration-300 cursor-pointer group"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M12 6.253v11.494m0 0A6.97 6.97 0 008.464 15.536M12 17.747A6.97 6.97 0 0015.536 15.536M5.636 5.636a9 9 0 000 12.728M18.364 5.636a9 9 0 010 12.728" />
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
