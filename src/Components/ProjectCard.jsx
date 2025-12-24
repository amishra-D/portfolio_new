import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

function ProjectCard({ title, description, image, link, stack, githubLink }) {
  return (
    <div className="
      flex flex-col bg-surface rounded-xl overflow-hidden
      border border-white/[0.08]
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl
      h-full
    ">
      <div className="h-44 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-5 flex-1">
        <h3 className="text-lg font-semibold text-primary mb-2">
          {title}
        </h3>

        <p className="text-sm text-secondary leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {stack?.slice(0, 4).map((Icon, idx) => (
            <div
              key={idx}
              className="
                p-2 rounded-md
                bg-white/[0.05]
                border border-white/[0.08]
                text-secondary
              "
            >
              <Icon className="text-sm" />
            </div>
          ))}
          {stack && stack.length > 4 && (
            <span className="text-xs text-secondary">
              +{stack.length - 4}
            </span>
          )}
        </div>
      </div>
      <div className="
        flex items-center justify-between
        px-5 py-4
        border-t border-white/[0.08]
      ">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              text-sm font-medium text-primary
              hover:underline
            "
          >
            Live Demo <FaExternalLinkAlt className="text-xs" />
          </a>
        )}

        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2
              text-sm text-secondary
              hover:text-primary
            "
          >
            <FaGithub className="text-lg" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
