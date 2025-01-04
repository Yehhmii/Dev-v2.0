import React from 'react';
import ProjectDetails from './projectDetails';
import projectData from './projectData';

const game = () => {
  const project = projectData.find((p) => p.name === 'Anime Royal Rumble');
  return <ProjectDetails project={project} />;
};

export default game;
