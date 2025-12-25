import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

function ProjectCard({ title, description, image, link, stack }) {
  return (
    <div className="
      border border-white/10 dark:border-neutral-900/10 rounded-lg
      bg-secondary
      overflow-hidden hover:scale-105 transition-transform ease-in-out duration-200
    ">
      <img
        src={image}
        alt={title}
        className="h-44 w-full object-cover"
      />

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold text-primary">
          {title}
        </h3>

        <p className="text-sm text-secondary">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 text-secondary">
          {stack.map((Icon, i) => (
            <Icon key={i} className="text-sm" />
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              text-sm text-primary
              hover:underline
            "
          >
            Live Demo <FaExternalLinkAlt className="text-xs" />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
