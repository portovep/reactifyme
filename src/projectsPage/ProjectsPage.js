import React from 'react'
import {ProjectsList} from "../lib/components/index";

export const ProjectsPage = ({projects}) =>
  <div id="projects" className="row pv-main-column">
    <ProjectsList projects={projects}/>
  </div>;

export default ProjectsPage;