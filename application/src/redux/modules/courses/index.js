import { normalize } from 'normalizr';

import * as api from '../../api';
import * as schema from '../../actions/schema';

export const FETCH_COURSES = 'FETCH_COURSES';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

export const COURSES_ACTIONS = {
  init: FETCH_COURSES,
  success: FETCH_COURSES_SUCCESS,
  failure: FETCH_COURSES_FAILURE,
};

const fetchCoursesInit = () => ({
  type: COURSES_ACTIONS.init,
});

const fetchCoursesSuccess = (normalizedData) => {
  //console.log('========== fetchCoursesSuccess =========== ', normalizedData);

  return {
    type: COURSES_ACTIONS.success,
    payload: {
      normalized: normalizedData,
    },
  };
};

const fetchCoursesFailure = () => ({
  type: COURSES_ACTIONS.failure,
});

export function getCourses() {
  return (dispatch, getState) => {
    // const state = getState();
    // const resourceId = selectors.getUserResourceId(state);
    dispatch(fetchCoursesInit());
    return api.getCourses().then(
      (response) => {
        const normalized = normalize(response.data.data, schema.coursesArray);
        // const normalizedByType = normalize(
        //   response.data.data,
        //   schema.coursesByTypeArray
        // );
        dispatch(fetchCoursesSuccess(normalized));
        return response;
      },
      () => {
        dispatch(fetchCoursesFailure());
      }
    );
  };
}
