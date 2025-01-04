import React from 'react';
import ProjectDetails from './projectDetails';
import projectData from './projectData';

const airline = () => {
  const project = projectData.find((p) => p.name === 'PlutoAirs');
  return <ProjectDetails project={project} />;
};

export default airline;
