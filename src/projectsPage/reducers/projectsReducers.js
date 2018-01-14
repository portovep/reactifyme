import * as types from '../actions/actionTypes';

export const projectsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.PROJECT_PAGE_LOAD_CAREER_PROJECTS_SUCCESS:
      return {
        ...state,
        careerProjects: action.projects
      };

    default:
      return state;
  }
};
