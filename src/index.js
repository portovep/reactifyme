import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { App } from './App';
import { loadCareerProjects } from './projectsPage/actions/projectsActions';
import { loadExperiments } from './experimentsPage/actions/experimentsActions';
import { loadArticles } from './articlesPage/actions/articlesActions';
import { configurePageViewLogger } from './pageViewLogger';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const store = configureStore();
const pageViewLogger = configurePageViewLogger();

store.dispatch(loadExperiments());
store.dispatch(loadCareerProjects());
store.dispatch(loadArticles());

ReactDOM.render(
  <Provider store={store}>
    <App pageViewLogger={pageViewLogger} />
  </Provider>,
  document.getElementById('root')
);
