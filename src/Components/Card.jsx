import React from 'react'
import { HiOutlineChevronRight } from "react-icons/hi";
function Card({title,subtitle,image,time,link}) {
  return (
    <a className='w-full flex gap-2 justify-start items-center group cursor-pointer font-sans' href={link}>
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    <div className='flex justify-between items-start w-full'>
        <div>
        <p className='font-bold text-sm'>{title}<span className="inline-block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-out text-sm"><HiOutlineChevronRight/></span></p>
        <p className='text-xs font-medium'>{subtitle}</p>
    </div>
    <div className='text-neutral-500'>
        {time}
    </div>
    </div>
    </a>
  )
}

export default Card