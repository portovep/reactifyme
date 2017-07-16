import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {App} from "./App";
import configureStore from './store/configureStore';
import {loadProjects} from './projectsPage/actions/projectsActions';
import {AppPageObject} from './App.page';
import {fakeBio} from './data/fakeBio';
import {fakeProjects} from './data/fakeProjects';


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

    expect(appPage.personalStatementTitle().text())
      .toEqual(fakeBio.personalStatement.title);

    expect(appPage.projectsNavButton().text()).toEqual('Projects');
    await appPage.clickProjectsNavButton();

    expect(appPage.projectDetails().first().prop('id')).toEqual(fakeProjects[0].name);
    expect(appPage.projectDetails().last().prop('id')).toEqual(fakeProjects[1].name);
  });
});