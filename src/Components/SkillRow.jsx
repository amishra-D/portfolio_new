const SkillRow = ({ title, items }) => (
  <div>
    <h3 className="text-sm font-semibold text-secondary mb-3">
      {title}
    </h3>

    <div className="flex flex-wrap gap-4">
      {items.map(({ name, icon: Icon }) => (
        <div
          key={name}
          className="group flex flex-col items-center gap-1"
        >
          <Icon className="text-2xl text-primary group-hover:text-neutral-300 transition" />
          <span className="text-[10px] text-neutral-400">
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
)
export default SkillRow