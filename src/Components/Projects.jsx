import React, { useState } from "react"
import Threadly from "../assets/Threadly.png"
import Zynk from "../assets/Zynk.png"
import ddf from "../assets/DailyDrift.png"
import cacheCluster from "../assets/cache_cluster.png"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

import {
  SiJavascript,
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
  SiDocker,
  SiPrometheus,
  SiAmazonwebservices,
  SiCloudinary,
} from "react-icons/si"

const projects = [
  {
    title: "Threadly",
    subtitle: "Full-Stack Social Platform",
    description:
      "A containerized, anonymous discussion forum offering sub-community thread creation, cloud media hosting, hierarchical nested commenting, and dynamic post curation.",
    features: [
      "Real-time notifications and feed updates",
      "Hierarchical nested commenting tree system",
      "Optimized media hosting using Cloudinary integration",
      "Cloud backend infrastructure deployed on AWS EC2",
      "Containerized microservices configuration with Docker"
    ],
    image: Threadly,
    link: "https://threadly-3859.vercel.app/",
    github: "https://github.com/amishra-d/Threadly",
    stack: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "Cloudinary", icon: SiCloudinary, color: "text-[#3448C5]" },
      { name: "AWS EC2", icon: SiAmazonwebservices, color: "text-[#FF9900]" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
    ],
  },
  {
    title: "Zynk",
    subtitle: "WebRTC Video Platform",
    description:
      "A lightweight, peer-to-peer real-time video conferencing application featuring dynamic room generation, text chat, and media controls.",
    features: [
      "Seamless low-latency WebRTC streams",
      "Robust signaling channel via Socket.IO",
      "Room discovery and easy sharing links",
      "In-call text chat and hardware state toggles"
    ],
    image: Zynk,
    link: "https://zynk-fvm9.vercel.app/",
    github: "https://github.com/amishra-d/Zynk",
    stack: [
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "WebRTC", icon: SiWebrtc, color: "text-[#F25F22]" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-neutral-800 dark:text-neutral-100" },
      { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express", icon: SiExpress, color: "text-neutral-500 dark:text-neutral-300" },
    ],
  },
  {
    title: "Cache Cluster",
    subtitle: "Self-Healing Distributed Cache",
    description:
      "A highly available, fault-tolerant distributed cache cluster featuring consistent hashing, replication, health probing, and automated failover.",
    features: [
      "Consistent hashing algorithm for partition management",
      "Heartbeat checking and auto-promotion failover",
      "Real-time monitoring via Prometheus metrics export",
      "Multi-node clustering containerized with Docker"
    ],
    image: cacheCluster,
    github: "https://github.com/amishra-D/Candis",
    stack: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express", icon: SiExpress, color: "text-neutral-500 dark:text-neutral-300" },
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Prometheus", icon: SiPrometheus, color: "text-[#E6522C]" },
    ],
  },
  {
    title: "DailyDrift",
    subtitle: "Habit Tracker Application",
    description:
      "A gamified habit tracker that visualizes user consistency through interactive heatmaps, streaks, and progress records.",
    features: [
      "Custom calendar streak heatmaps",
      "Firebase authentication and data syncing",
      "Clean minimalist UI with tailored dark mode",
      "Offline cache support for continuous usage"
    ],
    image: ddf,
    link: "https://amishra-d.github.io/DailyDrift/",
    github: "https://github.com/amishra-d/DailyDrift",
    stack: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38BDF8]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
    ],
  },
]

function Projects() {
  const [activeIdx, setActiveIdx] = useState(0)
  const project = projects[activeIdx]

  return (
    <div className="font-sans flex flex-col w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-default pb-3 select-none">
        {projects.map((p, idx) => (
          <button
            key={p.title}
            onClick={() => setActiveIdx(idx)}
            className={`
              px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer
              ${
                activeIdx === idx
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-sm"
                  : "text-secondary hover:text-primary hover:bg-secondary/40"
              }
            `}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Active Project Showcase */}
      <div className="
        w-full
        border border-default rounded-2xl
        bg-card
        overflow-hidden
        transition-all duration-300
        flex flex-col
      ">
        {/* Project Image Header */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-default bg-secondary/15 flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-full max-w-full object-contain select-none"
          />
          {/* Accent border overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
        </div>

        {/* Project Details */}
        <div className="p-6 flex flex-col gap-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold text-primary tracking-tight">
                {project.title}
              </h3>
              <span className="text-[10px] uppercase font-mono tracking-wider text-secondary bg-secondary/80 px-2 py-0.5 rounded border border-default/60">
                {project.subtitle}
              </span>
            </div>
            
            <p className="text-xs text-secondary leading-relaxed font-sans font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Features Bullet Points */}
          <div className="space-y-1.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-secondary/80 font-mono">
              Key Features & Tech Highlights
            </h4>
            <ul className="text-xs text-secondary space-y-1 font-sans pl-2 list-none">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-green-500 font-semibold select-none">›</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-1.5">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-secondary/80 font-mono">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((item, i) => {
                const Icon = item.icon
                return (
                  <span
                    key={i}
                    className="
                      flex items-center gap-1.5 
                      px-2.5 py-1 rounded-md text-[10px] 
                      bg-secondary/70 border border-default/40 
                      text-secondary font-medium select-none
                    "
                  >
                    <Icon className={`${item.color} text-xs`} />
                    <span>{item.name}</span>
                  </span>
                )
              })}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex gap-3 pt-3 border-t border-default/40 mt-1">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1 flex items-center justify-center gap-1.5 
                  px-3 py-2 rounded-lg text-xs font-semibold 
                  bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 
                  hover:bg-neutral-800 dark:hover:bg-neutral-200 
                  transition-colors duration-200 cursor-pointer
                "
              >
                Live Demo <FaExternalLinkAlt className="text-[10px]" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex-1 flex items-center justify-center gap-1.5 
                  px-3 py-2 rounded-lg text-xs font-semibold 
                  border border-default text-primary 
                  hover:bg-secondary 
                  transition-colors duration-200 cursor-pointer
                  ${!project.link ? 'w-full' : ''}
                `}
              >
                <FaGithub className="text-sm" /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
