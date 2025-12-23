import React from "react"

function ProjectCard({ name, description, completed, total, logo, color }) {
  const progress = Math.round((completed / total) * 100)

  return (
    <div className="bg-secondary rounded-md flex gap-2 items-center border-default">
       <div className="w-16 h-16 rounded-full">
        <img className="object-cover" src={logo} alt="" />
       </div>
       <div className="flex flex-col items-around justify-center">
       <h2 className="text-primary font-bold text-sm sm:text-lg">{name}</h2>
       <p className="text-secondary text-xs break-none">{description}</p>
       </div>
    </div>
  )
}
export default ProjectCard
