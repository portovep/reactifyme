import React from 'react';
import {TabsContainer} from '../index';
import {Tab} from '../index';
import {ProjectInfoPanel} from '../index';
import {ProjectImagesPanel} from '../index';
import {ProjectHeader} from '../index';

import './ProjectDetails.css';

const projectHasImages = (project) => project.images && project.images.length > 0;

export const ProjectDetails = ({project}) => {

  const infoTabId = `#info-${project.name.toLowerCase()}`;
  const imagesTabId = `#images-${project.name.toLowerCase()}`;

  const tabs = [
    {
      id: infoTabId,
      label: 'Info'
    }
  ];

  if (projectHasImages(project)) {
    tabs.push({
      id: imagesTabId,
      label: 'Media'
    });
  }

  return (
    <div id={project.name} className="project-details">
      <ProjectHeader project={project}/>
      <div className="row">
        <div className="col-md-12">

          <TabsContainer tabConfig={tabs}>
            <Tab id={infoTabId}>
              <ProjectInfoPanel project={project}/>
            </Tab>
            { projectHasImages(project) &&
            <Tab id={imagesTabId}>
              <ProjectImagesPanel project={project}/>
            </Tab>
            }
          </TabsContainer>

        </div>
      </div>
    </div>
  );
};
