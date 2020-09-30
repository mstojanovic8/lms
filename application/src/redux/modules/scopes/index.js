import { normalize } from 'normalizr';

import * as api from '../../api';
import * as schema from '../../actions/schema';

export const FETCH_SCOPES = 'FETCH_SCOPES';
export const FETCH_SCOPES_SUCCESS = 'FETCH_SCOPES_SUCCESS';
export const FETCH_SCOPES_FAILURE = 'FETCH_SCOPES_FAILURE';

export const SCOPES_ACTIONS = {
  init: FETCH_SCOPES,
  success: FETCH_SCOPES_SUCCESS,
  failure: FETCH_SCOPES_FAILURE,
};

const fetchScopesInit = () => ({
  type: SCOPES_ACTIONS.init,
});

const fetchScopesSuccess = (normalizedData) => {
  return {
    type: SCOPES_ACTIONS.success,
    payload: {
      normalized: normalizedData,
    },
  };
};

const fetchScopesFailure = () => ({
  type: SCOPES_ACTIONS.failure,
});

export function getScopes() {
  return (dispatch, getState) => {
    // const state = getState();
    // const resourceId = selectors.getUserResourceId(state);
    dispatch(fetchScopesInit());
    return api.getScopes().then(
      (response) => {
        const normalized = normalize(response.data.data, schema.scopesArray);
        // const normalizedByType = normalize(
        //   response.data.data,
        //   schema.coursesByTypeArray
        // );
        dispatch(fetchScopesSuccess(normalized));
        return response;
      },
      () => {
        dispatch(fetchScopesFailure());
      }
    );
  };
}
