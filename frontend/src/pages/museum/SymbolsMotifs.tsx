import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const motifs = [
  {
    id: 'dragon',
    name: 'The Dragon',
    subtitle: 'Power & Prosperity',
    character: '龍',
    image: '/images/museum/motifs/dragon_vase.png',
    selectorImage: '/images/museum/motifs/dragon_motif.png',
    description:
      'The dragon stands as one of the most powerful symbols in Chinese culture. Representing wisdom, strength, prosperity and imperial authority, its presence on porcelain reflects a timeless pursuit of auspicious fortune.',
    meaning: 'Wisdom · Strength · Fortune',
  },
  {
    id: 'phoenix',
    name: 'The Phoenix',
    subtitle: 'Harmony & Renewal',
    character: '鳳',
    image: '/images/museum/motifs/phoenix_motif.png',
    selectorImage: '/images/museum/motifs/phoenix_motif.png',
    description:
      'The phoenix symbolizes renewal, grace and harmony. In traditional Chinese art, it is associated with virtue, beauty and the balance of complementary forces.',
    meaning: 'Harmony · Renewal · Grace',
  },
  {
    id: 'peony',
    name: 'The Peony',
    subtitle: 'Beauty & Abundance',
    character: '牡丹',
    image: '/images/museum/motifs/peony_motif.png',
    selectorImage: '/images/museum/motifs/peony_motif.png',
    description:
      'Often celebrated as the flower of wealth and honour, the peony represents abundance, beauty and prosperity. Its layered petals have inspired generations of ceramic artists.',
    meaning: 'Abundance · Beauty · Honour',
  },
  {
    id: 'lotus',
    name: 'The Lotus',
    subtitle: 'Purity & Enlightenment',
    character: '蓮',
    image: '/images/museum/motifs/lotus_motif.png',
    selectorImage: '/images/museum/motifs/lotus_motif.png',
    description:
      'The lotus rises from muddy water yet remains pure. It represents spiritual growth, inner wisdom and the ability to remain graceful through adversity.',
    meaning: 'Purity · Wisdom · Growth',
  },
]

export default function SymbolsMotifs() {
  const [activeMotif, setActiveMotif] = useState(motifs[0])

  return (
    <section
      id="symbols-motifs"
      className="relative overflow-hidden bg-[#F7F4EC] px-5 py-20 text-[#122E49] sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      {/* Background decorative ink landscape */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[35%] opacity-[0.12]"
        style={{
          backgroundImage:
            "url('/images/museum/artistry-background.png')",
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">

        {/* Editorial section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B88637]" />

            <p className="text-[10px] font-semibold tracking-[0.28em] text-[#A4752B] sm:text-xs">
              SYMBOLS & CULTURAL MEANINGS
            </p>
          </div>

          <h2 className="mx-auto max-w-3xl text-center font-serif text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Stories Written
            <span className="italic text-[#A4752B]"> in Porcelain</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-7 text-[#637487] sm:text-base sm:leading-8">
            Beyond decoration, every motif carries a story,
            a belief and a cultural memory passed through generations.
          </p>
        </motion.div>

        {/* Main editorial display */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Artwork */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex min-h-[350px] items-center justify-center sm:min-h-[500px] lg:min-h-[580px]"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A441]/10 blur-[80px]" />

            <AnimatePresence mode="wait">
              <motion.img
                key={activeMotif.id}
                src={activeMotif.image}
                alt={activeMotif.name}
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -10 }}
                transition={{ duration: 0.45 }}
                className="relative z-10 max-h-[450px] w-full max-w-[520px] object-contain sm:max-h-[550px] lg:max-h-[600px]"
              />
            </AnimatePresence>

            {/* Chinese character watermark */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMotif.character}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.06 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute right-3 top-0 font-serif text-[100px] sm:right-10 sm:text-[160px] lg:text-[200px]"
              >
                {activeMotif.character}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Cultural description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMotif.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-xs tracking-[0.22em] text-[#A4752B]">
                  CULTURAL SYMBOL
                </p>

                <div className="mt-5 flex items-start gap-4">
                  <h3 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                    {activeMotif.name}
                  </h3>

                  <span className="mt-2 font-serif text-3xl text-[#B88637]/70 sm:text-4xl">
                    {activeMotif.character}
                  </span>
                </div>

                <p className="mt-4 text-sm font-medium tracking-wide text-[#A4752B]">
                  {activeMotif.subtitle}
                </p>

                <div className="my-8 h-px w-24 bg-[#C9A66B]" />

                <p className="max-w-xl text-base leading-8 text-[#53677C] sm:text-lg sm:leading-9">
                  {activeMotif.description}
                </p>

                <div className="mt-8">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#A4752B]">
                    SYMBOLIC MEANING
                  </p>

                  <p className="mt-3 font-serif text-lg italic text-[#122E49] sm:text-xl">
                    {activeMotif.meaning}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#C9A66B]" />

                  <span className="text-xs tracking-[0.15em] text-[#637487]">
                    CHINESE CERAMIC HERITAGE
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Horizontal motif selector */}
        <div className="mt-12 border-t border-[#D9C9AA]/70 pt-8 sm:mt-16 sm:pt-10">

          <p className="mb-6 text-center text-[10px] font-semibold tracking-[0.22em] text-[#A4752B]">
            EXPLORE THE SYMBOLS
          </p>

          <div className="flex justify-center gap-5 overflow-x-auto pb-4 scrollbar-hide sm:gap-8">

            {motifs.map((motif, index) => {
              const selected = activeMotif.id === motif.id

              return (
                <button
                  key={motif.id}
                  onClick={() => setActiveMotif(motif)}
                  className="group relative flex min-w-[145px] items-center gap-3 text-left sm:min-w-[190px] sm:gap-4"
                >
                  <motion.div
                    animate={{
                      scale: selected ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative flex h-[70px] w-[70px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#EDE5D5] sm:h-[90px] sm:w-[90px]"
                  >
                    <img
                      src={motif.selectorImage}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover mix-blend-multiply"
                    />
                  </motion.div>

                  <div className="min-w-0">
                    <p
                      className={`font-serif text-base transition-colors sm:text-lg ${
                        selected
                          ? 'text-[#A4752B]'
                          : 'text-[#122E49] group-hover:text-[#A4752B]'
                      }`}
                    >
                      {motif.name}
                    </p>

                    <p className="mt-1 text-xs text-[#637487]">
                      {motif.subtitle}
                    </p>
                  </div>

                  {selected && (
                    <motion.span
                      layoutId="motif-active-indicator"
                      className="absolute -bottom-4 left-0 right-0 h-[2px] bg-[#B88637]"
                    />
                  )}

                  {index !== motifs.length - 1 && (
                    <span className="ml-auto h-10 w-px shrink-0 bg-[#D9C9AA]/70" />
                  )}
                </button>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
