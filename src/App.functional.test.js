import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { App } from "./App";
import configureStore from './store/configureStore';
import { loadCareerProjects } from './projectsPage/actions/projectsActions';
import { loadExperiments } from './experimentsPage/actions/experimentsActions';
import { AppPageObject } from './App.page';
import { bio } from './data/bio';
import { projects } from './data/projects';
import { experiments } from './data/experiments';
import { articles } from './data/articles';
import { loadArticles } from './articlesPage/actions/articlesActions';

describe('Reactifyme', () => {
  let appPage;

  beforeEach(() => {
    const store = configureStore();
    store.dispatch(loadCareerProjects());
    store.dispatch(loadExperiments());
    store.dispatch(loadArticles());

    const app = mount(
      <Provider store={store}>
        <App />
      </Provider>);

    appPage = new AppPageObject(app);
  });

  test('user visits homepage and navigates to projects, experiments and articles page', async () => {
    expect(appPage.getPersonalStatementTitle().text()).toEqual(bio.personalStatement.title);

    expect(appPage.getProjectsNavButton().text()).toEqual('Projects');
    await appPage.navigateToProjectsPage();

    expect(appPage.getProjects().length).toEqual(projects.length);
    expect(appPage.getProjects().first().prop('id')).toEqual(projects[0].name);

    await appPage.navigateToExperimentsPage();

    expect(appPage.getProjects().length).toEqual(experiments.length);
    expect(appPage.getProjects().first().prop('id')).toEqual(experiments[0].name);

    await appPage.navigateToArticlesPage();

    expect(appPage.getArticles().length).toEqual(articles.length);
    expect(appPage.getArticles().first().childAt(0).text()).toEqual(articles[0].title);
  });
});