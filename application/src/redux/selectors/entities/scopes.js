import { createSelector } from 'reselect';

export const getScopes = (state) => state.entities.scopes;

export const getScopesById = (state) => state.entities.scopes.byId;
export const getScopesByName = createSelector([getScopesById], (scopes) => {
  const scopesByName = {};
  Object.keys(scopes).forEach((name) => {
    const scope = scopes[name];
    scopesByName[scope.name] = [
      ...(scopesByName[scope.name] ? scopesByName[scope.name] : []),
      scope,
    ];
  });
  return scopesByName;
});

export const getIsLoadingScopes = createSelector([getScopes], (scopes) => {
  return scopes.isLoading;
});

export const getIsScopesInitialized = (state) =>
  state.entities.scopes.isInitialized;
