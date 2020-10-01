import { createSelector } from 'reselect';
import { getUserId } from '../global';

export const getUsers = (state) => state.entities.users;

export const getUsersById = (state) => state.entities.users.byId;

export const getIsLoadingUsers = createSelector([getUsers], (users) => {
  return users.isLoading;
});

export const getIsUsersInitialized = createSelector([getUsers], (users) => {
  return users.isInitialized;
});

export const getCurrentUser = createSelector(
  [getUsersById, getUserId],
  (users, userId) => {
    return userId ? users[userId] : null;
  }
);
