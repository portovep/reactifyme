import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {App} from "./App";
import configureStore from './store/configureStore';
import {loadProjects} from './projectsPage/actions/projectsActions';
import {AppPageObject} from './App.page';
import {bio} from './data/bio';
import {projects} from './data/projects';


describe('Reactifyme', () => {
  let appPage;

  beforeEach(() => {
    const store = configureStore();
    store.dispatch(loadProjects(store.dispatch));

    const app = mount(
      <Provider store={store}>
        <App />
      </Provider>);

    appPage = new AppPageObject(app);
  });

  test('user visits homepage and navigates to projects page', async () => {
    expect.assertions(4);

    expect(appPage.getPersonalStatementTitle().text())
      .toEqual(bio.personalStatement.title);

    expect(appPage.getProjectsNavButton().text()).toEqual('Projects');
    await appPage.navigateToProjectsPage();

    expect(appPage.getProjects().length).toEqual(projects.length);
    expect(appPage.getProjects().first().prop('id')).toEqual(projects[0].name);
  });
});