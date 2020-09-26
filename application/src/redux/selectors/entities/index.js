export * from './users';
export * from './courses';

export const getActionPayload = (action) => action.payload;

export const getNormalized = (action) => action.payload.normalized;

export const getNormalizedEntities = (action) =>
  action.payload.normalized.entities;

export const getNormalizedResult = (action) => action.payload.normalized.result;
