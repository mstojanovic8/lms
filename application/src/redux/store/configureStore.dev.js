import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';

const devToolsOptions = {
  name: 'Captain Dashboards FishingBooker',
  trace: true,
  shouldCatchErrors: true
};

const configureStore = (preLoadedState) => {
  const middleWares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middleWares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(devToolsOptions)(
    ...enhancers
  );
  return createStore(
    rootReducer,
    preLoadedState,
    composedEnhancers
  );
};

export default configureStore;
