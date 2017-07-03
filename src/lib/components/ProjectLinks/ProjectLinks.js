import React from 'react';
import {DemoLink} from './Links/DemoLink';
import {GithubLink} from './Links/GithubLink';
import {PaperLink} from './Links/PaperLink';
import {DownloadLink} from './Links/DownloadLink';


const displayLink = ({link, type}) => {
  switch (type) {
    case 'demo':
      return <DemoLink link={link}/>;
    case 'repo':
      return <GithubLink link={link}/>;
    case 'paper':
      return <PaperLink link={link}/>;
    case 'download':
      return <DownloadLink link={link}/>;
    default:
      console.error(`Link type not found: ${type}`)
  }
};

const styles = {
  marginRight: '5px'
};

const ProjectLink = (link, idx) =>
  <li key={idx}
      style={styles}>
    {displayLink(link)}
  </li>;

export const ProjectLinks = ({links}) =>
  <ul className="list-unstyled">
    {links.map(ProjectLink)}
  </ul>;
