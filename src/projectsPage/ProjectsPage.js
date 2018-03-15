import React from 'react';
import { ProjectsList, Page } from '../lib/components/index';
import { projectsPageMetadata } from '../data/projectsPageMetadata';

const ProjectsPage = ({ projects }) => (
  <Page id="projects-page" pageMetadata={projectsPageMetadata}>
    <div className="col-md-12">
      <ProjectsList projects={projects} />
    </div>
  </Page>
);

export default ProjectsPage;
