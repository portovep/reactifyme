import {BasePageObject} from './lib/helpers/BasePageObject.page';

class AppPageObject extends BasePageObject {

  constructor(wrapper) {
    super(wrapper);
    this.wrapper = wrapper;
  }

  personalStatementTitle() {
    return this.wrapper.find('.personal-statement__title');
  }

  projectsNavButton() {
    return this.wrapper.find('#projects-nav-button');
  }

  clickProjectsNavButton() {
    return this._clickOnButton('#projects-nav-button');
  }

  projectDetails() {
    return this.wrapper.find('.project-details');
  }
}

export {AppPageObject};