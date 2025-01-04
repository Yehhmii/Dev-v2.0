import React from 'react';
import ProjectDetails from './projectDetails';
import projectData from './projectData';

const music = () => {
  const project = projectData.find((p) => p.name === 'LaraBuzz');
  return <ProjectDetails project={project} />;
};

export default music;
