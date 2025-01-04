import React from 'react';
import ProjectDetails from './projectDetails';
import projectData from './projectData';

const iting = () => {
  const project = projectData.find((p) => p.name === 'ITing');
  return <ProjectDetails project={project} />;
};

export default iting;
