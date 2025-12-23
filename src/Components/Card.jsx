import React from 'react'

function Card({title,subtitle,image,time}) {
  return (
    <div className='w-full flex gap-2 justify-start items-center'>
    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    <div className='flex justify-between items-start w-full'>
        <div>
        <p className='font-bold text-sm'>{title}</p>
        <p className='text-xs font-medium'>{subtitle}</p>
    </div>
    <div className='text-neutral-500'>
        {time}
    </div>
    </div>
    </div>
  )
}

export default Card