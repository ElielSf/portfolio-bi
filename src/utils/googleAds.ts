export const COOKIE_CONSENT_KEY = 'cookie-consent-v1'

const GOOGLE_ADS_ID = 'AW-18464424633'
const WHATSAPP_CONVERSION_ID =
  'AW-18464424633/cPSPCOniroAdELmFw-RE'

type GoogleWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

function getGoogleWindow() {
  return window as GoogleWindow
}

export function loadGoogleAds() {
  const googleWindow = getGoogleWindow()

  if (googleWindow.gtag) {
    return
  }

  googleWindow.dataLayer = googleWindow.dataLayer ?? []

  googleWindow.gtag = function (..._args: unknown[]) {
    googleWindow.dataLayer?.push(arguments)
  }

  googleWindow.gtag('js', new Date())
  googleWindow.gtag('config', GOOGLE_ADS_ID)

  const script = document.createElement('script')

  script.async = true
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`

  document.head.appendChild(script)
}

export function reportWhatsAppConversion(url: string) {
  const googleWindow = getGoogleWindow()

  // Se o usuário recusou cookies, o Google não foi carregado.
  // O WhatsApp continua funcionando normalmente.
  if (!googleWindow.gtag) {
    window.location.href = url
    return
  }

  let redirected = false

  const redirectToWhatsApp = () => {
    if (redirected) {
      return
    }

    redirected = true
    window.location.href = url
  }

  googleWindow.gtag('event', 'conversion', {
    send_to: WHATSAPP_CONVERSION_ID,
    event_callback: redirectToWhatsApp,
  })

  // Fallback caso o callback do Google não execute.
  setTimeout(redirectToWhatsApp, 1000)
}

export function resetCookieConsent() {
  localStorage.removeItem(COOKIE_CONSENT_KEY)
  window.location.reload()
}