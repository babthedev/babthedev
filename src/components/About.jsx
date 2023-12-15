import React from 'react'
import data from '../data'
import Aos from 'aos'
import "aos/dist/aos.css";

const About = () => {
  return (
    <section data-aos="fade-up" className='h-screen border-t-4 overflow-hidden px-4 md:px-20 lg:px-28 xl:px-32 border-gray-200 section bg-bg text-content' id='about'>
        <div className='flex flex-col lg:flex-row h-4/5 lg:gap-32'>
        <div className="lg:flex flex-col mt-10 lg:mt-16 ">
         <div className=' px-6 lg:mb-20 mb-4 ml-auto '>
          <h2 className='text-xl lg:text-6xl md:text-3xl font-bold'>{data.about[0].header}</h2>
            <p className=' text-base lg:text-xl md:text-lg md:pb-4 lg:pb-4 lg:pt-2 text-gray-500'>{data.about[0].paragraph}</p>
        </div>
         <div className=' px-6 lg:mb-3 mb-4 ml-auto lg:ml-0 '>
          <h2 className='text-xl lg:text-6xl md:text-3xl font-bold'>{data.about[1].header}</h2>
            <p className='text-base lg:text-xl md:text-lg md:pb-4 lg:pb-4 lg:pt-2 text-gray-500'>{data.about[1].paragraph}</p>
        </div>
        </div>
        <div className="lg:flex flex-col lg:mt-24 xl:mt-44 px-6">
        <div className="lg:flex flex-col mb-4 lg:mb-20 ">
          <h2 className='text-xl lg:text-6xl md:text-3xl font-bold'>{data.about[2].header}</h2>
            <p className='text-base lg:text-xl md:text-lg md:pb-4 lg:pb-4 lg:pt-2 text-gray-500'>{data.about[2].paragraph}</p>
        </div>
         <div className=' ml-auto mb-10 lg:ml-0 mt-auto'>
          <h2 className='text-xl lg:text-6xl md:text-3xl font-bold'>{data.about[3].header}</h2>
            <p className='text-base lg:text-xl md:text-lg md:pb-4 lg:pb-4 lg:pt-2 text-gray-500'>{data.about[3].paragraph}</p>
        </div>
        </div>
        </div>
    </section>
  )
}

export default About