import React from 'react';
import { ProjectLink } from './ProjectLink';

export const DownloadLink = ({ link }) => (
  <ProjectLink link={link}>
    <span className="glyphicon glyphicon-floppy-save" /> Download
  </ProjectLink>
);
