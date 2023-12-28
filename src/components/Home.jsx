import React, {useEffect} from 'react'
import WordSwitch from './WordSwitch'
import Aos from 'aos'
import "aos/dist/aos.css";
import data from '../data'
import Drag_Logo from '/src/assets/Drag Logo.png'
import DragLogo from '/src/assets/DragLogo.png'
import dotted from '/src/assets/dotted.png'
import dotSquare from '/src/assets/DotSquared.jpg'
import bab from '/src/assets/babthede.jpg'
const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, []);
  return (
    <>
    <section data-aos="fade-right"  className={`h-screen overflow-hidden p-2 w-full md:px-28 lg:px-32 section fade-up text-content bg-bg relative`}>
        <img src={Drag_Logo} className=' mx-4 mt-4 hidden dark:block' alt="logo" width="40px"/>
        <img src={DragLogo} className=' mx-4 xl:mt-4 dark:hidden block' alt="logo" width="40px"/>
        <div className='h-full w-full absolute'>
            <div className='w-44 lg:w-52 lg:h-60 border-content border-2 h-52 relative mx-8 my-14'>
                <img src={dotted} alt="dots" width="50px" className='absolute -bottom-10 -right-8 dark:hidden'/>
                <img src={dotted} alt="dots" width="50px" className='absolute -bottom-10 -right-8 dark:hidden'/>
                <img src={dotSquare} alt="dots" width="50px" className='absolute -top-4 -left-4 hidden dark:block'/>
                <img src={dotSquare} alt="dots" width="50px" className='absolute -bottom-10 -right-8 hidden dark:block'/>
                <div className='w-full h-full bg-gray-200 border-3 border-black absolute top-4 left-4'>
                  <img src={bab} alt="" />
                </div>
            </div>
            <div className='mx-8 mt-4 -mb-48 md:mt-24 lg:mt-12 lg:py-12 lg:w-2/3 lg:pt-12 w-1/2'>
            <h2 className='text-4xl md:text-5xl font-bold text-clip mb-4 lg:mb-6 '>I AM {data.name}</h2>
            <h2 className='text-4xl font-bold text-clip md:text-5xl lg:mb-6'>I AM A FRONTEND <span ><WordSwitch/></span></h2>
            </div>
        </div>
      <div className='absolute flex flex-col items-center left-28 lg:left-72 placard-home -top-5 h-full w-screen md:left-48'>
        <div className='lg:h-3/5 h-1/4 bg-content lg:w-4 w-2'></div>
        <h2 className='lg:w-1/5 w-1/3 lg:h-28 h-14 lg:py-9 py-3 text-center text-lg  lg:text-4xl bg-content text-bg rounded-xl border-gray-200 border-4'>Welcome✌</h2>
      </div>
    </section>
    </>
  )
}

export default Home