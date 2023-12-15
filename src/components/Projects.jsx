import React, { useEffect, useState } from 'react'
import Project from './Project'
import data from '../data'
import "aos/dist/aos.css";
import Aos from 'aos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


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
    return <Project title={carouselElement.title} key={carouselElement.id} description={carouselElement.description} url={carouselElement.url}/>
  })
  return (
    <section data-aos="fade-right"  className={`h-screen border-t-4 border-gray-200 md:px-28 lg:px-32  px-8 lg:flex lg:flex-row section bg-bg text-content`}>
        <div className=''>
            <img src="/public/assets/Ideas to Projects.png" className=' mx-2 mt-96 rotate-12 hidden lg:block lg:dark:hidden' alt="logo" width="300px"/>
            <img src="/public/assets/Ideas to Projects Light.png" className=' mx-2 mt-96 rotate-12 hidden lg:hidden lg:dark:block' alt="logo" width="300px"/>
        </div>
         <div className='bg-gray-200 h-2/3 rounded-xl lg:w-2/3 lg:my-16 lg:h-4/5 lg:ml-auto px-6 flex flex-col justify-center mt-48 relative lg:p-20'>
         <Slider {...settings}>
          {renderedCarousel}
          </Slider>
        </div>
    </section>
  )
}

export default Projects