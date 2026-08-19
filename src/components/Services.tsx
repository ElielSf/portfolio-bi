type Service = {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: 'Dashboards de Vendas',
    description:
      'Transformo seus dados em dashboards claros para acompanhar vendas, receita, clientes e principais indicadores do negócio.',
  },
  {
    title: 'Organização de Dados',
    description:
      'Organizo, limpo e padronizo planilhas para tornar suas informações mais confiáveis e fáceis de analisar.',
  },
  {
    title: 'Relatórios Financeiros',
    description:
      'Crio análises de faturamento, ticket médio, custos, pagamentos e evolução dos resultados.',
  },
]

function Services() {
  return (
    <section
      id="servicos"
      className="bg-white text-brand-text"
    >
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
            Serviços
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
            O que posso fazer pela sua empresa
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="
                border-t
                border-brand-border
                pt-7
                md:border-l
                md:border-t-0
                md:pl-8
                md:pt-0
                first:md:border-l-0
                first:md:pl-0
              "
            >
              <span
                className="
                  text-sm
                  font-semibold
                  tracking-[0.14em]
                  text-brand-teal
                "
              >
                0{index + 1}
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
                {service.title}
              </h3>

              <p className="mt-3 leading-7 text-brand-muted md:mt-4">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services