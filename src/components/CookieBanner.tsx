import { useEffect, useState } from 'react'

import {
  COOKIE_CONSENT_KEY,
  loadGoogleAds,
} from '../utils/googleAds'

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)

    if (consent === 'accepted') {
      loadGoogleAds()
      return
    }

    if (consent === 'rejected') {
      return
    }

    setVisible(true)
  }, [])

  function acceptCookies() {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')

    loadGoogleAds()
    setVisible(false)
  }

  function rejectCookies() {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div
      className="
        fixed
        bottom-4
        left-4
        right-4
        z-50
        mx-auto
        max-w-4xl
        rounded-xl
        bg-brand-ink
        p-5
        text-white
        shadow-2xl
        md:p-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-5
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div className="max-w-2xl">
          <h2 className="font-bold">
            Privacidade e cookies
          </h2>

          <p className="mt-2 text-sm leading-6 text-white/70">
            Este site utiliza cookies de medição do Google Ads
            somente com sua autorização, para entender o desempenho
            dos anúncios. Você pode aceitar ou rejeitar sem afetar o
            funcionamento do site.
          </p>

          <a
            href="/#privacidade"
            className="
              mt-2
              inline-block
              text-sm
              text-brand-cyan
              underline
            "
          >
            Política de Privacidade
          </a>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={rejectCookies}
            className="
              rounded-lg
              border
              border-white/30
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:bg-white/10
            "
          >
            Rejeitar
          </button>

          <button
            type="button"
            onClick={acceptCookies}
            className="
              rounded-lg
              bg-brand-cyan
              px-5
              py-3
              font-semibold
              text-brand-ink
              transition
              hover:bg-white
            "
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner