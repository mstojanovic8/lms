import axios from 'axios';

import { CONST } from '../../../constants';

export const getSingleUser = (userId) =>  axios({
  method: 'get',
  url: `${CONST.api.API_URL}${CONST.api.USERS_API}/${userId}`
});
