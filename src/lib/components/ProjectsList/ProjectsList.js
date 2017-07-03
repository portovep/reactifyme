import React from 'react';
import {ProjectDetails} from '../index';

const renderProjectDetails = (project) =>
  <li key={project.id}>
    <ProjectDetails project={project}/>
  </li>;

export const ProjectsList = ({projects}) =>
  <ul className="list-unstyled">
    {projects.map(renderProjectDetails)}
  </ul>;