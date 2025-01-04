import React from 'react';
import ProjectDetails from './projectDetails';
import projectData from './projectData';

const python = () => {
  const project = projectData.find((p) => p.name === 'Python Challenge Game');
  return <ProjectDetails project={project} />;
};

export default python;
