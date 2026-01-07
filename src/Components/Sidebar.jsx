import React from "react"
import { useActiveSection } from "../hooks/useObserver"

function Sidebar() {
  const sections = [
    { id: "about", label: "About" },
    { id: "Skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "contactus", label: "Let's Connect" },
  ]

  const active = useActiveSection(sections.map(s => s.id))

  const linkClass = (id) =>
    `
      cursor-pointer
      transition-opacity duration-200
      ${active === id ? "opacity-100" : "opacity-40"}
      text-neutral-950 dark:text-white
      hover:opacity-100
    `

  return (
    <div
      className=" border-r-4 border-default px-3 rounded-r-sm
        fixed top-1/2 right-4 -translate-y-1/2
        flex flex-col gap-1
        invisible sm:visible sm:text-md z-40
        select-none
      "
    >
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={linkClass(s.id)}
        >
          {s.label}
        </a>
      ))}
    </div>
  )
}

export default Sidebar
