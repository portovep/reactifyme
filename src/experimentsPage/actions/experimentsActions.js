import * as types from './actionTypes';
import { projectsServiceClientFake } from '../../clients/projectsClientFake';

const loadExperimentsSuccess = experiments => ({
  type: types.EXERIMENTS_PAGE_LOAD_EXPERIMENTS_SUCCESS,
  experiments
});

export const loadExperiments = () => dispatch => {
  return projectsServiceClientFake
    .getExperiments()
    .then(experiments => {
      dispatch(loadExperimentsSuccess(experiments));
    })
    .catch(error => {
      throw error;
    });
};
