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
          flex
          max-w-6xl
          flex-col
          gap-2
          px-6
          py-6
          text-sm
          text-white/50
          md:flex-row
          md:items-center
          md:justify-between
          md:gap-3
          md:px-10
          md:py-8
        "
      >
        <p>© {currentYear} Eliel Souza</p>

        <p>
          Dashboards e soluções de dados para negócios.
        </p>
      </div>
    </footer>
  )
}

export default Footer