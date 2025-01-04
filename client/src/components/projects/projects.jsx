import React, { useState, useEffect } from 'react';
import './projects.css';
import { Link } from 'react-router-dom';
import project1 from '../../images/ITing1.png'
import project2 from '../../images/Music1.png'
import project3 from '../../images/flight1.png'
import project4 from '../../images/py2.png'
import project5 from '../../images/game1.png'


export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectData = [
    { id: 1, name: 'ITing', imgSrc: project1, link: '/projects/it-tracker' },
    { id: 2, name: 'LaraBuzz', imgSrc: project2, link: '/projects/music-app' },
    { id: 3, name: 'PlutoAirs', imgSrc: project3, link: '/projects/airline-reservation' },
    { id: 4, name: 'Python Challenge Game', imgSrc: project4, link: '/projects/python-game' },
    { id: 5, name: 'Anime Royal Rumble', imgSrc: project5, link: '/projects/royal-rumble' },
  ];

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [projectData.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="projects-section" className="carousel-container">
      <h2 className="carousel-title">My Projects</h2>
      <div className="carousel">
        <button className="carousel-button prev" onClick={handlePrev}>
          &#8592;
        </button>

        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projectData.map((project) => (
            <Link key={project.id} to={project.link} className="carousel-item">
              <img src={project.imgSrc} alt={project.name} />
              <h3>{project.name}</h3>
            </Link>
          ))}
        </div>

        <button className="carousel-button next" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
}
