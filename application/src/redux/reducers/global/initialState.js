import { getTokenIfExists } from '../../../utils';

export const initialState = {
  hasToken: false,
  userId: null,
  isAuthLoading: false,
  error: ''
};

export function manageInitialState() {
  return {
    global: {
      ...initialState,
      hasToken: getTokenIfExists() !== null
    }
  };
}
