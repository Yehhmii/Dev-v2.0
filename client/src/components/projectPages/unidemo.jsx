import React from 'react';
import ProjectDetails from './projectDetails';
import projectData from './projectData';

const unidemo = () => {
  const project = projectData.find((p) => p.name === 'UniDemo');
  return <ProjectDetails project={project} />;
};

export default unidemo;
