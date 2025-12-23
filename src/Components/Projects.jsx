import React from "react"
import ProjectCard from "./ProjectCard"
import Logo from "../assets/Logo.jpg"

const projects = [
  {
    name: "Threadly",
    description: "Anonymous posting platform",
    completed: 8,
    total: 12,
    logo: Logo,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Zynk",
    description: "Real-time video calling app",
    completed: 5,
    total: 10,
    logo: Logo,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    name: "Diabetes Prediction",
    description: "Diabetes Prediction Model",
    completed: 5,
    total: 10,
    logo: Logo,
    color: "from-yellow-400 to-yellow-600",
  },
]

function Projects() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  )
}

export default Projects
