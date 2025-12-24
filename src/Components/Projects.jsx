import React from "react"
import ProjectCard from "./ProjectCard"
import Logo from "../assets/Logo.jpg"
import Threadly from "../assets/Threadly.png"
import Zynk from "../assets/Zynk.png"
import ddf from "../assets/DailyDrift.png"
import diab from "../assets/diab.png"
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
const projects = [
  {
    title: "Threadly",
    description:
      "An anonymous discussion platform inspired by Reddit, allowing users to create posts, share media, and interact through upvotes and comments while preserving user anonymity.",
    image: Threadly,
    link:"https://threadly-3859.vercel.app/",
    stack:[ SiReact,SiTailwindcss,SiRedux,SiNodedotjs,SiExpress,SiMongodb,]
  },
  {
    title: "Zynk",
    description:
      "A real-time video calling application built using WebRTC, featuring one-to-one video calls, in-call chat, and media controls for microphone and camera.",
    image: Zynk,
    link:"https://zynk-fvm9.vercel.app/",
    stack:[SiJavascript,SiWebrtc,SiSocketdotio,SiRedis,SiNodedotjs,SiExpress]
  },
  {
    title: "Diabetes Prediction",
    description:
      "A machine learning project that predicts the likelihood of diabetes using medical data, applying preprocessing, feature analysis, and multiple classification models for evaluation.",
    image: diab,
    stack:[SiNumpy,
  SiPandas,
  SiScikitlearn,SiPython]
  },
  {
    title: "DailyDrift",
    description:
      "A habit tracking application designed to help users build consistent routines, featuring daily tracking, progress visualization, and an analytics-driven dashboard.",
    image: ddf,
    link:"https://zynk-fvm9.vercel.app/",
    stack:[SiFirebase,SiReact,SiTailwindcss]
  },
]

function Projects() {
  return (
    <div className="grid grid-cols-2 gap-2 font-sans">
      {projects.map((project) => (
  <ProjectCard key={project.title} {...project} />
))}

    </div>
  )
}

export default Projects
