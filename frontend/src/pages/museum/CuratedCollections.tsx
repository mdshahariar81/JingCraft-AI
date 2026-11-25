import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

const collections = [
  {
    id: '01',
    name: 'Blue & White Porcelain',
    period: 'MING & QING DYNASTIES',
    description:
      'The timeless elegance of cobalt blue painting on luminous white porcelain.',
    image: '/images/museum/blue-white.jpg',
    accent: 'Cobalt Heritage',
  },
  {
    id: '02',
    name: 'Song Dynasty Celadon',
    period: 'SONG DYNASTY · 960–1279',
    description:
      'Subtle jade-like glazes reflecting harmony, simplicity and natural beauty.',
    image: '/images/museum/song-celadon.jpg',
    accent: 'Quiet Elegance',
  },
  {
    id: '03',
    name: 'Tang Dynasty Sancai',
    period: 'TANG DYNASTY · 618–907',
    description:
      'A vibrant world of three-colour glaze, artistic expression and cultural exchange.',
    image: '/images/museum/tang-sancai.jpg',
    accent: 'Golden Age',
  },
  {
    id: '04',
    name: 'Famille Rose',
    period: 'QING DYNASTY · 18TH CENTURY',
    description:
      'Delicate pink enamels, intricate floral motifs and refined imperial artistry.',
    image: '/images/museum/famille-rose.jpg',
    accent: 'Imperial Art',
  },
]

export default function CuratedCollections() {
  return (
    <section
      id="curated-collections"
      className="relative overflow-hidden bg-[#0B1F33] px-5 py-20 text-[#F5F2E9] sm:px-10 sm:py-28 lg:px-16 lg:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(45,88,120,0.18),transparent_60%)]" />

      {/* Decorative line */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D9A441]/30 to-transparent" />

      <div className="relative mx-auto max-w-[1440px]">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D9A441]/60" />

            <span className="text-[10px] font-medium tracking-[0.28em] text-[#D9A441] sm:text-xs">
              THE COLLECTION
            </span>

            <span className="h-px w-8 bg-[#D9A441]/60" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Explore the Collections
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B7C7D7]/80 sm:mt-6 sm:text-base sm:leading-8">
            Discover centuries of Chinese ceramic artistry through
            distinctive traditions, timeless craftsmanship and
            extraordinary cultural heritage.
          </p>
        </motion.div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

          {collections.map((collection, index) => (
            <motion.article
              key={collection.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              className="group relative"
            >
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#122B43]">

                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">

                  <img
                    src={collection.image}
                    alt={collection.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071725] via-[#071725]/10 to-transparent opacity-90" />

                  {/* Top label */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-[#D9A441]/30 bg-[#0B1F33]/70 px-3 py-1.5 text-[9px] tracking-[0.15em] text-[#D9A441] backdrop-blur-md sm:text-[10px]">
                      {collection.accent}
                    </span>
                  </div>

                  {/* Number */}
                  <div className="absolute right-4 top-4">
                    <span className="text-xs tracking-[0.15em] text-white/50">
                      {collection.id}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

                    <p className="mb-3 text-[9px] tracking-[0.16em] text-[#D9A441] sm:text-[10px]">
                      {collection.period}
                    </p>

                    <h3 className="font-serif text-xl leading-snug text-white sm:text-2xl">
                      {collection.name}
                    </h3>

                    <p className="mt-3 text-xs leading-6 text-white/65 sm:text-sm sm:leading-7">
                      {collection.description}
                    </p>

                    {/* Explore link style */}
                    <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">

                      <span className="text-[10px] font-medium tracking-[0.15em] text-white/70 transition-colors duration-300 group-hover:text-[#D9A441] sm:text-xs">
                        EXPLORE COLLECTION
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="text-[#D9A441] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />

                    </div>

                  </div>

                </div>

                {/* Hover Border */}
                <div className="pointer-events-none absolute inset-0 rounded-xl border border-[#D9A441]/0 transition-colors duration-500 group-hover:border-[#D9A441]/30" />

              </div>

            </motion.article>
          ))}

        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex items-center justify-center sm:mt-16"
        >
          <div className="flex items-center gap-3 text-center">
            <span className="h-px w-8 bg-[#D9A441]/30" />

            <p className="text-[9px] tracking-[0.2em] text-white/40 sm:text-xs">
              PRESERVING ART · CELEBRATING CULTURE
            </p>

            <span className="h-px w-8 bg-[#D9A441]/30" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
