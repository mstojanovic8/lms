import axios from 'axios';

import { CONST } from '../../../constants';

export const getCourses = () => {
  return axios.get(`${CONST.api.API_URL}${CONST.api.COURSE_API_URL}`);
};
