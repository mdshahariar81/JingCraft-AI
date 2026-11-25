import { motion } from 'motion/react'
import {
  ArrowRight,
  Flame,
  Droplets,
  Pencil,
  RotateCcw,
  Sparkles,
} from 'lucide-react'

const techniques = [
  {
    title: 'Shaping',
    description:
      'Forming raw clay into elegant and balanced vessels through traditional handcraft and wheel techniques.',
    image: '/images/craft/ceramic-shaping.png',
    icon: RotateCcw,
  },
  {
    title: 'Hand Painting',
    description:
      'Adding intricate patterns that express culture, history and artistic imagination.',
    image: '/images/craft/hand-painting.png',
    icon: Pencil,
  },
  {
    title: 'Glazing',
    description:
      'Applying refined glazes that create rich colours, luminous surfaces and unique textures.',
    image: '/images/craft/glazing.png',
    icon: Droplets,
  },
  {
    title: 'Kiln Firing',
    description:
      'Transforming clay and glaze through high heat, where art, chemistry and craftsmanship meet.',
    image: '/images/craft/kiln-firing.png',
    icon: Flame,
  },
]

export default function ArtistryTechniques() {
  return (
    <section
      id="artistry-techniques"
      className="relative isolate overflow-hidden bg-[#F8F5EF] px-5 py-20 text-[#102C46] sm:px-8 sm:py-24 lg:px-16 lg:py-28"
    >
      {/* Watercolor artwork confined to the lower section */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 -z-20 h-[42%] sm:h-[38%] lg:h-[32%] bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/museum/artistry-background.png')",
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
        }}
      />

      {/* Soft watercolor blending layer */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-[42%] sm:h-[38%] lg:h-[32%] bg-gradient-to-t from-transparent via-[#FAF8F3]/10 to-[#FAF8F3]/80" />

      {/* Decorative animated glow */}
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[12%] h-40 w-40 rounded-full bg-[#D9A441]/10 blur-3xl sm:h-60 sm:w-60"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C58B32]" />

            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#9C6C22] sm:text-xs">
              ARTISTRY & TECHNIQUES
            </span>

            <span className="h-px w-8 bg-[#C58B32]" />
          </div>

          <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            The Craftsmanship Behind
            <span className="block mt-2">Chinese Ceramics</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#526477] sm:mt-6 sm:text-base sm:leading-8">
            A closer look at the time-honoured techniques that
            transform simple clay into enduring works of art.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#D9A441]" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="mx-3"
            >
              <Sparkles
                size={18}
                strokeWidth={1.3}
                className="text-[#C58B32]"
              />
            </motion.div>

            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#D9A441]" />
          </div>
        </motion.div>

        {/* Technique cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">

          {techniques.map((technique, index) => {
            const Icon = technique.icon

            return (
              <motion.article
                key={technique.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-2xl border border-[#DCC9A8]/70 bg-[#FFFCF7]/70 shadow-[0_8px_30px_rgba(28,48,65,0.06)] backdrop-blur-[3px] transition-colors duration-300 hover:bg-[#FFFCF7]/90 sm:rounded-[22px]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2">

                  {/* Image */}
                  <div className="relative min-h-[230px] overflow-hidden sm:min-h-[280px] lg:min-h-[310px]">

                    <motion.img
                      src={technique.image}
                      alt={technique.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                      whileHover={{ scale: 1.07 }}
                      transition={{ duration: 0.7 }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#102C46]/20 to-transparent" />

                  </div>

                  {/* Content */}
                  <div className="relative flex flex-col justify-center p-5 sm:p-6 lg:p-7">

                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.05 }}
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-[#D9A441]/30 bg-[#F8EEDC]"
                    >
                      <Icon
                        size={21}
                        strokeWidth={1.5}
                        className="text-[#B77C27]"
                      />
                    </motion.div>

                    <h3 className="font-serif text-2xl sm:text-2xl lg:text-3xl">
                      {technique.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#526477]">
                      {technique.description}
                    </p>

                    <div className="mt-5 h-px w-full bg-[#E5D6BD]" />

                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#102C46]">
                      <span className="transition-colors group-hover:text-[#B77C27]">
                        Discover Technique
                      </span>

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                    {/* Decorative corner */}
                    <div className="pointer-events-none absolute bottom-0 right-0 h-14 w-14 opacity-30">
                      <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        className="h-full w-full"
                      >
                        <path
                          d="M100 100 C100 50 50 100 100 50 C50 50 100 0 50 100"
                          stroke="#D9A441"
                          strokeWidth="1.2"
                        />
                      </svg>
                    </div>

                  </div>
                </div>
              </motion.article>
            )
          })}

        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center sm:mt-16"
        >
          <p className="font-serif text-lg italic text-[#9C6C22] sm:text-xl md:text-2xl">
            From clay to masterpiece, every detail tells a story.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
