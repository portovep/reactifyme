import * as types from '../actions/actionTypes';

export const articlesReducer = (state = {}, action) => {

  switch(action.type) {
    case types.ARTICLES_PAGE_LOAD_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.articles
      };

    default:
      return state;
  }
};
