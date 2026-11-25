import { motion } from 'motion/react'

const eras = [
  {
    number: '01',
    period: '5000–2000 BCE',
    title: 'The Origins of Ceramics',
    subtitle: 'NEOLITHIC PERIOD',
    description:
      'The earliest Chinese pottery emerged from everyday life. Hand-shaped vessels, simple forms and early decorative techniques laid the foundation for a remarkable ceramic tradition.',
    image: '/images/craft/ceramic-shaping.png',
    alignment: 'left',
  },
  {
    number: '02',
    period: '1600–221 BCE',
    title: 'Bronze Age Influence',
    subtitle: 'SHANG & ZHOU DYNASTIES',
    description:
      'Ceramic vessels began reflecting the forms and decorative language of bronze ritual objects, evolving alongside spiritual practices and early Chinese civilization.',
    image: '/images/craft/hand-painting.png',
    alignment: 'right',
  },
  {
    number: '03',
    period: '206 BCE–220 CE',
    title: 'The Rise of Glazed Pottery',
    subtitle: 'HAN DYNASTY',
    description:
      'Advances in firing technology and glazing introduced new surfaces, colours and shapes, making ceramics increasingly sophisticated and widely used.',
    image: '/images/craft/glazing.png',
    alignment: 'left',
  },
  {
    number: '04',
    period: '618–907 CE',
    title: 'A Golden Age of Colour',
    subtitle: 'TANG DYNASTY',
    description:
      'Tang sancai brought vibrant green, amber and cream glazes to life. Ceramic art reflected a cosmopolitan world shaped by trade, culture and artistic exchange.',
    image: '/images/museum/tang-sancai.jpg',
    alignment: 'right',
  },
  {
    number: '05',
    period: '960–1279 CE',
    title: 'The Beauty of Simplicity',
    subtitle: 'SONG DYNASTY',
    description:
      'Song ceramics celebrated restraint, natural textures and subtle glaze tones. Celadon and other refined ceramic traditions embodied a profound aesthetic philosophy.',
    image: '/images/museum/song-celadon.jpg',
    alignment: 'left',
  },
  {
    number: '06',
    period: '1368–1912 CE',
    title: 'The Imperial Masterpieces',
    subtitle: 'MING & QING DYNASTIES',
    description:
      'Blue and white porcelain, intricate enamel decoration and extraordinary craftsmanship transformed Chinese ceramics into internationally celebrated works of art.',
    image: '/images/museum/blue-white.jpg',
    alignment: 'right',
  },
]

export default function JourneyThroughTime() {
  return (
    <section
      id="journey-through-time"
      className="relative overflow-hidden bg-[#10263B] px-5 py-20 text-[#F5F2E9] sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(217,164,65,0.07),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1440px]">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-3xl text-center sm:mb-24"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D9A441]/60" />

            <span className="text-[10px] tracking-[0.28em] text-[#D9A441] sm:text-xs">
              A HISTORY OF ART & CULTURE
            </span>

            <span className="h-px w-8 bg-[#D9A441]/60" />
          </div>

          <h2 className="font-serif text-3xl leading-tight sm:text-5xl lg:text-6xl">
            Journey Through Time
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B7C7D7]/80 sm:mt-6 sm:text-base sm:leading-8">
            Travel through thousands of years of Chinese ceramic
            history, from the earliest clay vessels to the
            extraordinary masterpieces of imperial China.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Central timeline line */}
          <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-transparent via-[#D9A441]/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">

            {eras.map((era) => (
              <motion.div
                key={era.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: 0.08,
                }}
                className="relative grid grid-cols-1 md:grid-cols-2 md:gap-16 lg:gap-24"
              >
                {/* Timeline marker */}
                <div className="absolute left-4 top-8 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border border-[#D9A441] bg-[#10263B] md:left-1/2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D9A441]" />
                </div>

                {/* Image side */}
                <div
                  className={`pl-10 md:pl-0 ${
                    era.alignment === 'right'
                      ? 'md:order-2'
                      : 'md:order-1'
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-xl border border-white/[0.08]">

                    <div className="aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                      <img
                        src={era.image}
                        alt={era.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071725]/50 to-transparent" />

                    {/* Image number */}
                    <div className="absolute left-5 top-5">
                      <span className="font-serif text-4xl text-white/80 sm:text-5xl">
                        {era.number}
                      </span>
                    </div>

                    {/* Date */}
                    <div className="absolute bottom-5 left-5">
                      <span className="rounded-full border border-[#D9A441]/30 bg-[#0B1F33]/70 px-4 py-2 text-[10px] tracking-[0.15em] text-[#D9A441] backdrop-blur-md sm:text-xs">
                        {era.period}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Content side */}
                <div
                  className={`flex flex-col justify-center pl-10 pt-6 md:pl-0 md:pt-0 ${
                    era.alignment === 'right'
                      ? 'md:order-1 md:text-right'
                      : 'md:order-2 md:text-left'
                  }`}
                >
                  <span className="text-[10px] tracking-[0.25em] text-[#D9A441] sm:text-xs">
                    {era.subtitle}
                  </span>

                  <h3 className="mt-4 font-serif text-2xl leading-snug text-white sm:text-3xl lg:text-4xl">
                    {era.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-[#B7C7D7]/80 sm:text-base sm:leading-8 md:ml-0">
                    {era.description}
                  </p>

                  {/* Decorative line */}
                  <div
                    className={`mt-7 flex ${
                      era.alignment === 'right'
                        ? 'md:justify-end'
                        : 'md:justify-start'
                    }`}
                  >
                    <span className="h-px w-16 bg-[#D9A441]/50" />
                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

        {/* Closing text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center sm:mt-28"
        >
          <p className="font-serif text-xl italic text-[#D9A441]/90 sm:text-2xl">
            Thousands of years. One extraordinary legacy.
          </p>

          <p className="mt-4 text-[10px] tracking-[0.2em] text-white/40 sm:text-xs">
            CHINESE CERAMIC HERITAGE
          </p>
        </motion.div>

      </div>
    </section>
  )
}
