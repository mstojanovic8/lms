import { normalize } from 'normalizr';

import * as api from '../../api';
import * as schema from '../../actions/schema';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

export const USERS_ACTIONS = {
  init: FETCH_USERS,
  success: FETCH_USERS_SUCCESS,
  failure: FETCH_USERS_FAILURE,
};

const fetchUsersInit = () => ({
  type: USERS_ACTIONS.init,
});

const fetchUsersSuccess = (normalizedData) => ({
  type: USERS_ACTIONS.success,
  payload: {
    normalized: normalizedData,
  },
});

const fetchUsersFailure = () => ({
  type: USERS_ACTIONS.failure,
});

export function getUsersInfo() {
  return (dispatch) => {
    dispatch(fetchUsersInit());
    return api.getUsersInfo().then(
      (response) => {
        const normalized = normalize(response.data, schema.userSchema);
        dispatch(fetchUsersSuccess(normalized));
        return response;
      },
      () => {
        dispatch(fetchUsersFailure());
      }
    );
  };
}
