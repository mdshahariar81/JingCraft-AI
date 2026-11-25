import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const artifacts = [
  {
    id: '01',
    name: 'The Art of Porcelain',
    subtitle: 'Blue & White Masterpiece',
    dynasty: 'Ming Dynasty',
    period: '14th–17th Century',
    technique: 'Underglaze cobalt painting',
    material: 'Porcelain',
    image: '/images/museum/featured-artifacts/blue_white_vase.png',
    description:
      'A timeless expression of Chinese porcelain artistry. Delicate cobalt brushwork unfolds across a luminous white surface, reflecting the refinement of Ming ceramic traditions.',
    label: 'BLUE & WHITE',
  },
  {
    id: '02',
    name: 'The Serenity of Celadon',
    subtitle: 'The Beauty of Simplicity',
    dynasty: 'Song Dynasty',
    period: '10th–13th Century',
    technique: 'High-fired glaze',
    material: 'Stoneware',
    image: '/images/museum/featured-artifacts/celadon_bowl.png',
    description:
      'Admired for its quiet elegance, celadon transforms subtle glaze tones into an art of restraint. Its jade-like surface and refined forms reflect a tradition that celebrates balance, simplicity and natural beauty.',
    label: 'CELADON',
  },
  {
    id: '03',
    name: 'The Spirit of the Horse',
    subtitle: 'Tang Sancai Sculpture',
    dynasty: 'Tang Dynasty',
    period: '7th–9th Century',
    technique: 'Three-colour lead glazing',
    material: 'Ceramic',
    image: '/images/museum/featured-artifacts/tang_sancai_horse.png',
    description:
      'A celebration of movement, vitality and cultural exchange. Tang sancai figures capture the confidence and energy of an era when horses symbolized power, prestige and connection.',
    label: 'TANG SANCAI',
  },
  {
    id: '04',
    name: 'The Elegance of Colour',
    subtitle: 'Famille Rose Decorative Jar',
    dynasty: 'Qing Dynasty',
    period: '18th–19th Century',
    technique: 'Overglaze enamel painting',
    material: 'Porcelain',
    image: '/images/museum/featured-artifacts/famille_rose_jar.png',
    description:
      'Floral compositions, layered colours and refined enamel details embody the decorative sophistication of Qing porcelain. A harmony of craftsmanship, symbolism and artistic imagination.',
    label: 'FAMILLE ROSE',
  },
]

export default function FeaturedArtifacts() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f5f1e7] text-[#19324d]"
      style={{ height: '400svh' }}
    >
      {/* STICKY EXHIBITION STAGE */}

      <div className="sticky top-[68px] flex h-[calc(100svh-68px)] flex-col overflow-hidden">

        {/* SECTION HEADER */}

        <header className="relative z-20 mx-auto w-full max-w-[1400px] shrink-0 px-5 pt-4 sm:px-8 sm:pt-5 md:px-12 md:pt-7 lg:px-20 lg:pt-9">

          <div className="flex items-center gap-2">
            <span className="h-px w-7 bg-[#b58b4c] md:w-10" />

            <span className="text-[8px] tracking-[0.2em] text-[#a47a3e] md:text-xs">
              THE MUSEUM COLLECTION
            </span>
          </div>

          <h2 className="mt-2 font-serif text-[27px] leading-tight sm:text-3xl md:mt-3 md:text-5xl lg:text-6xl">
            Featured Artifacts
          </h2>

          <p className="mt-2 max-w-xl text-[11px] leading-[1.65] text-[#718096] sm:text-xs md:mt-3 md:text-base md:leading-7">
            Discover the stories, craftsmanship and cultural significance
            behind remarkable ceramic masterpieces.
          </p>
        </header>

        {/* EXHIBITION CONTENT */}

        <div className="relative mx-auto min-h-0 w-full max-w-[1400px] flex-1 px-4 sm:px-8 md:px-12 lg:px-20">

          <div className="relative h-full w-full">

            {artifacts.map((artifact, index) => (
              <ArtifactSlide
                key={artifact.id}
                artifact={artifact}
                index={index}
                progress={scrollYProgress}
              />
            ))}

          </div>
        </div>

        {/* PROGRESS FOOTER */}

        <footer className="relative z-30 mx-auto w-full max-w-[1400px] shrink-0 px-5 pb-3 sm:px-8 sm:pb-4 md:px-12 md:pb-5 lg:px-20">

          <div className="flex items-center justify-between gap-2 border-t border-[#d9c9a8]/70 pt-3 md:pt-5">

            <div className="flex items-center gap-2">

              <span className="text-[8px] tracking-[0.16em] text-[#a47a3e] sm:text-[9px] md:text-xs md:tracking-[0.2em]">
                SCROLL TO EXPLORE
              </span>

              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </motion.div>

            </div>

            <div className="flex items-center gap-2">

              <ProgressNumber progress={scrollYProgress} />

              <span className="text-[9px] text-[#8b9aaa] md:text-xs">
                / 04
              </span>

              <div className="ml-1 h-[2px] w-10 overflow-hidden bg-[#ddd3c0] sm:w-16 md:w-32">

                <motion.div
                  className="h-full bg-[#b58b4c]"
                  style={{
                    scaleX: scrollYProgress,
                    transformOrigin: 'left',
                  }}
                />

              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

/* =========================================================
   SINGLE ARTIFACT SLIDE

   Desktop:
   Artwork left | Information right

   Mobile:
   Dedicated artwork zone above
   Dedicated information zone below
========================================================= */

function ArtifactSlide({
  artifact,
  index,
  progress,
}: {
  artifact: (typeof artifacts)[number]
  index: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const opacity = createOpacity(progress, index)

  const scale = useTransform(
    progress,
    [index * 0.25, Math.min(index * 0.25 + 0.12, 1)],
    [0.92, 1],
  )

  const contentY = useTransform(
    progress,
    [index * 0.25, Math.min(index * 0.25 + 0.12, 1)],
    [18, 0],
  )

  return (
    <motion.div
      className="absolute inset-0 grid grid-cols-1 grid-rows-[42%_58%] lg:grid-cols-[54%_46%] lg:grid-rows-1"
      style={{ opacity }}
    >

      {/* ARTWORK REGION */}

      <div className="relative flex min-h-0 items-center justify-center overflow-hidden">

        {/* Decorative rings */}

        <div className="pointer-events-none absolute aspect-square w-[85%] max-w-[230px] rounded-full border border-[#d9c9a8]/40 sm:max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" />

        <div className="pointer-events-none absolute aspect-square w-[70%] max-w-[190px] rounded-full border border-[#d9c9a8]/30 sm:max-w-[230px] md:max-w-[340px] lg:max-w-[430px]" />

        <div className="pointer-events-none absolute aspect-square w-[60%] rounded-full bg-[#e8dfcc]/40 blur-3xl" />

        {/* Ceramic image */}

        <motion.img
          src={artifact.image}
          alt={artifact.name}
          className="relative z-10 h-[92%] w-[90%] object-contain sm:w-[85%] lg:h-[78%] lg:w-[90%]"
          style={{ scale }}
          draggable={false}
        />

        {/* Artwork label */}

        <div className="absolute bottom-2 z-20 sm:bottom-3 lg:bottom-[8%]">

          <span className="border border-[#d9c9a8] bg-[#f5f1e7]/70 px-3 py-1.5 text-[7px] tracking-[0.2em] text-[#a47a3e] sm:text-[9px]">
            CERAMIC HERITAGE
          </span>

        </div>
      </div>

      {/* INFORMATION REGION */}

      <motion.article
        className="relative flex min-h-0 flex-col justify-center overflow-hidden px-2 pb-1 sm:px-4 lg:px-8 xl:px-12"
        style={{ y: contentY }}
      >

        {/* Artifact label */}

        <div className="mb-2 flex items-center gap-2 sm:mb-3 lg:mb-5">

          <span className="text-[9px] tracking-[0.18em] text-[#b58b4c] sm:text-xs">
            {artifact.id}
          </span>

          <span className="h-px w-6 bg-[#b58b4c] sm:w-10" />

          <span className="text-[8px] tracking-[0.16em] text-[#a47a3e] sm:text-xs">
            {artifact.label}
          </span>
        </div>

        {/* Subtitle */}

        <span className="text-[8px] tracking-[0.1em] text-[#8b9aaa] sm:text-xs lg:text-sm">
          {artifact.subtitle}
        </span>

        {/* Title */}

        <h3 className="mt-1 font-serif text-[22px] leading-tight sm:text-3xl md:text-4xl lg:mt-3 lg:text-5xl">
          {artifact.name}
        </h3>

        {/* Dynasty */}

        <p className="mt-1 text-[9px] text-[#b58b4c] sm:mt-2 sm:text-xs lg:mt-3 lg:text-sm">
          {artifact.dynasty}
        </p>

        {/* Description label */}

        <div className="mt-2.5 flex items-center gap-2 sm:mt-4 lg:mt-7">

          <span className="h-px w-5 bg-[#b58b4c] sm:w-8" />

          <span className="text-[7px] tracking-[0.16em] text-[#a47a3e] sm:text-[9px] lg:text-xs">
            A CLOSER LOOK
          </span>
        </div>

        {/* Description */}

        <p className="mt-1.5 max-w-lg text-[9px] leading-[1.6] text-[#718096] sm:text-xs sm:leading-6 lg:mt-4 lg:text-base lg:leading-8">
          {artifact.description}
        </p>

        {/* Metadata */}

        <div className="mt-2 grid grid-cols-3 gap-2 border-t border-[#d9c9a8]/70 pt-2.5 sm:mt-4 sm:gap-3 sm:pt-3 lg:mt-7 lg:gap-5 lg:pt-6">

          <Metadata
            label="PERIOD"
            value={artifact.period}
          />

          <Metadata
            label="TECHNIQUE"
            value={artifact.technique}
          />

          <Metadata
            label="MATERIAL"
            value={artifact.material}
          />

        </div>

      </motion.article>
    </motion.div>
  )
}

/* =========================================================
   SCROLL OPACITY TRANSITION
========================================================= */

function createOpacity(
  progress: ReturnType<typeof useScroll>['scrollYProgress'],
  index: number,
) {
  const start = index * 0.25

  if (index === 0) {
    return useTransform(
      progress,
      [0, 0.18, 0.25],
      [1, 1, 0],
    )
  }

  if (index === 3) {
    return useTransform(
      progress,
      [0.75, 0.82, 1],
      [0, 1, 1],
    )
  }

  return useTransform(
    progress,
    [start, start + 0.05, start + 0.20, start + 0.25],
    [0, 1, 1, 0],
  )
}

/* =========================================================
   METADATA
========================================================= */

function Metadata({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="min-w-0">

      <span className="text-[6px] tracking-[0.13em] text-[#a47a3e] sm:text-[8px] lg:text-[10px]">
        {label}
      </span>

      <p className="mt-1 break-words font-serif text-[8px] leading-[1.4] sm:text-xs sm:leading-5 lg:mt-2 lg:text-sm lg:leading-6">
        {value}
      </p>

    </div>
  )
}

/* =========================================================
   SCROLL PROGRESS NUMBER
========================================================= */

function ProgressNumber({
  progress,
}: {
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const number = useTransform(
    progress,
    [0, 0.25, 0.5, 0.75, 1],
    ['01', '02', '03', '04', '04'],
  )

  return (
    <motion.span className="text-[9px] tracking-widest md:text-xs">
      {number}
    </motion.span>
  )
}
