import React from 'react'

const Project = ({title, description, url}) => {
  return (
    <div className={`mr-4`}>
      <div className={`bg-content rounded-xl text-center w-full`}>
        <div className={`h-1/2 rounded-t-xl py-4 bg-gray-300`}>
          <h2 className='text-content text-2xl lg:text-3xl'>{title}</h2>
        </div>
        <div className='h-1/2  p-8'>
          <p className='text-bg mb-4'>{description}</p>
          <a className={`text-bg pt-4 hover:border-b border-bg`} href={url} target='_blank'>Visit Site <span >{'👆'}</span></a>
        </div>
      </div>
    </div>
  )
}

export default Project