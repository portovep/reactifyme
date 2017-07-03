import {fakeProjects} from '../data/fakeProjects';


const RESPONSE_DELAY = 1;

export default class ProjectsClientFake {

  static getProjects() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fakeProjects);
      }, RESPONSE_DELAY)
    })
  }
}
