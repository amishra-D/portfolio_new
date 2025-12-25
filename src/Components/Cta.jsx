import React from 'react'
import { FaXTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md";

function Cta() {
  return (
    <div className='flex flex-col sm:gap-10 gap-6 w-full justify-center items-center mt-5 bg-secondary dark:bg-neutral-900 p-6 rounded-xl font-sans'>
      <h1 className='text-primary text-xl sm:text-2xl font-bold'>Let's Work Together</h1>
      <div className='flex gap-4'>
      <a href='https://x.com/Anshu_mishraD' className='relative p-3 bg-surface dark:bg-black rounded-md group'><FaXTwitter className='text-lg'/> <span className='opacity-0 rounded-md group-hover:opacity-100 absolute text-[0.8rem] whitespace-nowrap bg-secondary dark:bg-neutral-800 p-2 -top-8 left-1/2 -translate-x-1/2 transition-all ease-in-out duration-300 font-mono'>Start Conversation</span></a>
      <a href='https://www.linkedin.com/in/anshu-mishra-a5b645291/' className='relative group p-3 bg-surface dark:bg-black rounded-md'><FaLinkedin className='text-lg'/> <span className='opacity-0 rounded-md group-hover:opacity-100 absolute text-[0.8rem] whitespace-nowrap bg-secondary dark:bg-neutral-800 p-2 -top-8 left-1/2 -translate-x-1/2 transition-all ease-in-out duration-300'>Hire Me</span></a>
      <a href='mailto:anshumishraocog@gmail.com?subject=Let’s%20Work%20Together
' className='relative group p-3 bg-surface dark:bg-black rounded-md'><MdEmail className='text-lg'/> <span className='opacity-0 rounded-md group-hover:opacity-100 absolute text-[0.8rem] whitespace-nowrap bg-secondary dark:bg-neutral-800 p-2 -top-8 left-1/2 -translate-x-1/2 transition-all ease-in-out duration-300'>Email Me</span></a>
      </div>
    </div>
  )
}

export default Cta