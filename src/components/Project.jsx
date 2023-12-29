import React from 'react'

const Project = ({title, description, url, bgColor}) => {
  return (
    <div className={`mr-4`}>
      <div className={`bg-content rounded-xl text-center w-full`}>
        <div className={`h-2/5 rounded-t-xl py-4 bg-${bgColor}`}>
          <h2 className='text-bg'>{title}</h2>
        </div>
        <div className='h-3/5  p-8'>
          <p className='text-bg mb-4'>{description}</p>
          <a className={`text-${bgColor} pt-4`} href={url}>Visit Site</a>
        </div>
      </div>
    </div>
  )
}

export default Project