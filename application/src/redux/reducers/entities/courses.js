import * as entities from './boilerplate';

import { COURSES_ACTIONS } from '../../modules/courses';
import { CONST } from '../../../constants';

const coursesReducer = entities.entityReducer(
  CONST.entities.COURSES_ENTITY_KEY,
  COURSES_ACTIONS
);

export default coursesReducer;
