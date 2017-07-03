import React from 'react';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';
import {AppLayout} from './lib/components/index';
import HomePage from './homePage/HomePage';
import ProjectsPageContainer from './projectsPage/ProjectsPageContainer';
import NotFoundPage from './notFoundPage/NotFoundPage';


export const App = () =>
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={HomePage}/>
      <Route path="/projects" component={ProjectsPageContainer}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>;