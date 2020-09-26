import { combineReducers } from 'redux';
import coursesReducer from './courses';
import usersReducer from './users';

const entities = combineReducers({
  users: usersReducer,
  courses: coursesReducer
});

export default entities;
