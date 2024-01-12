import React, { useEffect, useState } from 'react'
import Project from './Project'
import data from '../data'
import "aos/dist/aos.css";
import Aos from 'aos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ideasDark from '/src/assets/Ideas to Projects.png';
import ideasLight from '/src/assets/Ideas to Projects Light.png';


const Projects = () => {
  console.log(window.innerWidth);
  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const projectCarouselElements = data.projects;
  const renderedCarousel = projectCarouselElements.map((carouselElement)=>{
    return <Project title={carouselElement.title} bgColor={carouselElement.accentColor} key={carouselElement.id} description={carouselElement.description} url={carouselElement.url}/>
  })
  return (
    <section data-aos="fade-right"  className={`h-screen border-t-4 border-gray-200 md:px-28 lg:px-32 gap-6  px-8 lg:flex lg:flex-row section bg-bg text-content overflow-hidden relative`}>
        <div className='flex flex-col gap-0'>
          <h3 className='p-4 lg:text-xl text-content rounded-xl w-full mt-6 -mb-64 placard-project lg:mt-8 border-content border-4 md:mt-10'> I've built awesome projects and solutions over the years ranging from marketing websites to fintech apps which provide elegant and accesible user experiences.</h3>
          <div className=''>
            <img src={ideasDark} className=' mx-2 mt-96 rotate-12 hidden lg:block lg:dark:hidden' alt="ideas image" width="500px"/>
            <img src={ideasLight} className=' mx-2 mt-96 rotate-12 hidden lg:hidden lg:dark:block' alt="ideas image" width="500px"/>
          </div>
        </div>
         <div className='bg-gray-200 h-2/3 rounded-xl lg:w-2/3 lg:my-16 lg:h-4/5 lg:ml-auto px-6 flex flex-col justify-center mt-56 relative lg:p-20'>
          <h2>My work</h2>
         <Slider {...settings}>
          {renderedCarousel}
          </Slider>
        </div>
    </section>
  )
}

export default Projects