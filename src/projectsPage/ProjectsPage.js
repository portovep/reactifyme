import React from 'react'
import {ProjectsList} from "../lib/components/index";

import './ProjectsPage.css';

export const ProjectsPage = ({projects}) =>
  <div className="row projects-page">
    <ProjectsList projects={projects}/>
  </div>;

export default ProjectsPage;