import { combineReducers } from 'redux';
import entities from './entities';
import global from './global';

export const rootReducer = combineReducers({
  global,
  entities,
});
