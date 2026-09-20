import dashboardGeral from '../assets/dashboard-geral.png'
import evolucaoTemporal from '../assets/evolucao-temporal.png'
import analiseComercial from '../assets/analise-comercial.png'

import ProjectCard from './ProjectCard'

function Portfolio() {
  return (
    <section id="portfolio" className="bg-brand-surface text-brand-text">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
          <div>
            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-brand-teal
              "
            >
              Projeto em destaque
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
            Dashboard de Vendas
            </h2>

            <p className="mt-2 text-lg font-medium text-brand-muted md:mt-3 md:text-xl">
              E-commerce Olist
            </p>

            <p
              className="
                mt-6
                max-w-lg
                text-base
                leading-7
                text-brand-muted
                sm:text-lg
                sm:leading-8
                md:mt-8
              "
            >
              Análise de dados de comércio eletrônico com foco em receita,
              evolução das vendas, categorias, vendedores e formas de
              pagamento.
            </p>
          </div>

          <div>
            <img
              src={dashboardGeral}
              alt="Dashboard executivo de vendas Olist"
              className="
                w-full
                rounded-2xl
                border
                border-brand-border
                shadow-[0_12px_35px_rgba(13,21,46,0.10)]
              "
            />
          </div>
        </div>

        <div className="mt-14 grid gap-12 md:mt-20 md:grid-cols-2">
          <ProjectCard
            title="Evolução Temporal"
            description="Tendências de receita, pedidos e ticket médio ao longo do tempo."
            image={evolucaoTemporal}
          />

          <ProjectCard
            title="Análise Comercial e Pagamentos"
            description="Categorias, vendedores e formas de pagamento que impulsionam os resultados."
            image={analiseComercial}
          />
        </div>

      </div>
    </section>
  )
}

export default Portfolio