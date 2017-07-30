import {projects} from '../data/projects';


const RESPONSE_DELAY = 1;

export default class ProjectsClientFake {

  static getProjects() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(projects);
      }, RESPONSE_DELAY)
    })
  }
}
