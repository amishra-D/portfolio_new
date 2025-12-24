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
  { name: "JavaScript", icon: SiJavascript, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: SiTypescript, link: "https://www.typescriptlang.org/docs/" },
  { name: "Python", icon: SiPython, link: "https://docs.python.org/3/" },
  { name: "C++", icon: SiCplusplus, link: "https://en.cppreference.com/w/" },
]

const frontend = [
  { name: "React", icon: SiReact, link: "https://react.dev/" },
  { name: "Redux", icon: SiRedux, link: "https://redux.js.org/" },
  { name: "Tailwind CSS", icon: SiTailwindcss, link: "https://tailwindcss.com/docs" },
  { name: "HTML5", icon: SiHtml5, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: SiCss3, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
]

const backend = [
  { name: "Node.js", icon: SiNodedotjs, link: "https://nodejs.org/en/docs" },
  { name: "Express", icon: SiExpress, link: "https://expressjs.com/" },
]

const databases = [
  { name: "MongoDB", icon: SiMongodb, link: "https://www.mongodb.com/docs/" },
  { name: "Firebase", icon: SiFirebase, link: "https://firebase.google.com/docs" },
  { name: "MySQL", icon: SiMysql, link: "https://dev.mysql.com/doc/" },
  { name: "Redis", icon: SiRedis, link: "https://redis.io/docs/" },
]

const realtime = [
  { name: "WebRTC", icon: SiWebrtc, link: "https://webrtc.org/" },
  { name: "Socket.IO", icon: SiSocketdotio, link: "https://socket.io/docs/v4/" },
]

const dataML = [
  { name: "NumPy", icon: SiNumpy, link: "https://numpy.org/doc/" },
  { name: "Pandas", icon: SiPandas, link: "https://pandas.pydata.org/docs/" },
  { name: "Scikit-learn", icon: SiScikitlearn, link: "https://scikit-learn.org/stable/documentation.html" },
]

const tools = [
  { name: "Git", icon: SiGit, link: "https://git-scm.com/doc" },
  { name: "GitHub", icon: SiGithub, link: "https://docs.github.com/" },
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
