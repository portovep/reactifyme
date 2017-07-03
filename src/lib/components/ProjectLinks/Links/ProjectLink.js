import React from 'react';

export const ProjectLink = ({link, children}) =>
  <a href={link}
     className="btn btn-default btn-sm"
     role="button"
     target="_blank"
     rel="noopener noreferrer">
    {children}
  </a>;
