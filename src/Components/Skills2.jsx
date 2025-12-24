import React from "react"
import SkillRow from "./SkillRow"

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,

  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,

  SiMongodb,
  SiFirebase,
  SiMysql,
  SiRedis,

  SiWebrtc,
  SiSocketdotio,

  SiNumpy,
  SiPandas,
  SiScikitlearn,

  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
} from "react-icons/si"

const languages = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: SiPython },
  { name: "C++", icon: SiCplusplus },
]

const frontend = [
  { name: "React", icon: SiReact },
  { name: "Redux", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
]

const backend = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
]

const databases = [
  { name: "MongoDB", icon: SiMongodb },
  { name: "Firebase", icon: SiFirebase },
  { name: "MySQL", icon: SiMysql },
  { name: "Redis", icon: SiRedis },
]

const realtime = [
  { name: "WebRTC", icon: SiWebrtc },
  { name: "Socket.IO", icon: SiSocketdotio },
]

const dataML = [
  { name: "NumPy", icon: SiNumpy },
  { name: "Pandas", icon: SiPandas },
  { name: "Scikit-learn", icon: SiScikitlearn },
]

const tools = [
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
]

function Skills2() {
  return (
    <div className="w-5/6 flex flex-col gap-8">
      <SkillRow title="Languages" items={languages} />
      <SkillRow title="Frontend" items={frontend} />
      <SkillRow title="Backend" items={backend} />
      <SkillRow title="Databases & Cache" items={databases} />
      <SkillRow title="Realtime & Networking" items={realtime} />
      <SkillRow title="Data & Machine Learning" items={dataML} />
      <SkillRow title="Tools" items={tools} />
    </div>
  )
}

export default Skills2
