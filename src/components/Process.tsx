type ProcessStep = {
  number: string
  title: string
  description: string
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Entendimento',
    description:
      'Você me mostra como acompanha seus dados atualmente e quais informações precisa enxergar melhor.',
  },
  {
    number: '02',
    title: 'Desenvolvimento',
    description:
      'Organizo os dados e construo o dashboard de acordo com as necessidades definidas.',
  },
  {
    number: '03',
    title: 'Entrega',
    description:
      'Apresento o painel, fazemos os ajustes combinados e entrego a solução pronta para uso.',
  },
]

function Process() {
  return (
    <section className="bg-brand-surface text-brand-text">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-28">
        <div className="mb-10 text-center md:mb-16">
          <p
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-brand-teal
            "
          >
            Processo
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              tracking-tight
              sm:text-4xl
              md:text-5xl
            "
          >
            Como funciona
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="text-center"
            >
              <span
                className="
                  text-5xl
                  font-extrabold
                  tracking-tight
                  text-brand-navy/8
                  sm:text-6xl
                  md:text-7xl
                "
              >
                {step.number}
              </span>

              <h3
                className="
                  mt-3
                  text-xl
                  font-bold
                  tracking-tight
                  md:mt-4
                  md:text-2xl
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mx-auto
                  mt-3
                  max-w-sm
                  leading-7
                  text-brand-muted
                  md:mt-4
                "
              >
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process