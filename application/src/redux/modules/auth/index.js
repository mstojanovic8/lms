import { normalize } from 'normalizr';

import * as api from '../../api';

export const FETCH_TOKEN = 'FETCH_TOKEN';
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';
export const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE';

export const TOKEN_ACTIONS = {
  init: FETCH_TOKEN,
  success: FETCH_TOKEN_SUCCESS,
  failure: FETCH_TOKEN_FAILURE
};

const fetchTokenInit = () => ({
  type: TOKEN_ACTIONS.init
});

const fetchTokenSuccess = () => ({
  type: TOKEN_ACTIONS.success
});

const fetchTokenFailure = (errorMessage) => ({
  type: TOKEN_ACTIONS.failure,
  payload: {
    errorMessage
  }
});

export function getToken({ email, password }) {
  return (dispatch) => {
    dispatch(fetchTokenInit());
    return api.getToken({ email, password }).then(
      (response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('expires', response.data.expires_in);
        dispatch(fetchTokenSuccess());
      },
      (error) => {
        dispatch(fetchTokenFailure('Invalid email/password'));
      }
    );
  };
}

export function logout() {
  return api.logout();
}
