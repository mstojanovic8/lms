import axios from 'axios';

import { CONST } from '../../../constants';

export const getScopes = () => {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;
  let response = axios.get(`${CONST.api.API_URL}${CONST.api.SCOPE_API_URL}`);
  return response;
};
