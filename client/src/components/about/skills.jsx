import React, { useEffect, useState } from 'react';
import './skills.css';
import { Element } from 'react-scroll';

export default function Skills() {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.id]);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="clipCardContainer">
        <Element name='target'>
        <div className="clipHeading">
        <h3>Skills</h3>
      </div>
        </Element>

      <div className="mainClipsContainer">
        <div>
          <div className="clipCardContainer1">
            <div className="leftClip"></div>
            <div
              className={`leftCard card ${
                visibleCards.includes('1') ? 'visible' : ''
              }`}
              data-id="1"
            >
              <h3>Software Engineering</h3>
              <p className='skillCard'>
                As a software engineer, I specialize in designing, developing,
                and maintaining software solutions that solve complex problems
                and improve user experiences. I am adept at optimizing
                performance and ensuring the scalability and reliability of
                applications across various platforms.
              </p>
            </div>
          </div>
          <div className="clipCardContainer2">
            <div className="leftClip"></div>
            <div
              className={`leftCard card ${
                visibleCards.includes('2') ? 'visible' : ''
              }`}
              data-id="2"
            >
              <h3>Full Stack Developer</h3>
              <p className='skillCard'>
                With expertise in both front-end and back-end technologies, MERN Stack and PHP I
                develop complete web applications from scratch. I ensure smooth
                integration between the user interface and server-side
                components, delivering a seamless and responsive experience for
                end-users.
              </p>
            </div>
          </div>
          <div className="clipCardContainer3">
            <div className="leftClip"></div>
            <div
              className={`leftCard card ${
                visibleCards.includes('3') ? 'visible' : ''
              }`}
              data-id="3"
            >
              <h3>Creative Speaking</h3>
              <p className='skillCard'>
              Skilled in effective communication, I excel at analyzing complex problems and translating them into clear, actionable insights. My ability to articulate ideas with precision ensures that diverse audiences can easily grasp intricate concepts. I adapt my approach to ensure maximum impact and resonance with the audience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="clipCardContainer4">
            <div className="rightClip"></div>
            <div
              className={`rightCard card ${
                visibleCards.includes('4') ? 'visible' : ''
              }`}
              data-id="4"
            >
              <h3>MERN Stack</h3>
              <p className='skillCard'>
                As a MERN stack developer, I work with MongoDB, Express.js,
                React, and Node.js to build high-performance web applications. I
                create responsive, real-time solutions that meet modern web
                development standards, ensuring smooth functionality across all
                devices.
              </p>
            </div>
          </div>
          <div className="clipCardContainer5">
            <div className="rightClip"></div>
            <div
              className={`rightCard card ${
                visibleCards.includes('5') ? 'visible' : ''
              }`}
              data-id="5"
            >
              <h3>Python Developer</h3>
              <p className='skillCard'>
                I utilize Python for building clean and efficient code,
                particularly for web development. I envision automation, data
                analysis, and machine learning. With Python's versatility, I
                develop solutions that automate repetitive tasks, analyze large
                datasets, and build scalable applications.
              </p>
            </div>
          </div>
          <div className="clipCardContainer6">
            <div className="rightClip"></div>
            <div
              className={`rightCard card ${
                visibleCards.includes('6') ? 'visible' : ''
              }`}
              data-id="6"
            >
              <h3>Tutor</h3>
              <p className='skillCard'>
                As a tutor, I take pride in helping students grasp complex
                technical concepts and guiding them to become proficient
                developers. I provide personalized learning experiences, making
                sure that learners develop the skills necessary to excel in
                their software development journeys.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
