import React from 'react';
import {htmlForReact} from '../../helpers/helpers';
import {ProjectTeamSize} from '../index';
import {ProjectTechnologies} from '../index';
import {ProjectLinks} from '../index';

import './ProjectInfoPanel.css';

const styles = {
  paddingLeft: "1%",
};

export const ProjectInfoPanel = ({project}) =>
  <div>
    <div className="col-md-10"
         style={styles}>
      <div dangerouslySetInnerHTML={htmlForReact(project.description)}/>
      <dl className="dl-horizontal">
        <ProjectTeamSize size={project.teamSize} />
        <ProjectTechnologies technologies={project.technologies} />
      </dl>
    </div>

    { project.links && project.links.length ?
      <div className="col-md-2 project-info-panel__links-container">
        <ProjectLinks links={project.links}/>
      </div> : null }
  </div>;