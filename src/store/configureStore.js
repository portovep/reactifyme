import configureStoreDev from './configureStore.dev';
import configureStoreProd from './configureStore.prod';

const configureStore = initialState => {
  if (process.env.NODE_ENV !== 'production') {
    return configureStoreDev(initialState);
  }
  return configureStoreProd(initialState);
};

export default configureStore;
