const SkillRow = ({ title, items }) => (
  <div>
    <h3 className="text-sm font-semibold text-secondary mb-3">
      {title}
    </h3>

    <div className="flex flex-wrap gap-4">
      {items.map(({ name, icon: Icon, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} documentation`}
          className="
            group
            flex flex-col items-center gap-1
            transition-all duration-200
            hover:scale-110
          "
        >
          <Icon
            className="
              text-2xl
              text-primary
              group-hover:text-neutral-700
              dark:group-hover:text-neutral-300
              transition
            "
          />
          <span className="text-[10px] text-neutral-400">
            {name}
          </span>
        </a>
      ))}
    </div>
  </div>
)

export default SkillRow
