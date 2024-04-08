import React, { useEffect, useState } from 'react'

const WordSwitch = () => {
    const words = ['Developer', 'Writer'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); 
        }, 2500);
        return () => clearInterval(intervalId)
    }, [])
  return (
    <div className='whitespace-nowrap'>
        {words.map((word, index)=>(
            <span key={index} className={index === currentWordIndex ? 'inline hero-text' : 'hidden'}>{word}</span>
        ))}
    </div>
  );
}

export default WordSwitch