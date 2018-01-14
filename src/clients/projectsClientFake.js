import { projects } from '../data/projects';
import { experiments } from '../data/experiments';

const RESPONSE_DELAY = 1;

const fakeGetData = data => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, RESPONSE_DELAY);
  });
};

export const projectsServiceClientFake = {
  getCareerProjects: () => fakeGetData(projects),
  getExperiments: () => fakeGetData(experiments)
};
