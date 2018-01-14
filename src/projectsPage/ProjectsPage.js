import React from 'react'
import {ProjectsList, Page} from "../lib/components/index";
import {projectsPageMetadata} from '../data/projectsPageMetadata';


const ProjectsPage = ({projects}) =>
  <Page id="projects-page"
        pageMetadata={projectsPageMetadata}>
    <ProjectsList projects={projects}/>
  </Page>;

export default ProjectsPage;