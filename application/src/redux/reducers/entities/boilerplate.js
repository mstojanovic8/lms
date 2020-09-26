import merge from 'lodash/merge';
import { combineReducers } from 'redux';

import * as selectors from '../../selectors';

const byIdReducer = (entityName) => (state = {}, action) => {
  if (
    selectors.getActionPayload(action)
    && selectors.getNormalized(action)
    && selectors.getNormalizedEntities(action)
    && selectors.getNormalizedEntities(action)[entityName]
  ) {
    let oldData = state;
    const newData = selectors.getNormalizedEntities(action)[entityName];
    if (action.shouldDestroyData) {
      oldData = {};
    }
    return merge({}, oldData, newData);
  }
  return state;
};

const isLoadingReducer = (actions) => (
  state = false,
  action
) => {
  switch (action.type) {
    case actions.init:
      return true;
    case actions.success:
    case actions.failure:
      return false;
    default:
      return state;
  }
};

const allIdsReducer = (entityName) => (state = [], action) => {
  if (
    selectors.getActionPayload(action)
    && selectors.getNormalized(action)
    && selectors.getNormalizedEntities(action)
    && selectors.getNormalizedEntities(action)[entityName]
  ) {
    let oldData = state;

    if (action.shouldDestroyData) {
      oldData = [];
    }

    return [
      ...new Set([
        ...oldData,
        ...Object.keys(selectors.getNormalizedEntities(action)[entityName])
      ])
    ];
  }
  return state;
};

export const initializedReducer = (actions) => (
  state = false,
  action
) => {
  if (action.type === actions.success) {
    return true;
  }
  return state;
};

const entityReducer = (entity, actions) => combineReducers({
  byId: byIdReducer(entity),
  allIds: allIdsReducer(entity),
  isLoading: isLoadingReducer(actions),
  isInitialized: initializedReducer(actions)
});

export {
  entityReducer,
  isLoadingReducer,
  byIdReducer,
  allIdsReducer
};
