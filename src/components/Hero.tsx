function Hero() {
  return (
    <section className="bg-white text-brand-text">
      <div
        className="
          mx-auto
          grid
          max-w-6xl
          grid-cols-1
          items-center
          gap-10
          px-6
          py-16
          md:min-h-[680px]
          md:grid-cols-2
          md:gap-12
          md:px-10
          md:py-32
        "
      >
        <div className="md:border-r md:border-brand-border md:pr-12">
          <h1
            className="
              text-4xl
              font-extrabold
              leading-[1.08]
              tracking-[-0.035em]
              sm:text-5xl
              md:text-6xl
              md:leading-[1.05]
            "
          >
            Transformo planilhas e dados de vendas em dashboards claros para
            sua empresa.
          </h1>
        </div>

        <div className="md:pl-6">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-brand-teal
            "
          >
            Soluções em dados
          </p>

          <h2
            className="
              mt-4
              text-2xl
              font-bold
              tracking-tight
              sm:text-3xl
              md:text-4xl
            "
          >
            Dados claros para decisões melhores
          </h2>

          <p
            className="
              mt-5
              max-w-lg
              text-base
              leading-7
              text-brand-muted
              sm:text-lg
              sm:leading-8
              md:mt-6
            "
          >
            Organizo dados de Excel e Google Sheets e desenvolvo dashboards em
            Power BI para acompanhar vendas, resultados financeiros e
            indicadores importantes do negócio.
          </p>

          <a
            href="#servicos"
            className="
              btn
              btn-lg
              mt-8
              w-full
              border-0
              bg-brand-ink
              text-white
              shadow-sm
              transition
              duration-200
              hover:bg-brand-navy
              hover:shadow-md
              sm:w-auto
              md:mt-10
              md:hover:-translate-y-0.5
            "
          >
            Ver como posso ajudar
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero