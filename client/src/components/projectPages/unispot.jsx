import React from 'react';
import ProjectDetails from './projectDetails';
import projectData from './projectData';

const unispot = () => {
  const project = projectData.find((p) => p.name === 'UniSpot');
  return <ProjectDetails project={project} />;
};

export default unispot;
