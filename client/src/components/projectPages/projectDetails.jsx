import React from 'react';
import './ProjectDetails.css';
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
            <div>
                <Projectbtn />
            </div>
        </div>
    </div>
  );
};

export default ProjectDetails;
