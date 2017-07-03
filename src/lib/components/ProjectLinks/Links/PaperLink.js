import React from 'react';
import {ProjectLink} from './ProjectLink';


export const PaperLink = ({link}) =>
  <ProjectLink link={link}>
    <span className="glyphicon glyphicon-book"/> Paper
  </ProjectLink>;