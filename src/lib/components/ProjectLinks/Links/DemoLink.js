import React from 'react';
import { ProjectLink } from './ProjectLink';

export const DemoLink = ({ link }) => (
  <ProjectLink link={link}>
    <span className="glyphicon glyphicon-new-window" /> Demo
  </ProjectLink>
);
