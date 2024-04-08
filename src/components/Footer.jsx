import React, {useEffect} from 'react'
import data from '../data'
import Aos from 'aos'
import "aos/dist/aos.css";
import githubDark from '/src/assets/github-logo-1.png'
import linkedIndark from '/src/assets/linkedin-logo-dark.png'
import instagramDark from '/src/assets/instagram-logo.png'
import xLogo from '/src/assets/x-logo.png'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, []);
  return (
    <section data-aos="fade-up" className='bg-gray-200 overflow-hidden text-black text-lg md:text-xl lg:text-2xl h-80 md:px-28 px-8 lg:px-32 w-full lg:pb-4 section dark:bg-gray-300'>
      <div className='border-b-2 border-black pb-28 pt-8'>
        <h2>Say Hello</h2>
        {/* <p className='text-gray-500 dark:text-gray-800'>hello@john.doe</p> */}
        <p className='text-gray-500 dark:text-gray-800'><a href="https://twitter.com/babthedev" target='_blank'>twitter.com/babthedev</a></p>
      </div>
      <div className='flex flex-row mt-8'>
        <h2>&copy;<span>Abdulrahman 2023</span></h2>
        <div className='flex flex-row gap-4 ml-auto'>
          <h2><a href="https://twitter.com/babthedev" target='_blank'><img src={xLogo} width="30px" alt="Abdulrahman's X" /></a></h2>
          <h2><a href="https://instagram.com/babthedev" target='_blank'><img src={instagramDark} width="30px" alt="Abdulrahman's Instagram" /></a></h2>
          <h2><a href="https://github.com/babthedev" target='_blank'><img src={githubDark} width="30px" alt="Abdulrahman's Github" /></a></h2>
          <h2><a href="https://www.linkedin.com/in/babthedev/" target='_blank'><img src={linkedIndark} width="30px" alt="Abdulrahman's Linkedin" /></a></h2>
        </div>
      </div>
    </section>
  )
}

export default Footer