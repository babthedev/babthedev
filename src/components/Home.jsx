import React, {useEffect, useState} from 'react'
import WordSwitch from './WordSwitch'
import Aos from 'aos'
import "aos/dist/aos.css";
import data from '../data'
const Home = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(()=>{
    const delay = 3000;
    const revealTimeout = setTimeout(() => {
      setReveal(true);
    }, delay);
    return ()=> clearTimeout(revealTimeout)
  }, []);

  useEffect(()=>{
    Aos.init({duration: 1000});
  }, []);
  return (
    <>
    { reveal ?
    <section data-aos="fade-up"  className={`h-screen p-2 w-full  ${reveal ? 'opacity-100' : 'opacity-0'} md:px-28 lg:px-32 section fade-up text-content bg-bg`}>
        <img src="/src/assets/Drag Logo.png" className=' mx-4 mt-4 hidden dark:block' alt="logo" width="40px"/>
        <img src="/src/assets/DragLogo.png" className=' mx-4 xl:mt-4 dark:hidden block' alt="logo" width="40px"/>
        <div className='h-full w-full absolute'>
            <div className='w-44 lg:w-52 lg:h-60 border-content border-2 h-52 relative mx-8 my-14'>
                <img src="https://ibb.co/FxnNKKc" alt="dots" width="50px" className='absolute -top-4 -left-4 dark:hidden'/>
                <a href="https://imgbb.com/"><img src="https://i.ibb.co/Lkvb88B/dotted.png" className='absolute -top-4 -left-4 dark:hidden' alt="dotted" border="0" width="50px" /></a>
                <img src="/src/assets/https://ibb.co/FxnNKKc" alt="dots" width="50px" className='absolute -bottom-10 -right-8 dark:hidden'/>
                <img src="/src/assets/DotSquared.jpg" alt="dots" width="50px" className='absolute -top-4 -left-4 hidden dark:block'/>
                <img src="/src/assets/DotSquared.jpg" alt="dots" width="50px" className='absolute -bottom-10 -right-8 hidden dark:block'/>
                <div className='w-full h-full bg-gray-200 border-3 border-black absolute top-4 left-4'>
                </div>
            </div>
            <div className='mx-8 mt-4 py-12 lg:w-2/3 lg:pt-12 w-1/2'>
            <h2 className='text-4xl lg:text-5xl font-bold text-clip mb-4 lg:mb-6'>HE IS {data.name}</h2>
            <h2 className='text-4xl font-bold text-clip lg:text-5xl lg:mb-6'>HE IS A FRONTEND <span ><WordSwitch/></span></h2>
            </div>
            <img src="/src/assets/Long Arrow down.svg" width="90px" className='absolute xl:bottom-32 bottom-16 right-8 xl:right-64 down-arrow' alt="" />
        </div>
    </section> :
    <div>
    <h2 className='h-screen p-2 w-full text-3xl dark:block hidden lg:text-6xl'>Wait for Mylo... <img src="/src/assets/Mylo Head Dark.png" alt=""  width="50px"/> </h2>
    <h2 className='h-screen p-2 w-full text-3xl lg:text-6xl dark:hidden block'>Wait for Mylo... <img src="/src/assets/Mylo Head Light.png" className='dark:hidden block' alt=""  width="50px"/> </h2>
    </div>
}
    </>
  )
}

export default Home