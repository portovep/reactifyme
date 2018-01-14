import React from 'react';
import { ProjectLink } from './ProjectLink';

export const GithubLink = ({ link }) => (
  <ProjectLink link={link}>
    <i className="fa fa-github fa-lg" /> Fork me
  </ProjectLink>
);
