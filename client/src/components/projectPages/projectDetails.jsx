import React from 'react';
import './projectDetails.css';
import Projectbtn from './projectbtn.jsx'
import Nav from '../nav/nav.jsx';

const ProjectDetails = ({ project }) => {
  return (
    <div>
        <div className='backgroundNav'>
            <Nav />
        </div>
        <div className="project-details-container">
            <h1>{project.name}</h1>
            <div className="project-images">
                {project.imgSrc.map((src, index) => (
                <img key={index} src={src} alt={`${project.name} ${index + 1}`} />
                ))}
            </div>
            <p>{project.description}</p>
            <h2> <a href={project.url}>Go Live✔</a></h2>
            <div>
                <Projectbtn />
            </div>
        </div>
    </div>
  );
};

export default ProjectDetails;
