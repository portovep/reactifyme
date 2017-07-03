import * as types from './actionTypes';
import projectsClient from '../../clients/projectsClientFake';


const loadProjectsSuccess = (projects) => ({
  type: types.PROJECT_PAGE_LOAD_PROJECTS_SUCCESS,
  projects
});

export const loadProjects = () =>
  (dispatch) => {
    return projectsClient.getProjects().then((projects) => {
      dispatch(loadProjectsSuccess(projects));
    }).catch(error => {
      throw(error);
    });
  };
