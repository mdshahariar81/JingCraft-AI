
import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'

// Lazy-load the 3D scene to keep the initial homepage bundle lighter.
const PorcelainVase3D = lazy(
  () => import('../../components/museum/PorcelainVase3D')
)

function HomePage() {
  const { t } = useTranslation()
  const prefersReducedMotion = useReducedMotion()

  // Collection metadata controls the visual presentation of each ceramic card.
  const collections = [
    {
      key: 'blueWhite',
      symbol: '青',
      theme: 'bg-[#DCE6E9]',
      symbolColor: 'text-[#193C67]',
      accent: 'bg-[#193C67]',
    },
    {
      key: 'celadon',
      symbol: '瓷',
      theme: 'bg-[#E1E9DF]',
      symbolColor: 'text-[#66877A]',
      accent: 'bg-[#66877A]',
    },
    {
      key: 'familleRose',
      symbol: '彩',
      theme: 'bg-[#F0E2DC]',
      symbolColor: 'text-[#A66F70]',
      accent: 'bg-[#B69A62]',
    },
  ] as const

  return (
    <>
      {/* =====================================================
          1. HERO SECTION
      ====================================================== */}
      <section className="relative isolate overflow-hidden bg-background">
        {/* Decorative background elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-20 size-96 rounded-full bg-jade/5 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-antique-gold/10 blur-3xl"
        />

        <div className="relative mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">

          {/* Hero text content */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-20 order-1 w-full max-w-2xl"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-antique-gold/30 bg-white/60 px-4 py-2">
              <Sparkles size={15} className="text-accent" />

              <span className="text-[10px] font-semibold tracking-[0.22em] text-primary sm:text-xs">
                {t('home.eyebrow')}
              </span>
            </div>

            <h1 className="text-4xl font-semibold leading-[1.2] tracking-tight text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
              {t('home.title')}
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              {t('home.description')}
            </p>

            {/* Hero navigation actions */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/museum"
                className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#193C67] px-7 py-4 text-sm font-medium !text-white shadow-md shadow-primary/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#244D7D]"
              >
                {t('home.explore')}

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/design-studio"
                className="inline-flex items-center justify-center gap-3 rounded-lg border border-primary/20 bg-white/60 px-7 py-4 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white"
              >
                {t('home.create')}
                <Sparkles size={17} />
              </Link>
            </div>

            {/* Brand tagline */}
            <div className="mt-12 flex items-center gap-4 border-t border-border pt-7">
              <div className="flex size-10 items-center justify-center rounded-full bg-jade/10 text-jade">
                <Sparkles size={19} />
              </div>

              <p className="max-w-xs text-xs leading-6 text-muted">
                {t('brand.tagline')}
              </p>
            </div>
          </motion.div>

          {/* Porcelain-inspired hero illustration */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative z-0 order-2 mx-auto w-full max-w-[560px]"
          >
            <div className="relative flex min-h-[480px] flex-col items-center justify-center gap-5 overflow-hidden rounded-[48%_48%_12px_12px] border border-antique-gold/25 bg-[#EAE5D8] px-4 py-8 sm:aspect-[4/5] sm:min-h-0 sm:gap-0 sm:px-0 sm:py-0">

              {/* Decorative circles */}
              <div
                aria-hidden="true"
                className="absolute size-[75%] rounded-full border border-antique-gold/30"
              />

              <div
                aria-hidden="true"
                className="absolute size-[58%] rounded-full border border-primary/10"
              />

              {/* Floating porcelain vase illustration */}
              <motion.div
                animate={
                  prefersReducedMotion ? undefined : { y: [0, -9, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10 w-[65%] max-w-[250px] shrink-0 sm:w-[72%] sm:max-w-[340px]"
              >
                <svg
                  viewBox="0 0 360 440"
                  className="h-auto w-full drop-shadow-2xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Decorative porcelain-inspired vase illustration"
                >
                  <defs>
                    <linearGradient
                      id="porcelainBody"
                      x1="70"
                      y1="50"
                      x2="290"
                      y2="400"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FFFFFF" />
                      <stop offset="0.5" stopColor="#E9EEF0" />
                      <stop offset="1" stopColor="#CAD8E0" />
                    </linearGradient>

                    <linearGradient
                      id="vaseShadow"
                      x1="100"
                      y1="200"
                      x2="270"
                      y2="300"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#193C67" stopOpacity="0.04" />
                      <stop offset="1" stopColor="#193C67" stopOpacity="0.24" />
                    </linearGradient>
                  </defs>

                  {/* Vase body */}
                  <path
                    d="M145 44 L215 44 L219 108 C220 130 238 145 252 171 C272 208 280 263 270 318 C264 356 238 380 180 384 C122 380 96 356 90 318 C80 263 88 208 108 171 C122 145 140 130 141 108 Z"
                    fill="url(#porcelainBody)"
                    stroke="#A8B8C3"
                    strokeWidth="2"
                  />

                  <path
                    d="M145 44 L215 44 L219 108 C220 130 238 145 252 171 C272 208 280 263 270 318 C264 356 238 380 180 384 C122 380 96 356 90 318 C80 263 88 208 108 171 C122 145 140 130 141 108 Z"
                    fill="url(#vaseShadow)"
                  />

                  {/* Vase neck and rim */}
                  <path
                    d="M140 43 Q180 34 220 43 L217 55 Q180 62 143 55 Z"
                    fill="#D7E2E7"
                    stroke="#A8B8C3"
                    strokeWidth="2"
                  />

                  <path
                    d="M145 43 Q180 35 215 43"
                    stroke="#193C67"
                    strokeWidth="3"
                  />

                  {/* Traditional-inspired blue decoration */}
                  <g
                    stroke="#193C67"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M113 233 Q180 200 247 233" opacity="0.8" />
                    <path d="M107 265 Q180 231 253 265" opacity="0.7" />

                    <path d="M145 210 Q128 190 145 175 Q163 191 145 210Z" />
                    <path d="M180 202 Q164 180 180 164 Q196 180 180 202Z" />
                    <path d="M215 210 Q198 190 215 175 Q232 191 215 210Z" />

                    <path d="M180 214 C158 236 150 248 180 258 C210 248 202 236 180 214Z" />
                    <path d="M180 214 L180 260" />

                    <path d="M130 292 Q180 320 230 292" opacity="0.8" />
                    <path d="M143 321 Q180 341 217 321" opacity="0.7" />
                  </g>

                  {/* Fine ornamental details */}
                  <g fill="#B69A62">
                    <circle cx="180" cy="277" r="4" />
                    <circle cx="151" cy="275" r="2.5" />
                    <circle cx="209" cy="275" r="2.5" />
                  </g>

                  <path
                    d="M120 352 Q180 369 240 352"
                    stroke="#193C67"
                    strokeWidth="2"
                    opacity="0.45"
                  />
                </svg>
              </motion.div>

              {/* Illustration caption */}
              <div className="relative z-20 w-full rounded-xl border border-white/80 bg-white/95 p-4 shadow-lg sm:absolute sm:bottom-9 sm:left-8 sm:right-8 sm:w-auto">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-accent">
                  {t('home.visualLabel')}
                </p>

                <p className="mt-2 text-sm font-medium text-primary">
                  {t('home.visualCaption')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          2. FEATURED CHINESE CERAMIC HERITAGE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#F5F2E9] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

          {/* Section heading */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <span className="text-xs font-semibold tracking-[0.25em] text-accent">
              {t('featured.eyebrow')}
            </span>

            <h2 className="mt-5 text-3xl font-semibold leading-tight text-primary sm:text-4xl lg:text-5xl">
              {t('featured.title')}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              {t('featured.description')}
            </p>
          </motion.div>

          {/* Ceramic collection cards */}
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection, index) => (
              <motion.article
                key={collection.key}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group overflow-hidden rounded-2xl border border-[#D8D0C0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Decorative collection artwork */}
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden ${collection.theme}`}
                >
                  <div
                    aria-hidden="true"
                    className="absolute size-[72%] rounded-full border border-current/15"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute size-[55%] rounded-full border border-current/10"
                  />

                  <span
                    className={`relative z-10 font-serif text-[110px] font-light leading-none opacity-80 transition-transform duration-700 group-hover:scale-110 sm:text-[150px] lg:text-[160px] ${collection.symbolColor}`}
                    aria-hidden="true"
                  >
                    {collection.symbol}
                  </span>
                </div>

                {/* Collection information */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">
                        {t(`featured.items.${collection.key}.name`)}
                      </h3>

                      <p className="mt-1 font-serif text-sm text-accent">
                        {t(`featured.items.${collection.key}.chineseName`)}
                      </p>

                      <span className="mt-3 inline-flex rounded-full bg-[#F5F2E9] px-3 py-1 text-[10px] font-medium tracking-wide text-primary">
                        {t(`featured.items.${collection.key}.period`)}
                      </span>
                    </div>

                    <span
                      className={`mt-1 size-2.5 shrink-0 rounded-full ${collection.accent}`}
                    />
                  </div>

                  <p className="mt-5 min-h-[72px] text-sm leading-7 text-muted">
                    {t(`featured.items.${collection.key}.description`)}
                  </p>

                  <Link
                    to="/museum"
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                  >
                    {t('featured.discover')}

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Explore all collections */}
          <div className="mt-12 text-center">
            <Link
              to="/museum"
              className="group inline-flex items-center gap-3 rounded-lg border border-primary/20 px-7 py-4 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:!text-white"
            >
              {t('featured.viewAll')}

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. VISUAL TRANSITION
          Connects the heritage collection with the 3D museum.
      ====================================================== */}
      <div
        aria-hidden="true"
        className="relative h-20 bg-gradient-to-b from-[#F5F2E9] via-[#F0EBDD] to-[#EAE5D8] sm:h-24 lg:h-28"
      >
        <div className="absolute left-1/2 top-1/2 h-px w-20 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#B69A62]/50 to-transparent" />
      </div>

      {/* =====================================================
          4. VIRTUAL MUSEUM 3D EXPERIENCE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#EAE5D8] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Museum introduction */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-semibold tracking-[0.25em] text-accent">
                {t('museumPreview.eyebrow')}
              </span>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-primary sm:text-4xl lg:text-5xl">
                {t('museumPreview.title')}
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-muted sm:text-base">
                {t('museumPreview.description')}
              </p>

              {/* Cultural highlights */}
              <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
                {(['history', 'craftsmanship', 'artistry'] as const).map(
                  (item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-antique-gold/40 bg-white/70 text-accent">
                        <Sparkles size={17} />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-primary">
                          {t(`museumPreview.highlights.${item}.title`)}
                        </h3>

                        <p className="mt-1 text-xs leading-6 text-muted">
                          {t(`museumPreview.highlights.${item}.description`)}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Open the full virtual museum */}
              <Link
                to="/museum"
                className="group mt-10 inline-flex items-center gap-3 rounded-lg bg-[#193C67] px-7 py-4 text-sm font-medium !text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#244D7D]"
              >
                {t('museumPreview.explore')}

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Interactive 3D porcelain exhibition */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative min-w-0 overflow-hidden rounded-[28px] border border-antique-gold/30 bg-gradient-to-br from-[#DCE6E9] via-[#F5F2E9] to-[#D5DFDF] shadow-xl"
            >
              {/* 3D artifact preview label */}
              <div className="pointer-events-none absolute left-5 top-5 z-10 sm:left-7 sm:top-7">
                <span className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-primary backdrop-blur-md">
                  {t('museumPreview.artifactLabel')}
                </span>
              </div>

              {/* Lazy-loaded 3D scene with a loading fallback */}
              <Suspense
                fallback={
                  <div className="flex h-[360px] items-center justify-center sm:h-[460px] lg:h-[540px]">
                    <div className="text-center">
                      <div className="mx-auto size-8 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />

                      <p className="mt-4 text-xs text-muted">
                        {t('museumPreview.loading')}
                      </p>
                    </div>
                  </div>
                }
              >
              <PorcelainVase3D artifactName={t('museumPreview.artifactName')} />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>
      
{/* =====================================================
    5. AI DESIGN STUDIO PREVIEW
====================================================== */}
<section className="relative overflow-hidden bg-[#F5F2E9] py-20 sm:py-24 lg:py-28">
  <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">

    {/* Design Studio Introduction */}
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="text-xs font-semibold tracking-[0.25em] text-accent">
        {t('designPreview.eyebrow')}
      </span>

      <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight text-primary sm:text-4xl lg:text-5xl">
        {t('designPreview.title')}
      </h2>

      <p className="mt-6 max-w-xl text-sm leading-8 text-muted sm:text-base">
        {t('designPreview.description')}
      </p>

      <div className="mt-9 space-y-5">
        {([
          'featureOne',
          'featureTwo',
          'featureThree',
        ] as const).map((feature) => (
          <div key={feature} className="flex items-center gap-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-antique-gold/40 bg-white text-accent">
              <Sparkles size={17} />
            </div>

            <p className="text-sm font-medium text-primary">
              {t(`designPreview.${feature}`)}
            </p>
          </div>
        ))}
      </div>

      <Link
        to="/design-studio"
        className="group mt-10 inline-flex items-center justify-center gap-3 rounded-lg bg-[#193C67] px-7 py-4 text-sm font-medium !text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#244D7D]"
      >
        {t('designPreview.button')}
        <ArrowRight
          size={17}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </motion.div>

    {/* Cultural Design Inspiration Preview */}
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-w-0"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-antique-gold/30 bg-gradient-to-br from-[#DCE6E9] via-[#F7F3E9] to-[#E5E9DF] p-5 shadow-xl sm:p-8">

        {/* Preview Label */}
        <div className="relative z-10">
          <span className="inline-flex rounded-full border border-white/70 bg-white/75 px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-primary backdrop-blur-md">
            {t('designPreview.previewLabel')}
          </span>
        </div>

        {/* Decorative Chinese-inspired design */}
        <div className="relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center">

          <motion.div
            animate={
              prefersReducedMotion
                ? undefined
                : { rotate: 360 }
            }
            transition={{
              duration: 90,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute size-[88%] rounded-full border border-[#B69A62]/40"
          />

          <div className="absolute size-[72%] rounded-full border border-[#193C67]/20" />

          <div className="relative flex size-[58%] items-center justify-center rounded-full border border-[#B69A62]/40 bg-white/50 shadow-inner backdrop-blur-sm">
            <div className="absolute inset-3 rounded-full border border-[#193C67]/20" />

            <motion.span
              animate={
                prefersReducedMotion
                  ? undefined
                  : { scale: [1, 1.05, 1] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative font-serif text-[clamp(5rem,18vw,9rem)] font-light text-[#193C67]"
            >
              瓷
            </motion.span>
          </div>

          {/* Small decorative elements */}
          <span className="absolute left-[12%] top-[28%] size-3 rounded-full bg-[#B69A62]" />
          <span className="absolute right-[15%] top-[38%] size-2 rounded-full bg-[#193C67]" />
          <span className="absolute bottom-[20%] left-[25%] size-2 rounded-full bg-[#66877A]" />
        </div>

        {/* Preview Caption */}
        <div className="relative z-10 rounded-xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur-md sm:p-5">
          <h3 className="text-base font-semibold text-primary sm:text-lg">
            {t('designPreview.previewTitle')}
          </h3>

          <p className="mt-1 text-xs leading-6 text-muted sm:text-sm">
            {t('designPreview.previewCaption')}
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>


{/* =====================================================
    6. CHINESE CERAMIC HERITAGE TIMELINE
====================================================== */}
<section className="relative overflow-hidden bg-[#EAE5D8] py-20 sm:py-24 lg:py-28">

  <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

    {/* Section Heading */}
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >
      <span className="text-[10px] font-semibold tracking-[0.25em] text-accent sm:text-xs">
        {t('heritageJourney.eyebrow')}
      </span>

      <h2 className="mt-5 text-3xl font-semibold leading-tight text-primary sm:text-4xl lg:text-5xl">
        {t('heritageJourney.title')}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-muted sm:text-base">
        {t('heritageJourney.description')}
      </p>
    </motion.div>

    {/* Historical Timeline */}
    <div className="relative mt-16 lg:mt-24">

      {/* Desktop Timeline Line */}
      <div
        aria-hidden="true"
        className="absolute left-[12.5%] right-[12.5%] top-[7px] hidden h-px bg-antique-gold/50 md:block"
      />

      <div className="grid gap-10 md:grid-cols-4 md:gap-6">

        {([
          { key: 'tang', number: '01', symbol: '唐' },
          { key: 'song', number: '02', symbol: '宋' },
          { key: 'ming', number: '03', symbol: '明' },
          { key: 'qing', number: '04', symbol: '清' },
        ] as const).map((item, index) => (
          <motion.div
            key={item.key}
            initial={
              prefersReducedMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            className="relative min-w-0"
          >

            {/* Timeline Marker */}
            <div className="relative z-10 flex items-center gap-4 md:mb-9 md:justify-center">

              <div className="flex size-[15px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#EAE5D8] bg-[#193C67] ring-1 ring-antique-gold/60" />

              <span className="text-xs font-semibold tracking-[0.15em] text-accent md:hidden">
                {t(`heritageJourney.periods.${item.key}.period`)}
              </span>
            </div>

            {/* Timeline Card */}
            <div className="ml-7 min-w-0 border-l border-antique-gold/40 pl-5 md:ml-0 md:border-l-0 md:pl-0">

              <div className="relative overflow-hidden rounded-2xl border border-antique-gold/25 bg-white/75 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:min-h-[285px]">

                {/* Decorative Background Number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-1 -top-5 select-none font-serif text-8xl text-primary/[0.045]"
                >
                  {item.number}
                </span>

                {/* Dynasty Symbol */}
                <div className="relative flex size-14 items-center justify-center rounded-full border border-antique-gold/35 bg-[#F5F2E9]">
                  <span className="font-serif text-3xl text-primary">
                    {item.symbol}
                  </span>
                </div>

                {/* Period */}
                <p className="mt-6 hidden text-[10px] font-semibold tracking-[0.2em] text-accent md:block">
                  {t(`heritageJourney.periods.${item.key}.period`)}
                </p>

                {/* Dynasty Name */}
                <h3 className="mt-3 text-xl font-semibold text-primary">
                  {t(`heritageJourney.periods.${item.key}.name`)}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#B69A62]">
                  {t(`heritageJourney.periods.${item.key}.title`)}
                </p>

                <p className="mt-4 text-xs leading-7 text-muted sm:text-sm">
                  {t(`heritageJourney.periods.${item.key}.description`)}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </div>

    {/* Explore Heritage Button */}
    <div className="mt-14 flex justify-center">
      <Link
        to="/heritage"
        className="group inline-flex items-center justify-center gap-3 rounded-lg border border-primary/25 bg-white/60 px-7 py-4 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-white"
      >
        {t('heritageJourney.explore')}

        <ArrowRight
          size={17}
          className="transition-transform group-hover:translate-x-1"
        />
      </Link>
    </div>

  </div>
</section>


      {/* =====================================================
          7. FINAL CALL TO ACTION
      ====================================================== */}
      <section className="relative isolate overflow-hidden bg-[#193C67] py-20 sm:py-24 lg:py-28">

        {/* Decorative Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 size-96 rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-24 size-[450px] rounded-full border border-[#B69A62]/20"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#193C67] via-[#193C67] to-[#102B4B]"
        />

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8"
        >
          {/* Eyebrow */}
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#B69A62]/40 bg-white/5 px-5 py-2.5 backdrop-blur-sm">
            <Sparkles size={15} className="text-[#D7BC83]" />

            <span className="text-[10px] font-semibold tracking-[0.25em] text-[#D7BC83] sm:text-xs">
              {t('finalCta.eyebrow')}
            </span>
          </div>

          {/* Heading */}
          <h2 className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-tight text-[#F5F2E9] sm:text-4xl lg:text-6xl">
            {t('finalCta.title')}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/70 sm:text-base sm:leading-9">
            {t('finalCta.description')}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              to="/museum"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#F5F2E9] px-7 py-4 text-sm font-semibold text-[#193C67] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto"
            >
              {t('finalCta.museumButton')}

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/design-studio"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-lg border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D7BC83] hover:bg-white/10 sm:w-auto"
            >
              <Sparkles size={17} className="text-[#D7BC83]" />

              {t('finalCta.studioButton')}
            </Link>

          </div>

          {/* Decorative Bottom Ornament */}
          <div className="mx-auto mt-16 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B69A62]/70" />

            <span className="font-serif text-2xl text-[#B69A62]">
              瓷
            </span>

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B69A62]/70" />
          </div>

        </motion.div>
      </section>

      
    </>
  )
}

export default HomePage
