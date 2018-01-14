import * as types from './actionTypes';
import { projectsServiceClientFake } from '../../clients/projectsClientFake';

const loadCareerProjectsSuccess = projects => ({
  type: types.PROJECT_PAGE_LOAD_CAREER_PROJECTS_SUCCESS,
  projects
});

export const loadCareerProjects = () => dispatch => {
  return projectsServiceClientFake
    .getCareerProjects()
    .then(projects => {
      dispatch(loadCareerProjectsSuccess(projects));
    })
    .catch(error => {
      throw error;
    });
};
