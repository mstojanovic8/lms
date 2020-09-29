import axios from 'axios';

import { CONST } from '../../../constants';

export const getScopes = () => {
  return axios.get(`${CONST.api.API_URL}${CONST.api.SCOPE_API_URL}`);
};
