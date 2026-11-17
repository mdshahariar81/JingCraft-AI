
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Sparkles, ArrowUpRight } from 'lucide-react'

function Footer() {
  const { t } = useTranslation()

  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { key: 'home', path: '/' },
    { key: 'museum', path: '/museum' },
    { key: 'designStudio', path: '/design-studio' },
    { key: 'heritage', path: '/heritage' },
    { key: 'about', path: '/about' },
  ] as const

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white">
                <Sparkles size={21} />
              </div>

              <span className="text-xl font-semibold text-ink">
                {t('brand.name')}
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-muted">
              {t('brand.tagline')}
            </p>

            <p className="max-w-sm text-sm leading-7 text-muted">
              Exploring Chinese ceramic heritage through digital
              experiences and AI-assisted creativity.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-ink">
              Explore
            </h3>

            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.key}>
                  <Link
                    to={item.path}
                    className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
                  >
                    {t(`navigation.${item.key}`)}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-ink">
              Our Vision
            </h3>

            <p className="max-w-sm text-sm leading-7 text-muted">
              Connecting traditional Chinese craftsmanship with
              modern digital technology to make cultural heritage
              more accessible to the world.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {currentYear} {t('brand.name')}. All rights reserved.
          </p>

          <p className="text-xs text-muted">
            Made with care for Chinese cultural heritage.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
