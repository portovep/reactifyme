import React, {Component} from 'react'
import {Helmet} from 'react-helmet';
import {ProjectsList} from "../lib/components/index";
import {fakeProjectsPageMetadata} from '../data/fakeProjectsPageMetadata';

import './ProjectsPage.css';
import {petProjects} from '../data/petProjects';

const PageMetadata =
  <Helmet>
    <title>{fakeProjectsPageMetadata.title}</title>
    <meta name="description"
          content={fakeProjectsPageMetadata.description} />
  </Helmet>;

const DISPLAY_MODES = {
  PET_PROJECTS: 'PET_PROJECTS',
  CAREER_PROJECTS: 'CAREER_PROJECTS'
};

class ProjectsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayMode: DISPLAY_MODES.CAREER_PROJECTS,
    };

    this.handlePetProjectsClick = this.handlePetProjectsClick.bind(this);
    this.handleCareerProjectsClick = this.handleCareerProjectsClick.bind(this);
  }

  handlePetProjectsClick() {
    this.setState({displayMode: DISPLAY_MODES.PET_PROJECTS})
  }

  handleCareerProjectsClick() {
    this.setState({displayMode: DISPLAY_MODES.CAREER_PROJECTS})
  }

  render() {
    const displayMode = this.state.displayMode;
    const careerProjects = this.props.projects;
    const projectsToDisplay =
      displayMode === DISPLAY_MODES.CAREER_PROJECTS ? careerProjects : petProjects;

    return (
      <div className="row projects-page">
        {PageMetadata}
        <div>
          <button className="btn"
                  onClick={this.handleCareerProjectsClick}>
            Career projects
          </button>
          <button className="btn"
                  onClick={this.handlePetProjectsClick}>
            Pet projects
          </button>
        </div>
          <ProjectsList projects={projectsToDisplay}/>
      </div>
    )
  }

}

export default ProjectsPage;