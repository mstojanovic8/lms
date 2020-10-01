import axios from 'axios';

import { CONST } from '../../../constants';

export const getToken = ({ email, password }) => {
  return axios.post(`${CONST.api.API_URL}${CONST.api.AUTH_TOKEN_API}`, {
    email,
    password,
  });
};

export const logout = () => {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;
  axios.post(`${CONST.api.API_URL}${CONST.api.AUTH_LOGOUT_API}`);
  return location.reload();
};
