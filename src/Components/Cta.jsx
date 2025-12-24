import React from 'react'
import { FaXTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md";

function Cta() {
  return (
    <div className='flex flex-col gap-6 w-full justify-center items-center mt-5 bg-secondary dark:bg-neutral-900 p-6 rounded-xl font-sans'>
      <h1 className='text-primary text-xl sm:text-2xl font-bold'>Let's Work Together</h1>
      <div className='flex gap-4'>
      <a href='https://x.com/Anshu_mishraD' className='p-3 bg-surface dark:bg-black rounded-md'><FaXTwitter className='text-lg'/></a>
      <a href='https://www.linkedin.com/in/anshu-mishra-a5b645291/' className='p-3 bg-surface dark:bg-black rounded-md'><FaLinkedin className='text-lg'/></a>
      <a href='mailto:anshumishraocog@gmail.com?subject=Let’s%20Work%20Together
' className='p-3 bg-surface dark:bg-black rounded-md'><MdEmail className='text-lg'/></a>
      </div>
    </div>
  )
}

export default Cta