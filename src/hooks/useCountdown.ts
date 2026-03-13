import { useState, useEffect } from 'react'

interface CountdownValues {
  days: string
  hours: string
  mins: string
  secs: string
  expired: boolean
}

const TARGET = new Date('2026-03-13T15:00:00').getTime()

export function useCountdown(): CountdownValues {
  const [values, setValues] = useState<CountdownValues>(() => {
    const diff = TARGET - Date.now()
    if (diff <= 0) return { days: '00', hours: '00', mins: '00', secs: '00', expired: true }
    return {
      days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
      hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
      mins: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
      secs: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      expired: false,
    }
  })

  useEffect(() => {
    function update() {
      const diff = TARGET - Date.now()
      if (diff <= 0) {
        setValues({ days: '00', hours: '00', mins: '00', secs: '00', expired: true })
        return
      }
      setValues({
        days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        mins: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        secs: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
        expired: false,
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return values
}
