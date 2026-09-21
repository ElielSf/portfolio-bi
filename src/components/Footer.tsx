import { resetCookieConsent } from '../utils/googleAds'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="
        border-t
        border-white/10
        bg-brand-ink
        text-white
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
          px-6
          py-6
          md:px-10
          md:py-8
        "
      >
        <div
          className="
            flex
            flex-col
            gap-2
            text-sm
            text-white/50
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>© {currentYear} Eliel Souza</p>

          <p>
            Dashboards e soluções de dados para negócios.
          </p>
        </div>

        <div
          className="
            mt-4
            flex
            flex-wrap
            gap-x-5
            gap-y-2
            text-xs
            text-white/40
          "
        >
          <a
            href="/#privacidade"
            className="transition hover:text-white"
          >
            Privacidade
          </a>

          <button
            type="button"
            onClick={resetCookieConsent}
            className="transition hover:text-white"
          >
            Configurar cookies
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer