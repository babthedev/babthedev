import React, {useEffect} from 'react'
import data from '../data'
import Aos from 'aos'
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, []);
  return (
    <section data-aos="fade-right" className='bg-gray-200 overflow-hidden text-black text-lg md:text-xl lg:text-2xl h-80 md:px-28 px-8 lg:px-32 w-full lg:pb-4 section dark:bg-gray-300'>
      <div className='border-b-2 border-black pb-28 pt-8'>
        <h2>Say Hello</h2>
        {/* <p className='text-gray-500 dark:text-gray-800'>hello@john.doe</p> */}
        <p className='text-gray-500 dark:text-gray-800'>twitter.com/babthedev</p>
      </div>
      <div className='flex flex-row mt-8'>
        <h2>&copy;<span>{data.name}2023</span></h2>
        <div className='flex flex-row gap-4 ml-auto'>
          <h2>TW</h2>
          <h2>EM</h2>
          <h2>IG</h2>
          <h2>GH</h2>
          <h2>IN</h2>
        </div>
      </div>
    </section>
  )
}

export default Footer