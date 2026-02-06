import React, { useEffect, useRef, useState } from "react"
import Card from "./Card"
import Skills2 from "./Skills2"
import Projects from "./Projects"
import technoLogo from "../assets/techno-logo.png"
import { FaDatabase } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import cert1 from "../assets/cert1.png"
import hackerrank from "../assets/hackerrank.png"
import pfp from "../assets/pfp.jpeg"
import Footer from "./Footer"
import SpotifyCard from "./SpotifyCard"
import ChessLastGame from "./ChessLastGame"
import Seaparator from "./Seaparator.jsx"
import Personal from "./Personal.jsx"
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoNewspaperSharp } from "react-icons/io5";
import Cta from "./Cta.jsx"
import { FaChessBishop } from "react-icons/fa"
import getTimeGreeting from '../hooks/timegreeting.js'
import Acheivements from "./Acheivements.jsx"
const Sidecard = () => {
    const [subtitle, setsubtitle] = useState("Developer")
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

    useEffect(() => {
        const titles = ["Developer", "Engineer"];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % titles.length;
            setsubtitle(titles[index]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    const [greet, setgreet] = useState('Hello')
    const timerRef = useRef(null);
    const handleMouseEnter = () => {
        timerRef.current = setTimeout(() => {
            setgreet(getTimeGreeting());
        }, 2000);
    };

    const handleMouseLeave = () => {
        clearTimeout(timerRef.current);
    };
    return (
        <div className="w-full lg:w-1/2 flex flex-col mt-10 text-primary bg-surface font-mono">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 px-6 sm:px-10 lg:px-16">
                <div className="max-w-xl">
                    <h1 className="font-bold text-4xl sm:text-6xl">Hi I'm Anshu<span className="invisible absolute left-10 text-sm group-hover:visible"><FaChessBishop /></span></h1>
                    <p className="font-semibold text-lg sm:text-xl text-secondary transition-opacity duration-500 ease-in-out opacity-100">
                        {subtitle}
                    </p>
                    <div className="flex gap-2 mt-2 cursor-default">
                        <span className="
    text-xs font-medium
    px-2 py-1 rounded-full
    bg-green-500/10 text-green-600
    border border-green-500/20
  ">
                            Open to Work
                        </span>

                        <span className="
    text-xs font-medium
    px-2 py-1 rounded-full
    bg-blue-500/10 text-blue-600
    border border-blue-500/20
  ">
                            Open to Intern
                        </span>
                    </div>

                    <a href='https://maps.app.goo.gl/2QXuJC1PQrwDkhwh7' target="_blank" className="mt-4 flex gap-2">
                        <div className="bg-secondary p-2 rounded-md"><HiLocationMarker /></div>
                        <div>
                            <p className="font-semibold text-sm">Location</p>
                            <p className="text-xs text-secondary">
                                Serampore, West Bengal
                            </p>
                        </div>
                    </a>

                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=anshumishraocog@gmail.com' target="_blank" className="mt-2 flex gap-2">
                        <div className="bg-secondary p-2 rounded-md"><MdEmail /></div>
                        <div>
                            <p className="font-semibold text-sm">Email</p>
                            <p className="text-xs text-secondary break-all">
                                anshumishraocog@gmail.com
                            </p>
                        </div>
                    </a>
                </div>
                <div className="group relative flex justify-center" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <img
                        src={pfp}
                        alt="Profile"
                        className="
     
      rounded-full
      w-24 h-24 sm:w-28 sm:h-28
      object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out
    "
                    />

                    <span
                        className="
      absolute left-12 -top-3
      px-3 py-2
      bg-secondary
      text-xs
      rounded-sm
      bg-secondary/90
      text-primary
      animate-tooltip
      whitespace-nowrap group-hover:scale-110 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                    >
                        {greet}
                    </span>
                </div>

            </div>

            <SpotifyCard />

            <ChessLastGame />

            <Section id='about'>
                <h2 className="font-bold text-xl">About</h2>
                <p className="text-secondary text-sm sm:text-md">
                    Developer building modern web applications and real-time systems, with a
                    strong interest in machine learning and data-driven problem solving.
                    Actively working on low-latency, interactive features, scalable backend
                    flows, and practical{" "}
                    <span className="group inline-flex items-center">
  <a
    href="https://www.ibm.com/think/topics/machine-learning"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary font-medium underline underline-offset-1"
  >
    Machine Learning
  </a>
  <span
    className="
      overflow-hidden
      w-0
      group-hover:w-5
      transition-all
      duration-200
      flex
      items-center
      justify-center
    "
  >
    <FaDatabase
      className="
        text-sm
        opacity-0
        group-hover:opacity-100
        transition-all
        ease-in-out
        duration-150
        -translate-x-1
        group-hover:translate-x-[0.5px]
      "
    />
  </span>
</span>

{" "}models while continuously  <br className="hidden md:block" />learning and building. Check out my{" "}
<span className="group inline-flex items-center">
  <a
    href="https://drive.google.com/file/d/17yHzHcaXlqKxsVxd5oS8Y3Ok2bmzhTJo/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary font-medium underline underline-offset-2"
  >
    Resume
  </a>

  <span
    className="
      overflow-hidden
      w-0
      group-hover:w-4
      transition-all
      duration-200
      flex
      items-center
      justify-center
    "
  >
    <IoNewspaperSharp
      className="
        text-sm
        opacity-0
        group-hover:opacity-100
        transition-all
        ease-in-out
        duration-150
        -translate-x-1
        group-hover:translate-x-[0.5px]
      "
    />
  </span>
</span>

                </p>
            </Section>

            <Section>
                <h2 className="font-bold text-xl">Consistency</h2>
                <p className="text-secondary text-sm mb-4">
                    Daily problem solving on <span className="group inline-flex items-center"><a className='text-primary underline underline-offset-1' target="_blank" href='https://leetcode.com/u/AnshuM18/'>LeetCode</a><span className="overflow-hidden
      w-0
      group-hover:w-4
      transition-all
      duration-200
      flex
      items-center
      justify-center">
                        <FaCode className="group-hover:opacity-100 opacity-0 -translate-x-1 group-hover:translate-x-[0.7px] text-sm transition-all duration-150"/>
                        </span>
                        </span>
                </p>

                <img
                    src={`https://leetcard.jacoblin.cool/AnshuM18?theme=${isDark ? "dark" : "light"
                        }&ext=heatmap`}
                    alt="LeetCode Heatmap"
                    className="w-full rounded-md"
                />
            </Section>

            <Section id='Education'>
                <h2 className="font-bold text-xl mb-2">Education</h2>
                <Card
                    image={technoLogo}
                    title="Techno India University"
                    link="https://www.technoindiauniversity.ac.in/"
                    subtitle="B.Tech (CSE - AIML)"
                    time="2022 - 2026"
                />
            </Section>

            <Section id="Skills">
                <h2 className="font-bold text-xl mb-2">Skills</h2>
                <Skills2 />
            </Section>

            <Section id='certifications'>
                <h2 className="font-bold text-xl mb-2">Certifications</h2>
                <Card
                    image={cert1}
                    title="Supervised Machine Learning"
                    subtitle="Stanford University — Andrew Ng"
                    time="2025"
                    link="https://coursera.org/share/0ce33e39a872389652dc89bef7e90235"
                />
                <Card
                    image={hackerrank}
                    title="SQL (Intermediate)"
                    subtitle="HackerRank"
                    time="2025"
                    link="https://www.hackerrank.com/certificates/iframe/66babd0710ff"
                />
            </Section>
            <Section id='certifications'>
                <h2 className="font-bold text-xl mb-2">Acheivements</h2>
                <Acheivements/>
            </Section>

            <Section id='projects'>
                <h2 className="font-bold text-xl mb-2">Projects</h2>
                <Projects />
            </Section>
            <Seaparator />
            <Section>
                <h2 className="text-primary font-bold text-lg sm:text-xl">Life</h2>
                <Personal></Personal>
            </Section>
            <Section id='contactus'>
                <Cta />
            </Section>
            <Section>
                <Footer />
            </Section>
        </div>
    )
}

const Section = ({ id, children }) => (
    <div id={id} className="flex flex-col gap-4 mt-10 px-6 sm:px-10 lg:px-16 max-w-xl scroll-mt-12">
        {children}
    </div>
)
export default Sidecard
