import {projects} from '../data/projects';
import {petProjects} from '../data/petProjects';


const RESPONSE_DELAY = 1;

const fakeGetData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, RESPONSE_DELAY)
  })
};

export const projectsServiceClientFake = {
  getCareerProjects: () => fakeGetData(projects),
  getPetProjects: () => fakeGetData(petProjects)
};
