import React, { useEffect, useState } from "react"
import { HiMoon, HiSun, HiHome } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Nav = () => {
  const navigate = useNavigate()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const root = document.documentElement

    if (savedTheme === "dark") {
      root.classList.add("dark")
      setIsDark(true)
    } else {
      root.classList.remove("dark")
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement

    if (root.classList.contains("dark")) {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  return (
    <div
      className="
        group flex items-center justify-center gap-6
        h-16 px-5 rounded-full
        bg-surface text-primary border-default border-[0.5px]
        hover:gap-8 transition-all duration-500 ease-in-out
        opacity-70 backdrop-blur-4xl
      "
    >
      <button onClick={() => navigate("/")} title="Home" className="hover:scale-135 transition-all ease-in-out duration-200">
        <HiHome className="nav-icon" />
      </button>

      <a href="https://github.com/amishra-d" target="_blank" rel="noreferrer" className="hover:scale-135 transition-all ease-in-out duration-200">
        <FaGithub className="nav-icon" />
      </a>

      <a href="https://www.linkedin.com/in/anshu-mishra-a5b645291/" target="_blank" rel="noreferrer" className="hover:scale-135 transition-all ease-in-out duration-200">
        <FaLinkedin className="nav-icon" />
      </a>

      <a href="https://x.com/Anshu_mishraD" target="_blank" rel="noreferrer" className="hover:scale-135 transition-all ease-in-out duration-200">
        <FaTwitter className="nav-icon" />
      </a>

      <button onClick={toggleTheme} title="Toggle theme" className="hover:scale-135 transition-all ease-in-out duration-200">
        {isDark ? <HiSun className="nav-icon" /> : <HiMoon className="nav-icon" />}
      </button>
    </div>
  )
}

export default Nav
