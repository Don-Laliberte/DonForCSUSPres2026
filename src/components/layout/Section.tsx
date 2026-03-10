import { type ReactNode } from 'react'

interface Props {
  id: string
  bgImage: string
  bgPosition?: string
  bgOpacity?: number
  children: ReactNode
  /** Content width mode: narrow (490px), medium (672px), or full (no constraint) */
  contentWidth?: 'narrow' | 'medium' | 'full'
  className?: string
}

const widthClass: Record<string, string> = {
  narrow: 'max-w-[490px]',
  medium: 'max-w-2xl',
  full: '',
}

export default function Section({
  id,
  bgImage,
  bgPosition = 'center',
  bgOpacity = 0.45,
  children,
  contentWidth = 'medium',
  className = '',
}: Props) {
  return (
    <section id={id} className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: bgPosition,
          opacity: bgOpacity,
          filter: 'contrast(1.08) brightness(0.92)',
        }}
      />

      {/* Left-to-right fade */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to right,
            rgba(26,10,26,0.92) 0%,
            rgba(26,10,26,0.55) 28%,
            rgba(26,10,26,0.10) 52%,
            rgba(26,10,26,0.0) 68%)`,
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-ink to-transparent" />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-ink/90 to-transparent" />

      {/* Color tint */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 75% 35%, rgba(82,16,83,0.32) 0%, transparent 55%),
            radial-gradient(ellipse at 20% 80%, rgba(86,85,131,0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Content — margin matches the fixed decorative border (inset-3.5 = 14px) */}
      <div
        className={`
          relative z-[5] flex flex-col
          min-h-[calc(100vh-28px)] m-3.5
          pt-8 md:pt-12 pb-8 md:pb-12
          px-8 md:px-12 lg:px-16
          ${widthClass[contentWidth]}
        `}
      >
        {children}
      </div>
    </section>
  )
}
