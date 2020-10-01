import { createSelector } from 'reselect';

export const getGlobalState = (state) => state.global;

export const getHasToken = createSelector([getGlobalState], (globalState) => {
  return globalState.hasToken;
});

export const getIsAuthLoading = createSelector(
  [getGlobalState],
  (globalState) => {
    return globalState.isAuthLoading;
  }
);

export const getError = createSelector([getGlobalState], (globalState) => {
  return globalState.error;
});

export const getUserId = createSelector([getGlobalState], (globalState) => {
  return globalState.userId;
});
