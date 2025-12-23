import React, { useEffect, useState } from "react"
import Card from "./Card"
import Skills2 from "./Skills2"
import Projects from "./Projects"
import technoLogo from "../assets/techno-logo.png"
import cert1 from "../assets/cert1.png"
import hackerrank from "../assets/hackerrank.png"
import pfp from "../assets/pfp.jpeg"
import Footer from "./Footer"
import Seaparator from "./Seaparator.jsx"
import Personal from "./Personal.jsx"
const Sidecard = () => {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const root = document.documentElement
    setIsDark(root.classList.contains("dark"))

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"))
    })

    observer.observe(root, { attributes: true })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full lg:w-1/2 flex flex-col mt-20 text-primary">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 px-6 sm:px-10 lg:px-16">
        <div className="max-w-xl">
          <h1 className="font-bold text-4xl sm:text-6xl">Hi I'm Anshu</h1>
          <p className="font-semibold text-lg sm:text-xl">
            Developer | Engineer
          </p>

          <div className="mt-4">
            <p className="font-semibold text-sm">Location</p>
            <p className="text-xs text-secondary">
              Serampore, West Bengal
            </p>
          </div>

          <div className="mt-2">
            <p className="font-semibold text-sm">Email</p>
            <p className="text-xs text-secondary break-all">
              anshumishraocog@gmail.com
            </p>
          </div>
        </div>

        <img
          src={pfp}
          alt="Profile"
          className="
            rounded-full
            w-24 h-24 sm:w-28 sm:h-28
            object-cover
            transition-transform duration-300 ease-in-out
            hover:scale-110
          "
        />
      </div>

      <Section>
        <h2 className="font-bold text-xl">About</h2>
        <p className="text-secondary text-sm sm:text-md">
          Developer building modern web applications and real-time systems, with
          a strong interest in machine learning and data-driven problem solving.
          Actively exploring{" "}
          <span className="text-primary font-medium underline underline-offset-1">WebRTC</span>, backend
          optimization, and practical{" "}
          <span className="text-primary font-medium underline underline-offset-1">Machine Learning</span>{" "}
          models while continuously learning and building.Check out my <span className="text-primary font-medium underline underline-offset-1">Resume</span>
        </p>
      </Section>

      <Section>
        <h2 className="font-bold text-xl">Consistency</h2>
        <p className="text-secondary text-sm mb-4">
          Daily problem solving on LeetCode
        </p>

        <img
          src={`https://leetcard.jacoblin.cool/AnshuM18?theme=${
            isDark ? "dark" : "light"
          }&ext=heatmap`}
          alt="LeetCode Heatmap"
          className="w-full rounded-md"
        />
      </Section>

      <Section>
        <h2 className="font-bold text-xl mb-2">Education</h2>
        <Card
          image={technoLogo}
          title="Techno India University"
          subtitle="B.Tech (CSE - AIML)"
          time="2022 - 2026"
        />
      </Section>

      <Section>
        <h2 className="font-bold text-xl mb-2">Skills</h2>
        <Skills2 />
      </Section>

      <Section>
        <h2 className="font-bold text-xl mb-2">Certifications</h2>
        <Card
          image={cert1}
          title="Machine Learning Specialization"
          subtitle="Stanford University — Andrew Ng"
          time="2025"
        />
        <Card
          image={hackerrank}
          title="SQL (Intermediate)"
          subtitle="HackerRank"
          time="2025"
        />
      </Section>

      <Section>
        <h2 className="font-bold text-xl mb-2">Projects</h2>
        <Projects />
      </Section>
      <Seaparator/>
      <Section>
       <h2 className="text-primary font-bold text-lg sm:text-xl">Personal Life</h2>
       <Personal></Personal>
      </Section>
    </div>
  )
}

const Section = ({ children }) => (
  <div className="flex flex-col gap-4 mt-10 px-6 sm:px-10 lg:px-16 max-w-xl">
    {children}
  </div>
)

export default Sidecard
