import { combineReducers } from 'redux';
import usersReducer from './users';
import coursesReducer from './courses';
import scopesReducer from './scopes';

const entities = combineReducers({
  users: usersReducer,
  courses: coursesReducer,
  scopes: scopesReducer,
});

export default entities;
