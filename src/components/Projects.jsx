import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import data from '../data'
import "aos/dist/aos.css";
import Aos from 'aos';
import CustomSubstackEmbed from './CustomSubstackEmbed';
import SubstackFeedEmbed from './SubstackFeedEmbed';


const Projects = () => {
  return (
    <section data-aos="fade-up"  className={`h-screen border-t-4 border-gray-200 md:px-28 lg:px-32 gap-6  px-8 lg:flex lg:flex-row section bg-bg text-content overflow-hidden relative`}>
      <div className='flex flex-col lg:flex-row lg:mt-12 mt-8 md:mt-24 lg:mb-12 mb-2 lg:border-2 border-white'>
        <div className='lg:w-1/2 lg:px-20 px-8'>
          <h2 className='lg:mt-20 mt-8 hero-text text-2xl md:text-6xl w-full font-bold lg:w-3/4'>I design and build stuff</h2>
          <p className='text-xl md:text-2xl font-light lg:mt-10 mt-6'>Open source projects, web apps and experimentals.</p>
          <Link to="/work">
        <button className='lg:text-xl text-md font-light py-2 lg:py-4 px-6 lg:px-10 border border-content lg:mt-16 mt-8 hover:font-normal hover:bg-content hover:text-bg text-center'>See my work</button>
        </Link>
        </div>
        <div className='hidden lg:block'>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
          <p className='h-4 text-2xl font-extralight'>|</p>
        </div>
        <hr className='lg:hidden mt-6 bg-content'/>
        <div className='lg:w-1/2 lg:px-20 px-8'>
        <h2 className='lg:mt-20 mt-8 lg:text-6xl text-2xl hero-text w-full md:text-6xl font-bold '>I write a weekly email newsletter</h2>
          <p className='text-xl md:text-2xl lg:text-xl font-light mt-6'>I cover updates about Big Tech, consumer tech and startups through the view of an enthusiast.</p>
          <SubstackFeedEmbed/>
          <CustomSubstackEmbed/>
        </div>
      </div>
    </section>
  )
}

export default Projects