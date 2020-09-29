import * as api from '../../api';

const FETCH_TOKEN = 'FETCH_TOKEN';
const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS';
const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE';
const FETCH_TOKEN_FAILURE_ERROR_RESET = 'FETCH_TOKEN_FAILURE_ERROR_RESET';

export const TOKEN_ACTIONS = {
  init: FETCH_TOKEN,
  success: FETCH_TOKEN_SUCCESS,
  failure: FETCH_TOKEN_FAILURE,
  resetError: FETCH_TOKEN_FAILURE_ERROR_RESET,
};

const fetchTokenInit = () => ({
  type: TOKEN_ACTIONS.init,
});

const fetchTokenSuccess = () => ({
  type: TOKEN_ACTIONS.success,
});

const fetchTokenFailure = (errorMessage) => ({
  type: TOKEN_ACTIONS.failure,
  payload: {
    errorMessage,
  },
});

const fetchTokenFailureErrorReset = () => ({
  type: TOKEN_ACTIONS.resetError,
});

export function getToken({ email, password }) {
  return (dispatch) => {
    dispatch(fetchTokenInit());
    return api.getToken({ email, password }).then(
      (response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('expires', response.data.expires_in);
        dispatch(fetchTokenSuccess());
        return Promise.resolve();
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

export function resetLoginError() {
  return (dispatch) => {
    dispatch(fetchTokenFailureErrorReset());
  };
}
