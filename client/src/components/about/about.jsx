import React from 'react';
import { useInView } from 'react-intersection-observer';
import './about.css';
import DevPic from '../../images/dev1.jpeg';
import Btn from './btn';

export default function About() {
  const { ref: aboutRef, inView } = useInView({
    threshold: 0.1, // Trigger 
  });

  return (
    <div
      ref={aboutRef}
      className={`aboutContainer ${inView ? 'visible' : 'hidden'}`}
    >
      <div className="topHeading">
        <h3>About Me</h3>
      </div>
      <div
        className={`messageIcon ${inView ? 'inView' : ''}`}
      >
        <p>
          I'm a progressive software developer with a skilled aptitude for optimizing designs to meet both current and future demands. 
          I excel in high-pressure environments, consistently meeting challenging design standards and tight schedules. 
          My expertise lies in Python development, full-stack development, and utilizing advanced design tools. <br />
          As an innovative Software Developer, I have a proven track record in designing, debugging, and deploying software for both client and server applications.
        </p>
      </div>
      <div
        className={`aboutPicture ${inView ? 'inView' : ''}`}
      >
        <img src={DevPic} alt="Dev" />
      </div>
      <div className="aboutBtn">
        <Btn />
      </div>
    </div>
  );
}
