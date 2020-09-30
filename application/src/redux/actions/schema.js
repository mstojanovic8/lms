import { schema } from 'normalizr';
import { CONST } from '../../constants';

export const userSchema = new schema.Entity(
  CONST.entities.USERS_ENTITY_KEY,
  {},
  {}
);

export const courseSchema = new schema.Entity(
  CONST.entities.COURSES_ENTITY_KEY,
  {},
  { idAttribute: (entity) => entity.id }
);

export const coursesArray = new schema.Array(courseSchema);

export const courseByType = new schema.Entity(
  CONST.entities.COURSES_ENTITY_KEY,
  {},
  { idAttribute: (entity) => entity.typeId }
);

export const coursesByTypeArray = new schema.Array(courseByType);

export const scopeSchema = new schema.Entity(
  CONST.entities.SCOPES_ENTITY_KEY,
  {},
  { idAttribute: (entity) => entity.id }
);

export const scopesArray = new schema.Array(scopeSchema);

export const scopeByName = new schema.Entity(
  CONST.entities.SCOPES_ENTITY_KEY,
  {},
  { idAttribute: (entity) => entity.name }
);

export const scopesByNameArray = new schema.Array(scopeByName);
