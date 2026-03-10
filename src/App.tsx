import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IntroSequence from './components/overview/IntroSequence'
import Section from './components/layout/Section'
import ScrollTracker from './components/layout/ScrollTracker'
import AudioPlayer from './components/layout/AudioPlayer'
import Footer from './components/layout/Footer'
import Hero from './components/overview/Hero'
import RoleBadge from './components/overview/RoleBadge'
import Tagline from './components/overview/Tagline'
import Katana from './components/overview/Katana'
import Countdown from './components/overview/Countdown'
import PlatformCards from './components/overview/PlatformCards'
import ComingSoon from './components/overview/ComingSoon'
import Divider from './components/shared/Divider'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const, delay },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

const goals = [
  {
    sprite: '/chars/nanashi.png',
    title: 'Transparent Leadership',
    desc: 'One of the club\'s current weaknesses is a lack of structural clarity. I want to build a clear chain of communication — VP\'s staying integrated with the president on branch operations, and roles beneath referring upward — so information travels from the ground up and no one is left in the dark.',
  },
  {
    sprite: '/chars/mikado.png',
    title: 'Refocusing Our Time Commitment',
    desc: 'VP\'s and the President should have their own separate weekly touchpoint to iron out details before bringing them to the full team. This keeps general meetings focused on what actually matters to everyone, cutting down on back-and-forth over things that could\'ve been resolved beforehand.',
  },
  {
    sprite: '/chars/misane.png',
    title: 'Putting the Students at the Forefront',
    desc: 'Being a "Computer Science" club doesn\'t mean every event has to look like one. Alumni reminisce about trivia nights and karaoke — the fun stuff. I won\'t change the approach to serious events, but I want more events that are enjoyable for both students and organizers.',
  },
  {
    sprite: '/chars/potete.png',
    title: 'Building a Legacy',
    desc: 'This club has alumni from 20 years ago still popping by the room — that history matters deeply to me. I want to prioritize that magic: more exec bonding, more photos, more just vibing. In a field full of elitism and in-fighting, we don\'t have to be that. I want everyone\'s contribution to be remembered not just for what they built, but for the presence they brought.',
  },
  {
    sprite: '/chars/aira.png',
    title: 'Merchandise and Recognizability',
    desc: 'I want CSUS to have a distinct identity — stylized hoodies, alternative logos, 3D printed merch, animal mascots. Not for prestige, but for the energy and reputation that comes with it. Alongside that, I want to make a real push on social media. A distinguished Instagram presence that shows off what we do, how people can get involved, and keeps things lighthearted. That interpersonal connection with members matters — especially right now.',
  },
]

export default function App() {
  return (
    <IntroSequence>
      <div className="relative bg-ink">
        {/* Global decorations */}
        <div className="fixed inset-3.5 border border-pink/[0.18] z-[2] pointer-events-none" />
        <Corner className="fixed top-5 left-5" />
        <Corner className="fixed top-5 right-5 rotate-90" />
        <Corner className="fixed bottom-5 right-5 rotate-180" />
        <Corner className="fixed bottom-5 left-5 -rotate-90" />
        <div className="fixed left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-pink-bright/[0.12] to-transparent animate-scan z-[3] pointer-events-none" />

        <ScrollTracker />
        <AudioPlayer />

        {/* ── OVERVIEW ── */}
        <Section
          id="overview"
          bgImage="/don-photo.jpg"
          bgPosition="86% 20%"
          bgOpacity={0.62}
          contentWidth="full"
        >
          {/* Hero zone — stays narrow like the original poster */}
          <div className="max-w-[490px]">
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3.5 mb-8"
            >
              <object type="image/svg+xml" data="/csusAnimatedLogo.svg" className="h-[52px] w-auto flex-shrink-0" aria-label="CSUS" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] tracking-[3.5px] text-pink/50 uppercase font-semibold">
                  University of Calgary
                </span>
                <span className="text-[10px] tracking-[3.5px] text-pink/50 uppercase font-semibold">
                  Presidential Campaign · 2026 – 2027
                </span>
              </div>
            </motion.div>

            <Divider delay={0.1} className="mb-7" flip />
            <Hero />
            <RoleBadge />
            <Tagline />
            <Katana />
            <Countdown />
          </div>

          {/* Cards zone — pushes to bottom, horizontal grid on desktop */}
          <div className="mt-auto flex flex-col gap-2 lg:grid lg:grid-cols-4 lg:gap-4">
            <Divider delay={0.48} className="my-3 lg:hidden" />
            <PlatformCards />
            <ComingSoon />
          </div>
        </Section>

        {/* ── WHO AM I ── */}
        <Section
          id="who-am-i"
          bgImage="/who-am-i-bg.png"
          bgPosition="70% 30%"
          bgOpacity={0.4}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            <motion.span variants={fadeUp} custom={0.1}
              className="text-[9px] tracking-[4px] text-pink/45 uppercase font-semibold mb-3"
            >Get to Know</motion.span>

            <motion.h1 variants={fadeUp} custom={0.2}
              className="font-display text-4xl md:text-5xl font-black text-light leading-tight mb-2"
              style={{ textShadow: '0 0 30px rgba(224,90,170,0.5), 0 0 60px rgba(82,16,83,0.6)' }}
            >
              Who am <span className="text-pink-bright">I</span>?
            </motion.h1>

            <Divider delay={0.3} className="my-6" />

            <motion.div variants={fadeUp} custom={0.4} className="flex items-center gap-4 mb-8">
              <img src="/chars/nanashi.png" alt="Don chibi" className="w-16 h-16 object-contain flex-shrink-0 pixelated"
                style={{ filter: 'drop-shadow(0 0 6px rgba(224,90,170,0.4))', imageRendering: 'pixelated' }} />
              <div>
                <h3 className="font-heading text-sm tracking-[3px] text-pink uppercase font-bold mb-1">Don Laliberte</h3>
                <p className="text-[13px] text-light/55 leading-relaxed">Computer Science Student · University of Calgary</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={0.5} className="space-y-6">
              <ContentBlock title="The Short Version" index={0}>
                I'm a multidisciplined student — a workaholic and a creative. When I see value in something, I pursue it. Directed, precise, and deliberate.
              </ContentBlock>
              <ContentBlock title="Background" index={1}>
                I come from a background of turning nothing into something. As an only child of middle-aged parents — one the oldest of five siblings, the other a 1st-gen migrant youngest of twelve — my life has been shaped by unique perspectives. I'm a product of my environment in the truest sense, and my values reflect emotional intelligence and the responsibility of a provider.
              </ContentBlock>
              <ContentBlock title="What Drives Me" index={2}>
                Honestly? Love. I care about our team, the systemic problems in comp sci, and the students inside and outside our club. Most of you knew me as the person helping out in the course Discords — showing up for people well outside my responsibility. That's just who I am. I view everyone like family, and I do it out of principle, not for recognition. If there's a way to make things easier for people, I'll find it. Problem solver and optimizer at heart.
              </ContentBlock>
              <ContentBlock title="Outside the Code" index={3}>
                My musical background, esports experience, and involvement across multiple clubs have shaped me into more than just someone who works hard. My story is built on experiences and lessons accumulated over 23 years — and that's what I bring to the table.
              </ContentBlock>
            </motion.div>
          </motion.div>
        </Section>

        {/* ── WHAT IS CSUS ── */}
        <Section
          id="what-is-csus"
          bgImage="/what-is-csus-bg.png"
          bgPosition="70% 40%"
          bgOpacity={0.38}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            <motion.span variants={fadeUp} custom={0.1}
              className="text-[9px] tracking-[4px] text-pink/45 uppercase font-semibold mb-3"
            >Community & Purpose</motion.span>

            <motion.h1 variants={fadeUp} custom={0.2}
              className="font-display text-4xl md:text-5xl font-black text-light leading-tight mb-2"
              style={{ textShadow: '0 0 30px rgba(224,90,170,0.5), 0 0 60px rgba(82,16,83,0.6)' }}
            >
              What is <span className="text-pink-bright">CSUS</span> to me?
            </motion.h1>

            <Divider delay={0.3} className="my-6" />

            <motion.div variants={fadeUp} custom={0.4} className="space-y-6">
              <ContentBlock title="More Than an Acronym" index={0}>
                CSUS is a place that welcomes all types of comp sci students. Unlike other clubs with narrower focuses, we are a club for the entirety of computer science — and that's what makes us different. We are a club for all people.
              </ContentBlock>
              <ContentBlock title="What It Means to Me" index={1}>
                CSUS gave me a place on campus to be myself and connect with like-minded people. It showed me this major doesn't have to be competitive or gatekept — it can be something that brings people together. CalgaryHacks 2025 was one of the most life-changing experiences I've had, and the people I met there are now some of my closest friends.
              </ContentBlock>
              <ContentBlock title="What It Should Be" index={2}>
                CSUS should continue being that facilitator of connection — not just for the people already in the room, but for new ones too. I've spoken with previous generations and compiled their voices. I'll keep listening. The club should always be earning new regulars, not just retaining them.
              </ContentBlock>
              <ContentBlock title="The Potential" index={3}>
                The size and ambition of this year's team proves this club can reach new heights. With ASH on the horizon and future collabs planned, you'll have my unconditional support as president. My role is both guide and mentor — for this generation and the one that follows.
              </ContentBlock>
              <ContentBlock title="My Role in It" index={4}>
                Regardless of title, my role is making sure the club stays true to its founding values while keeping the workload fair for everyone. This is supposed to be fun. When things get hard, it's my obligation to step in and hold it together — a pillar you can lean on when there are questions and you need solutions.
              </ContentBlock>
            </motion.div>
          </motion.div>
        </Section>

        {/* ── GOALS ── */}
        <Section
          id="goals"
          bgImage="/goals-bg.png"
          bgPosition="70% 50%"
          bgOpacity={0.35}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col"
          >
            <motion.span variants={fadeUp} custom={0.1}
              className="text-[9px] tracking-[4px] text-pink/45 uppercase font-semibold mb-3"
            >Vision & Priorities</motion.span>

            <motion.h1 variants={fadeUp} custom={0.2}
              className="font-display text-4xl md:text-5xl font-black text-light leading-tight mb-2"
              style={{ textShadow: '0 0 30px rgba(224,90,170,0.5), 0 0 60px rgba(82,16,83,0.6)' }}
            >
              What are my <span className="text-pink-bright">Goals</span>?
            </motion.h1>

            <Divider delay={0.3} className="my-6" />

            <motion.p variants={fadeUp} custom={0.35}
              className="text-sm text-light/55 leading-relaxed mb-8 max-w-xl"
            >
              These aren't vague promises. These are the concrete pillars I'm building my presidency on.
              Every goal has action items, and every action item has my name on it.
            </motion.p>

            <GoalAccordion />

            <div className="mt-auto pt-12">
              <Footer />
            </div>
          </motion.div>
        </Section>
      </div>
    </IntroSequence>
  )
}

function ContentBlock({ title, children, index }: { title: string; children: React.ReactNode; index?: number }) {
  return (
    <div className="border-l-2 border-pink/20 pl-5 relative overflow-hidden">
      {index !== undefined && (
        <span className="absolute right-0 top-0 text-[72px] font-black text-pink/[0.04] leading-none select-none pointer-events-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      )}
      <h3 className="font-heading text-[11px] tracking-[3px] text-pink uppercase font-bold mb-2">
        {title}
      </h3>
      <p className="text-sm text-light/55 leading-relaxed">{children}</p>
    </div>
  )
}

function GoalAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-3"
    >
      {goals.map((goal, i) => {
        const isOpen = activeIndex === i
        return (
          <motion.div
            key={goal.title}
            variants={staggerItem}
            className="relative border border-pink/15 bg-purple-deep/40 overflow-hidden transition-all duration-300"
            style={isOpen ? { borderColor: 'rgba(224,90,170,0.35)', background: 'rgba(82,16,83,0.2)' } : {}}
          >
            <div className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink to-purple-rich transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

            <button
              type="button"
              onClick={() => setActiveIndex(isOpen ? null : i)}
              className="w-full flex items-center gap-3 p-5 text-left cursor-pointer"
            >
              <img
                src={goal.sprite}
                alt={goal.title}
                className="w-10 h-10 object-contain flex-shrink-0"
                style={{ filter: 'drop-shadow(0 0 6px rgba(224,90,170,0.4))', imageRendering: 'pixelated' }}
              />
              <h3 className="font-heading text-[11px] tracking-[3px] text-pink uppercase font-bold flex-1">
                {goal.title}
              </h3>
              <motion.svg
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.25 }}
                className="w-4 h-4 flex-shrink-0"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: 'rgba(224,90,170,0.5)' }}
              >
                <path d="M6 4l4 4-4 4" />
              </motion.svg>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pl-[4.5rem]">
                    <p className="text-sm text-light/55 leading-relaxed">{goal.desc}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

function Corner({ className }: { className: string }) {
  return (
    <div className={`w-[55px] h-[55px] z-10 ${className}`}>
      <div className="absolute w-full h-[1.5px] top-0 left-0 bg-pink opacity-70" />
      <div className="absolute w-[1.5px] h-full top-0 left-0 bg-pink opacity-70" />
    </div>
  )
}
