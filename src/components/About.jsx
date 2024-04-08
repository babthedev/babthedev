import React from 'react'
import data from '../data'
import Aos from 'aos'
import "aos/dist/aos.css";
import dotted from '/src/assets/dotted.png'
import dotSquare from '/src/assets/DotSquared.jpg'

const About = () => {
  return (
    <section data-aos="fade-up" className='h-screen border-t-4 overflow-hidden px-4 md:px-20 mt-0   lg:px-28 xl:px-32 border-gray-200 section bg-bg text-content' id='about'>
        <div className='flex flex-col md:flex-row h-4/5 md:mt-20 mt-16 gap-4 lg:gap-32'>
        <div className="lg:flex flex-col mt-0 lg:mt-16 ">
         <div className=' px-6 lg:mb-20 mb-4 md:block h-1/2 hidden ml-auto '>
        </div>
        <div className='w-28 md:w-60 md:h-60 border-content border-2 h-52 absolute hidden md:block lg:top-80 bottom-48 right-20 lg:right-72 -z-25 mx-8 my-14 rounded-full'>
              </div>
        <div className='w-28 md:w-60 md:h-60 border-content border-2 h-52 absolute hidden md:block lg:top-96 bottom-36 right-10 lg:right-48 -z-25 mx-8 my-14 rounded'>
              </div>
         <div className=' px-12 lg:mb-3 mb-4 ml-auto lg:ml-0 '>
          <h2 className='text-3xl lg:text-6xl md:text-3xl font-bold'>{data.about[1].header}</h2>
            <p className='text-lg lg:text-xl md:text-lg md:pb-4 lg:pb-4 lg:pt-2 text-gray-500'>{data.about[1].paragraph}</p>
        </div>
        </div>
        <div className="lg:flex flex-col mt-8 lg:mt-16 ">
         <div className=' px-12 lg:mb-3 mb-4 ml-auto lg:ml-0 '>
          <h2 className='text-3xl lg:text-6xl md:text-3xl font-bold'>{data.about[3].header}</h2>
            <p className='text-lg lg:text-xl md:text-lg md:pb-4 lg:pb-4 lg:pt-2 text-gray-500'>{data.about[3].paragraph}</p>
        </div>
        <div className='w-28 md:w-16 md:h-16 border-content border-2 h-52 absolute hidden md:block md:top-20 top-0 right-0 lg:left-72 md:left-32 -z-25 mx-8 my-14 rounded-full'>
              </div>
        <div className='w-28 md:w-16 md:h-16 border-content border-2 h-52 absolute hidden md:block md:top-32 top-0 right-0 lg:left-72 md:left-32 -z-25 mx-8 my-14 rounded-full'>
              </div>
        <div className='w-28 md:w-16 md:h-16 border-content border-2 h-52 absolute hidden md:block md:top-44 top-0 right-0 lg:left-72 md:left-32 -z-25 mx-8 my-14 rounded-full'>
              </div>
        <div className='w-28 md:w-16 md:h-16 border-content border-2 h-52 absolute hidden md:block md:top-56 top-0 right-0 lg:left-72 md:left-32 -z-25 mx-8 my-14 rounded-full'>
              </div>
              <img src={dotted} alt="dots" width="100px" className='absolute top-4 right-4 w-16 md:w-24 md:top-10 md:left-16 dark:hidden'/>
                  <img src={dotted} alt="dots" width="100px" className='absolute w-16 md:w-24 bottom-4 right-4 lg:bottom-16 lg:right-16 dark:hidden'/>
                  <img src={dotSquare} alt="dots" width="50px" className='absolute top-4 right-4 w-16 md:w-24 md:top-10 md:left-16 hidden dark:block'/>
                  <img src={dotSquare} alt="dots" width="50px" className='absolute w-16 md:w-24 bottom-4 right-4 lg:bottom-16 lg:right-16 hidden dark:block'/>
                    {/* <img src={bab} alt="" width="1000px"  className='absolute top-10 left-12 rounded-full'/> */}
        <div className=' px-6 lg:mb-20 h-1/2 hidden md:block mb-4 ml-auto '>
        </div>
        </div>
        </div>
    </section>
  )
}

export default About