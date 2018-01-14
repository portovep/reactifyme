import { articles } from '../data/articles';

const RESPONSE_DELAY = 1;

const fakeGetData = data => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, RESPONSE_DELAY);
  });
};

export const articlesServiceClientFake = {
  getArticles: () => fakeGetData(articles)
};
