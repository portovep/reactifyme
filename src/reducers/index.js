import {combineReducers} from 'redux';
import {projectsReducer} from '../projectsPage/reducers/projectsReducers';
import {experimentsReducer} from '../experimentsPage/reducers/experimentsReducers';

const rootReducer = combineReducers({
  projectsPage: projectsReducer,
  experimentsPage: experimentsReducer,
});

export default rootReducer;