import {BasePageObject} from './lib/helpers/BasePageObject.page';

class AppPageObject extends BasePageObject {

  constructor(wrapper) {
    super(wrapper);
    this.wrapper = wrapper;
  }

  getPersonalStatementTitle() {
    return this.wrapper.find('.personal-statement__title');
  }

  getProjectsNavButton() {
    return this.wrapper.find('#projects-nav-button');
  }

  navigateToProjectsPage() {
    return this._clickOnButton('#projects-nav-button');
  }

  navigateToExperimentsPage() {
    return this._clickOnButton('#experiments-nav-button');
  }

  navigateToArticlesPage() {
    return this._clickOnButton('#articles-nav-button');
  }

  getProjects() {
    return this.wrapper.find('.project-details');
  }

  getArticles() {
    return this.wrapper.find('.article-details');
  }
}

export {AppPageObject};