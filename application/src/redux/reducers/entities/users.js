import * as entities from './boilerplate';

import { USERS_ACTIONS } from '../../modules/users';
import { CONST } from '../../../constants';

const usersReducer = entities.entityReducer(CONST.entities.USERS_ENTITY_KEY, USERS_ACTIONS);

export default usersReducer;
