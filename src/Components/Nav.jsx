import React, { useEffect, useState } from "react"
import { HiMoon, HiSun, HiHome } from "react-icons/hi"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { IoMdMenu } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
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
        h-14 px-6 rounded-full
        bg-card/85 text-primary border border-default
        shadow-lg hover:shadow-xl
        hover:gap-7 transition-all duration-300 ease-in-out
        backdrop-blur-md
      "
    >
      <button 
        onClick={() => navigate("/")} 
        title="Home" 
        className="text-secondary hover:text-primary hover:scale-125 transition-all duration-200 cursor-pointer"
      >
        <HiHome className="text-xl" />
      </button>

      <a 
        href="https://github.com/amishra-d" 
        target="_blank" 
        rel="noreferrer" 
        className="text-secondary hover:text-neutral-900 dark:hover:text-white hover:scale-125 transition-all duration-200"
      >
        <FaGithub className="text-xl" />
      </a>
      <a 
        href="https://www.linkedin.com/in/anshu-mishra-a5b645291/" 
        target="_blank" 
        rel="noreferrer" 
        className="text-secondary hover:text-[#0A66C2] hover:scale-125 transition-all duration-200"
      >
        <FaLinkedin className="text-xl" />
      </a>
      <a 
        href="https://x.com/Anshu_mishraD" 
        target="_blank" 
        rel="noreferrer" 
        className="text-secondary hover:text-neutral-900 dark:hover:text-white hover:scale-125 transition-all duration-200"
      >
        <FaXTwitter className="text-xl" />
      </a>
      <button 
        onClick={toggleTheme} 
        title="Toggle theme" 
        className="text-secondary hover:text-primary hover:scale-125 transition-all duration-200 cursor-pointer"
      >
        {isDark ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
      </button>
    </div>
  )
}
export default Nav
