import axios from 'axios';

import { CONST } from '../../../constants';

export const getCourses = ({ viaResource, viaResourceId }) => {
  const params = {
    viaResource,
    viaResourceId
  };
  return axios.get(`${CONST.api.API_URL}${CONST.api.COURSE_API_URL}`, {
    params
  });
};
