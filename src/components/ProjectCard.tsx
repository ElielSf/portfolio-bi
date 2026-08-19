type ProjectCardProps = {
  title: string
  description: string
  image: string
}

function ProjectCard({
  title,
  description,
  image,
}: ProjectCardProps) {
  return (
    <article>
      <img
        src={image}
        alt={title}
        className="
          w-full
          rounded-xl
          border
          border-brand-border
          shadow-[0_12px_35px_rgba(13,21,46,0.08)]
        "
      />

      <div className="mt-5 md:mt-6">
        <h3 className="text-xl font-bold tracking-tight md:text-2xl">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-brand-muted">
          {description}
        </p>
      </div>
    </article>
  )
}

export default ProjectCard