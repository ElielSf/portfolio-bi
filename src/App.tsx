import { useEffect, useState } from 'react'

import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

import CookieBanner from './components/CookieBanner'
import PrivacyPolicy from './components/PrivacyPolicy'

function App() {
  const [hash, setHash] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  if (hash === '#privacidade') {
    return (
      <>
        <PrivacyPolicy />
        <CookieBanner />
      </>
    )
  }

  return (
    <main>
      <Hero />
      <Portfolio />
      <Services />
      <Process />
      <Contact />
      <Footer />

      <CookieBanner />
    </main>
  )
}

export default App