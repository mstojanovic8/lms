import { applyMiddleware, createStore } from 'redux';
// noinspection ES6UnusedImports
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';

const configureStore = (preLoadedState) => {
  const middleWares = [thunk];

  return createStore(
    rootReducer,
    preLoadedState,
    applyMiddleware(...middleWares)
  );
};

export default configureStore;
