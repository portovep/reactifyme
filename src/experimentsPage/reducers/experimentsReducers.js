import * as types from '../actions/actionTypes';

export const experimentsReducer = (state = {}, action) => {

  switch(action.type) {
    case types.EXERIMENTS_PAGE_LOAD_EXPERIMENTS_SUCCESS:
      return {
        ...state,
        experiments: action.experiments
      };

    default:
      return state;
  }
};
