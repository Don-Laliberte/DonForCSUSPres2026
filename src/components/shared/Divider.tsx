import { motion } from 'framer-motion'

interface Props {
  delay?: number
  className?: string
  /** When true, diamond is on the left and line trails to the right (default: line left, diamond right) */
  flip?: boolean
}

export default function Divider({ delay = 0, className = '', flip = false }: Props) {
  const diamond = (
    <div className="w-1.5 h-1.5 bg-pink rotate-45 flex-shrink-0" style={{ boxShadow: '0 0 8px #e05aaa' }} />
  )
  const line = (
    <div className="flex-1 h-px bg-gradient-to-r from-pink to-transparent" />
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`flex items-center gap-3 ${className}`}
    >
      {flip ? <>{diamond}{line}</> : <>{line}{diamond}</>}
    </motion.div>
  )
}
