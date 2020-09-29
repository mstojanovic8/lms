import * as entities from './boilerplate';

import { SCOPES_ACTIONS } from '../../modules/scopes';
import { CONST } from '../../../constants';

const coursesReducer = entities.entityReducer(
  CONST.entities.COURSES_ENTITY_KEY,
  SCOPES_ACTIONS
);

export default coursesReducer;
