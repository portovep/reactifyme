import React from 'react';
import { htmlForReact } from '../../helpers/helpers';
import { ProjectTeamSize } from '../index';
import { ProjectTechnologies } from '../index';
import { ProjectLinks } from '../index';

import './ProjectInfoPanel.css';

const styles = {
  paddingLeft: '1%'
};

export const ProjectInfoPanel = ({ project }) => (
  <div className="project-info-panel">
    <div
      className={
        project.links && project.links.length ? 'col-md-10' : 'col-md-12'
      }
      style={styles}
    >
      <div
        className="project-info-panel__project-description"
        dangerouslySetInnerHTML={htmlForReact(project.description)}
      />
      <dl className="dl-horizontal">
        <ProjectTeamSize size={project.teamSize} />
        <ProjectTechnologies technologies={project.technologies} />
      </dl>
    </div>

    {project.links && project.links.length ? (
      <div className="col-md-2 project-info-panel__links-container">
        <ProjectLinks links={project.links} />
      </div>
    ) : null}
  </div>
);
