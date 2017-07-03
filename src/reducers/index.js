import {combineReducers} from 'redux';
import {projectsReducer} from '../projectsPage/reducers/projectsReducers';

const rootReducer = combineReducers({
  projects: projectsReducer,
});

export default rootReducer;