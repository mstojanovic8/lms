import axios from 'axios';

import { CONST } from '../../../constants';

export const getSingleUser = () => {
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;
  return axios.get(`${CONST.api.API_URL}${CONST.api.USERS_API}`);
};
