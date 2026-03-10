import { motion } from 'framer-motion'

export default function Katana() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.42 }}
      className="flex items-center gap-3 mb-6.5 pl-[18px]"
    >
      <span className="text-[18px] tracking-[6px] text-pink-bright/45 font-light">
        迷えば、敗れる
      </span>
      <div className="relative flex items-center ml-1">
        <div
          className="w-3.5 h-1.5 rounded-l-sm"
          style={{
            background: 'linear-gradient(to right, #7a1f7a, #521053)',
            boxShadow: '0 0 4px rgba(224,90,170,0.4)',
          }}
        />
        <div
          className="w-[5px] h-3.5 rounded-[1px]"
          style={{
            background: '#565583',
            boxShadow: '0 0 4px rgba(86,85,131,0.6)',
          }}
        />
        <div className="w-[90px] h-[2.5px] rounded-r-sm animate-saber-pulse"
          style={{
            background: 'linear-gradient(to right, #fff, #f472c8, #e05aaa, transparent)',
          }}
        />
      </div>
    </motion.div>
  )
}
