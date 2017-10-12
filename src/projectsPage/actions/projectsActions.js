import * as types from './actionTypes';
import { projectsServiceClientFake } from '../../clients/projectsClientFake';


const loadCareerProjectsSuccess = (projects) => ({
  type: types.PROJECT_PAGE_LOAD_CAREER_PROJECTS_SUCCESS,
  projects
});

const loadPetProjectsSuccess = (projects) => ({
  type: types.PROJECT_PAGE_LOAD_PET_PROJECTS_SUCCESS,
  projects
});

const loadProjects = (getFunction, action) =>
  (dispatch) => {
    return getFunction().then((projects) => {
      dispatch(action(projects));
    }).catch(error => {
      throw(error);
    });
  };

export const loadCareerProjects = () =>
  loadProjects(projectsServiceClientFake.getCareerProjects,
    loadCareerProjectsSuccess);

export const loadPetProjects = () =>
  loadProjects(projectsServiceClientFake.getPetProjects,
    loadPetProjectsSuccess);
