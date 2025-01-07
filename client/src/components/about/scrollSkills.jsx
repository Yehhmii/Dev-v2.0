import React from 'react'
import './scrollSkills.css'
import Communication from '../../images/conversation_15578493.gif';
import Css from '../../images/css-3_5968242.png';
import Express from '../../images/express.jpeg';
import Testing from '../../images/form_17644522.gif';
import HTMl5 from '../../images/html-5_5968267.png';
import Js from '../../images/js_5968292.png';
import Momgodb from '../../images/mongodb.png';
import Nodejs from '../../images/nodejs.png';
import Php from '../../images/php.png'
import Speaker from '../../images/press-conference.gif'
import Python from '../../images/python.png'
import ReactIcon from '../../images/react.png'
import Github from '../../images/github_3291695.png';
import VercelIcon from '../../images/vercel.png'
import Vite from '../../images/vite.jpeg'
import Xampp from '../../images/xampp.png'
import { Element } from 'react-scroll';

export default function scrollSkills() {
    const images = [
        Communication, Css, Express, Testing, HTMl5, Js, Momgodb,
        Nodejs, Php, Python, ReactIcon, Github, VercelIcon, Vite, Xampp, Speaker,
      ];
    
      return (
        <div className="scrollContainer">
        <Element name='skillsSection'>
          <div className="scrollWrapper">
            {images.map((image, index) => (
              <div className="imageContainer" key={index}>
                <img src={image} alt={`Skill ${index}`} />
              </div>
            ))}
            {/* Duplicate images for seamless scrolling */}
            {images.map((image, index) => (
              <div className="imageContainer" key={`dup-${index}`}>
                <img src={image} alt={`Skill ${index}`} />
              </div>
            ))}
          </div>
        </Element>
        </div>
      );
    }