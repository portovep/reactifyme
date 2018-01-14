import * as types from './actionTypes';
import { articlesServiceClientFake } from '../../clients/articlesClientFake';

const loadArticlesSuccess = articles => ({
  type: types.ARTICLES_PAGE_LOAD_ARTICLES_SUCCESS,
  articles
});

export const loadArticles = () => dispatch => {
  return articlesServiceClientFake
    .getArticles()
    .then(articles => {
      dispatch(loadArticlesSuccess(articles));
    })
    .catch(error => {
      throw error;
    });
};
