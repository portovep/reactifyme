import {combineReducers} from 'redux';
import {projectsReducer} from '../projectsPage/reducers/projectsReducers';
import {experimentsReducer} from '../experimentsPage/reducers/experimentsReducers';
import {articlesReducer} from '../articlesPage/reducers/articlesReducers';

const rootReducer = combineReducers({
  projectsPage: projectsReducer,
  experimentsPage: experimentsReducer,
  articlesPage: articlesReducer,
});

export default rootReducer;