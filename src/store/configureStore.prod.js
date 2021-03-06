import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middleware = [thunk];

const configureStore = initialState => {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
};

export default configureStore;
