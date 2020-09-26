export const getIsLoadingUsers = (state) => (
  state.entities.users.isLoading
);

export const getIsUsersInitialized = (state) => (
  state.entities.users.isInitialized
);

export const getUsersById = (state) => (
  state.entities.users.byId
);