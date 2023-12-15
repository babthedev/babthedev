import React, { useEffect, useState } from 'react'

const WordSwitch = () => {
    const words = ['DEVELOPER', 'DESIGNER'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    useEffect(()=>{
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); 
        }, 2000);
        return () => clearInterval(intervalId)
    }, [])
  return (
    <div className='overflow-hidden word-switcher whitespace-nowrap'>
        {words.map((word, index)=>(
            <span key={index} className={index === currentWordIndex ? 'inline' : 'hidden'}>{word}</span>
        ))}
    </div>
  );
}

export default WordSwitch