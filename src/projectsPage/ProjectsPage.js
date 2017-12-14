import React from 'react'
import {Helmet} from 'react-helmet';
import {ProjectsList} from "../lib/components/index";
import {fakeProjectsPageMetadata} from '../data/fakeProjectsPageMetadata';

import './ProjectsPage.css';

const PageMetadata =
  <Helmet>
    <title>{fakeProjectsPageMetadata.title}</title>
    <meta name="description"
          content={fakeProjectsPageMetadata.description} />
  </Helmet>;

const ProjectsPage = ({projects}) =>
  <div className="row projects-page">
    {PageMetadata}
    <ProjectsList projects={projects}/>
  </div>;

export default ProjectsPage;