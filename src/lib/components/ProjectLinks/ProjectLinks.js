import React from 'react';
import { DemoLink } from './Links/DemoLink';
import { GithubLink } from './Links/GithubLink';
import { PaperLink } from './Links/PaperLink';
import { DownloadLink } from './Links/DownloadLink';

import './ProjectLinks.css';

const displayLink = ({ link, type }) => {
  switch (type) {
    case 'demo':
      return <DemoLink link={link} />;
    case 'repo':
      return <GithubLink link={link} />;
    case 'paper':
      return <PaperLink link={link} />;
    case 'download':
      return <DownloadLink link={link} />;
    default:
      console.error(`Link type not found: ${type}`);
  }
};

const ProjectLink = (link, idx) => <li key={idx}>{displayLink(link)}</li>;

export const ProjectLinks = ({ links }) => (
  <div className="project-links">
    <ul className="list-unstyled">{links.map(ProjectLink)}</ul>
  </div>
);
