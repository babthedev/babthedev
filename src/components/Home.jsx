import React, {useEffect} from 'react'
import WordSwitch from './WordSwitch'
import Aos from 'aos'
import "aos/dist/aos.css";
import data from '../data'
const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, []);
  return (
    <>
    <section data-aos="fade-right"  className={`h-screen p-2 w-full md:px-28 lg:px-32 section fade-up text-content bg-bg relative`}>
        <img src="/public/Drag Logo.png" className=' mx-4 mt-4 hidden dark:block' alt="logo" width="40px"/>
        <img src="/public/DragLogo.png" className=' mx-4 xl:mt-4 dark:hidden block' alt="logo" width="40px"/>
        <div className='h-full w-full absolute'>
            <div className='w-44 lg:w-52 lg:h-60 border-content border-2 h-52 relative mx-8 my-14'>
                <img src="/public/dotted.png" alt="dots" width="50px" className='absolute -bottom-10 -right-8 dark:hidden'/>
                <img src="/public/dotted.png" alt="dots" width="50px" className='absolute -bottom-10 -right-8 dark:hidden'/>
                <img src="/public/DotSquared.jpg" alt="dots" width="50px" className='absolute -top-4 -left-4 hidden dark:block'/>
                <img src="/public/DotSquared.jpg" alt="dots" width="50px" className='absolute -bottom-10 -right-8 hidden dark:block'/>
                <div className='w-full h-full bg-gray-200 border-3 border-black absolute top-4 left-4'>
                </div>
            </div>
            <div className='mx-8 mt-4 py-12 lg:w-2/3 lg:pt-12 w-1/2'>
            <h2 className='text-4xl lg:text-5xl font-bold text-clip mb-4 lg:mb-6'>I AM {data.name}</h2>
            <h2 className='text-4xl font-bold text-clip lg:text-5xl lg:mb-6'>I AM A FRONTEND <span ><WordSwitch/></span></h2>
            </div>
            <img src="/src/Long Arrow down.svg" width="90px" className='absolute xl:bottom-32 bottom-16 right-8 xl:right-64 down-arrow' alt="" />
        </div>
      <div className='absolute flex flex-col items-center left-24 lg:left-72 placard-home -top-5 h-full w-full'>
        <div className='lg:h-3/5 h-2/5 bg-content lg:w-4 w-2'></div>
        <div className='lg:w-1/5 w-1/4 lg:h-28 h-14 lg:py-9 py-3 text-center text-xl lg:text-4xl bg-content text-bg rounded-xl border-gray-200 border-4'>Welcome</div>
      </div>
    </section>
    </>
  )
}

export default Home