import React, {useEffect} from 'react'
import WordSwitch from './WordSwitch'
import LastWordSwitch from './LastWordSwitch'
import Aos from 'aos'
import "aos/dist/aos.css";
import data from '../data'
import dotted from '/src/assets/dotted.png'
import dotSquare from '/src/assets/DotSquared.jpg'
import bab from '/src/assets/babs.jpg'
import Header from './Header';
const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, []);
  return (
    <div className='flex'>
    <div className="lg:w-2/3 w-full">
      <section data-aos="fade-up"  className={`h-screen overflow-hidden px-2 pt-4 w-full md:px-28 lg:px-32 section fade-up text-content bg-bg relative`}>
          {/* <img src={Drag_Logo} className=' mx-4 mt-4 hidden dark:block' alt="logo" width="40px"/>
          <img src={DragLogo} className=' mx-4 xl:mt-4 dark:hidden block' alt="logo" width="40px"/> */}
          <div className='h-full w-full absolute'>
              <div className='mx-8 mt-12 -mb-48 md:mt-24 lg:mt-32 lg:py-12 lg:w-2/3 lg:pt-6 w-full'>
                <h2 className='text-2xl md:text-5xl text-clip mb-4 lg:mb-6 mt-16 lg:mt-0'>{data.name}</h2>
                <h2 className='font-bold text-clip md:text-5xl lg:mb-6'><span className='hero-text text-5xl'>Frontend</span></h2>
                <h2 className=' font-bold text-clip md:text-5xl lg:mb-6'><span className='hero-text text-5xl'>Developer.</span></h2>
                <div className='w-52 md:hidden border-content relative border-2  mx-8 mt-14'>
                <img src={dotted} alt="dots" width="50px" className='absolute -top-6 -left-6 dark:hidden'/>
                  <img src={dotted} alt="dots" width="50px" className='absolute -bottom-4 -right-4 dark:hidden'/>
                  <img src={dotSquare} alt="dots" width="50px" className='absolute -top-4 -left-4 hidden dark:block'/>
                  <img src={dotSquare} alt="dots" width="50px" className='absolute -bottom-10 -right-8 hidden dark:block'/>
                  
                  <img src={bab} alt="" width="200px"  className=''/>
                </div>
                <div className='w-28 md:w-80 md:h-80 border-content border-2 h-52 relative hidden lg:hidden md:block md:top-2 top-0 right-0 md:right-0 mx-8 my-14 rounded-'>
                  <img src={dotted} alt="dots" width="100px" className='absolute -top-10 -left-10 dark:hidden'/>
                  <img src={dotted} alt="dots" width="100px" className='absolute -bottom-16 -right-16 dark:hidden'/>
                  <img src={dotSquare} alt="dots" width="50px" className='absolute -top-4 -left-4 hidden dark:block'/>
                  <img src={dotSquare} alt="dots" width="50px" className='absolute -bottom-10 -right-8 hidden dark:block'/>
                    <img src={bab} alt="" width="1000px"  className='absolute top-6 left-6 z-50 rounded-'/>
                  {/* <div className='w-full h-full bg-gray-200 border-3 border-black absolute top-6 left-6'>
                  </div> */}
              </div>
                {/* <h2 className='hero-text font-bold text-clip md:text-5xl lg:mb-6'><span ><WordSwitch/></span></h2>
                <h2 className='hero-text font-bold text-clip md:text-5xl lg:mb-6'><span ><LastWordSwitch/></span></h2> */}
                <p className='w-2/3 text-lg md:text-2xl mt-6 md:mt-24 lg:mt-16 font-light'>I am dedicated to the artistry of frontend development.</p>
              <p className='w-2/3 text-lg md:text-2xl mt-6 font-light'>I specialize in crafting products that are both solid and scalable, providing users with seamless experience.</p>
                <div className='flex gap-8 w-full lg:w-2/3 mt-8'>
              {/* <p className='w-1/2'>I am dedicated to the artistry of frontend development.</p> */}
                </div>
              </div>
          </div>
      </section>
    </div>
    <div className="w-1/3 hidden lg:block bg-gray-200"></div>
    <div className='w-28 lg:w-80 lg:h-80 border-content border-2 h-52 absolute hidden lg:block lg:top-32 top-0 right-0 lg:right-96 mx-8 my-14 rounded-full'>
                  <img src={dotted} alt="dots" width="100px" className='absolute -top-10 -left-10 dark:hidden'/>
                  <img src={dotted} alt="dots" width="100px" className='absolute -bottom-16 -right-16 dark:hidden'/>
                  <img src={dotSquare} alt="dots" width="50px" className='absolute -top-4 -left-4 hidden dark:block'/>
                  <img src={dotSquare} alt="dots" width="50px" className='absolute -bottom-10 -right-8 hidden dark:block'/>
                    <img src={bab} alt="" width="1000px"  className='absolute top-10 left-12 z-50 rounded-full'/>
                  {/* <div className='w-full h-full bg-gray-200 border-3 border-black absolute top-6 left-6'>
                  </div> */}
              </div>
    <div className='w-28 lg:w-80 lg:h-80 border-content border-2 h-52 absolute hidden lg:block lg:top-56 top-0 right-0 lg:right-72 -z-25 mx-8 my-14 rounded-full'>
              </div>
    </div>
  )
}

export default Home