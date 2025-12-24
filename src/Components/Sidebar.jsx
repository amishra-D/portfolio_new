import React, { useState } from "react"

function Sidebar() {
  const [active, setActive] = useState(null)

  const linkClass = (name) =>
    `
      cursor-pointer
      transition-opacity duration-200
      ${active === name ? "opacity-100" : "opacity-40"}
      text-neutral-950 dark:text-white
      hover:opacity-100
    `

  return (
    <div
      className="
        fixed top-1/2 right-4 -translate-y-1/2
        flex flex-col gap-3 invisible sm:visible sm:text-md z-40
        select-none
      "
    >
        <a
        className={linkClass("about")}
        onClick={() => setActive("about")}
        href="#about"
      >
        About
      </a>
      <a
        className={linkClass("certifications")}
        onClick={() => setActive("certifications")}
        href="#certifications"
      >
        Certifications
      </a>

      <a
        className={linkClass("projects")}
        onClick={() => setActive("projects")}
        href="#projects"
      >
        Projects
      </a>

      <a
        className={linkClass("contact")}
        onClick={() => setActive("contact")}
        href="#connect"
      >
        Let's Connect
      </a>
    </div>
  )
}

export default Sidebar
