import { useTranslation } from 'react-i18next'

function HomePage() {
  const { t } = useTranslation()

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#B69A62]">
        JingCraft AI
      </p>

      <h1 className="mb-6 text-4xl font-semibold text-[#193C67] md:text-6xl">
        {t('brand.tagline')}
      </h1>

      <p className="mx-auto max-w-2xl text-base leading-8 text-[#747B84]">
        Discover the beauty of Chinese ceramic heritage through artificial
        intelligence, digital storytelling, and immersive 3D experiences.
      </p>
    </section>
  )
}

export default HomePage
