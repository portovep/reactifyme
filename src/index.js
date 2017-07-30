import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore'
import {App} from './App';
import {loadProjects} from './projectsPage/actions/projectsActions';
import {configurePageViewLogger} from './pageViewLogger';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const store = configureStore();
const pageViewLogger = configurePageViewLogger();

store.dispatch(loadProjects(store.dispatch));

ReactDOM.render(
  <Provider store={store}>
    <App pageViewLogger={pageViewLogger}/>
  </Provider>,
  document.getElementById('root')
);
