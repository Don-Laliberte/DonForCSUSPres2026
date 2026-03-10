import { useState, useEffect } from 'react'

interface CountdownValues {
  days: string
  hours: string
  mins: string
  secs: string
}

function getNextThursday2pm(): Date {
  const now = new Date()
  const target = new Date(now)
  const day = now.getDay()
  let daysUntil = (4 - day + 7) % 7
  if (daysUntil === 0) {
    const todayAt2 = new Date(now)
    todayAt2.setHours(14, 0, 0, 0)
    if (now >= todayAt2) daysUntil = 7
  }
  target.setDate(now.getDate() + daysUntil)
  target.setHours(14, 0, 0, 0)
  return target
}

export function useCountdown(): CountdownValues {
  const [target] = useState(getNextThursday2pm)
  const [values, setValues] = useState<CountdownValues>({
    days: '00', hours: '00', mins: '00', secs: '00',
  })

  useEffect(() => {
    function update() {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) {
        setValues({ days: '00', hours: '00', mins: '00', secs: '00' })
        return
      }
      setValues({
        days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
        hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
        mins: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        secs: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [target])

  return values
}
