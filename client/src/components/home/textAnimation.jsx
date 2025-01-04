import React, { useState, useEffect } from 'react'
import './textAnimation.css';

export default function textAnimation() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = ["Software Engineer","Creative Speaker", "Full Stack Developer", "Python Developer."]

    useEffect (() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

  return (
    <div className='textContainer'>
        {texts.map((text, index) => (
            <div 
                key={index}
                className={`animatedText ${index === currentTextIndex ? 'visible' : ''}`}
            >
                {text}
            </div>
        ))}
    </div>
  )
}
