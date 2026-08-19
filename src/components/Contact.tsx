function Contact() {
  const whatsappNumber = '5575933008953'

  const message =
    'Olá! Vi seu portfólio e gostaria de conversar sobre uma solução de dashboard para minha empresa.'

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <section
      id="contato"
      className="bg-brand-ink text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-brand-cyan
            "
          >
            Contato
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              sm:text-4xl
              md:text-6xl
            "
          >
            Quer enxergar melhor os números da sua empresa?
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-white/70
              sm:text-lg
              sm:leading-8
              md:mt-8
            "
          >
            Podemos conversar sobre como você acompanha seus dados hoje e quais
            informações podem ser transformadas em indicadores e dashboards
            mais claros para o seu negócio.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="
              btn
              btn-lg
              mt-8
              w-full
              border-0
              bg-brand-cyan
              text-brand-ink
              shadow-sm
              transition
              duration-200
              hover:bg-white
              hover:shadow-md
              sm:w-auto
              md:mt-10
              md:hover:-translate-y-0.5
            "
          >
            Conversar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact