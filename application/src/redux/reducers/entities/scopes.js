import * as entities from './boilerplate';

import { SCOPES_ACTIONS } from '../../modules/scopes';
import { CONST } from '../../../constants';

const scopesReducer = entities.entityReducer(
  CONST.entities.SCOPES_ENTITY_KEY,
  SCOPES_ACTIONS
);

export default scopesReducer;
