import ProjectCard from "./ProjectCard"
import Threadly from "../assets/Threadly.png"
import Zynk from "../assets/Zynk.png"
import ddf from "../assets/DailyDrift.png"
import diab from "../assets/diab.png"

import {
  SiJavascript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiWebrtc,
  SiSocketdotio,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si"

const projects = [
  {
    title: "Threadly",
    description:
      "Anonymous discussion platform with posts, media sharing, upvotes, and comments.",
    image: Threadly,
    link: "https://threadly-3859.vercel.app/",
    stack: [SiReact, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiMongodb],
  },
  {
    title: "Zynk",
    description:
      "One-to-one real-time video calling app with chat and media controls.",
    image: Zynk,
    link: "https://zynk-fvm9.vercel.app/",
    stack: [
      SiJavascript,
      SiWebrtc,
      SiSocketdotio,
      SiRedis,
      SiNodedotjs,
      SiExpress,
    ],
  },
  {
    title: "Diabetes Prediction",
    description:
      "Machine learning model to predict diabetes using medical data.",
    image: diab,
    stack: [SiPython, SiNumpy, SiPandas, SiScikitlearn],
  },
  {
    title: "DailyDrift",
    description:
      "Habit tracking app with daily logs and progress visualization.",
    image: ddf,
    link: "https://amishra-d.github.io/DailyDrift/",
    stack: [SiReact, SiTailwindcss, SiFirebase],
  },
]

function Projects() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-sans">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </section>
  )
}

export default Projects
