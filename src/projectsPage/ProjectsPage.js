import React from 'react'
import {ProjectsList, Page} from "../lib/components/index";
import {fakeProjectsPageMetadata} from '../data/fakeProjectsPageMetadata';


const ProjectsPage = ({projects}) =>
  <Page id="projects-page"
        pageMetadata={fakeProjectsPageMetadata}>
    <ProjectsList projects={projects}/>
  </Page>;

export default ProjectsPage;