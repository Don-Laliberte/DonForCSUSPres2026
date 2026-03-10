import { motion } from 'framer-motion'

const cards = [
  {
    emote: '/emotes/no.png',
    title: 'For the Team',
    desc: 'No decision will be hesitated on. As your leader, I\'ll carve the path of least resistance so you can work at your desired level. You\'re doing this for free — that will always be respected.',
  },
  {
    emote: '/emotes/happy.png',
    title: 'For Legacy',
    desc: 'I want to honour the history and values built by those before us while carving out our own legend. Something old, something new.',
  },
  {
    emote: '/emotes/chatting.png',
    title: 'For the People',
    desc: 'I do this to foster a community that incites unity and forges the bonds that drive innovation. No big project in this industry is truly a solo act — there is massive value in keeping that flame alive.',
  },
]

export default function PlatformCards() {
  return (
    <>
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.52 + i * 0.1 }}
          whileHover={{ borderColor: 'rgba(224,90,170,0.4)', background: 'rgba(82,16,83,0.3)' }}
          className={`
            relative border border-pink/15 bg-purple-deep/40 overflow-hidden group
            transition-all duration-300
            flex items-center gap-3.5 p-3 px-3.5
            lg:flex-col lg:items-center lg:justify-center lg:text-center lg:p-5 lg:aspect-square
          `}
        >
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink to-purple-rich opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-pink to-purple-rich opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden lg:block" />
          <img
            src={card.emote}
            alt={card.title}
            loading="lazy"
            className="w-[52px] h-[52px] flex-shrink-0 object-contain lg:w-16 lg:h-16 lg:mb-3"
            style={{ filter: 'drop-shadow(0 0 6px rgba(224,90,170,0.4))' }}
          />
          <div className="flex flex-col gap-0.5 lg:gap-2">
            <span className="font-heading text-[11px] font-bold tracking-[3px] text-pink uppercase">
              {card.title}
            </span>
            <span className="text-[12.5px] text-light/55 tracking-[0.3px] leading-[1.5] lg:text-[11.5px] lg:leading-[1.6]">
              {card.desc}
            </span>
          </div>
        </motion.div>
      ))}
    </>
  )
}
