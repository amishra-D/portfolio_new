import React, { useEffect, useState } from 'react'
import { HiMoon, HiSun, HiHome } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Nav = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    setIsDark(root.classList.contains("dark"))
  }, [])

 const toggleTheme = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      setIsDark(false);
    } else {
      htmlElement.classList.add('dark');
      setIsDark(true);
    }
  };
  return (
    <div
      className="
        group flex items-center justify-center gap-6
        h-16 px-5 rounded-full
        bg-surface text-primary border-default border-[0.5px] hover:gap-8 transition-all duration-500 ease-in-out"
    >

      <button className="transition-all duration-200 ease-in-out hover:scale-150"
      title="Home">
        <HiHome className="nav-icon" />
      </button>

      <a className="transition-all duration-200 ease-in-out hover:scale-150" href="https://github.com/amishra-d" target="_blank" rel="noreferrer">
        <FaGithub className="nav-icon" />
      </a>

      <a className="transition-all duration-200 ease-in-out hover:scale-150" href="https://www.linkedin.com/in/anshu-mishra-a5b645291/" target="_blank" rel="noreferrer">
        <FaLinkedin className="nav-icon" />
      </a>

      <a className="transition-all duration-200 ease-in-out hover:scale-150" href="https://x.com/Anshu_mishraD" target="_blank" rel="noreferrer">
        <FaTwitter className="nav-icon" />
      </a>

      <button className="transition-all duration-200 ease-in-out hover:scale-150" title="Toggle theme" onClick={toggleTheme}>
        {isDark ? <HiSun className="nav-icon" /> : <HiMoon className="nav-icon" />}
      </button>

    </div>
  )
}

export default Nav
