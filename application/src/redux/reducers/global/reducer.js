import { TOKEN_ACTIONS } from '../../modules/auth';
import { initialState } from './initialState';

export default function global(state = initialState, action) {
  switch (action.type) {
    case TOKEN_ACTIONS.init: {
      return {
        ...state,
        isAuthLoading: true
      };
    }
    case TOKEN_ACTIONS.success: {
      return {
        ...state,
        isAuthLoading: false,
        hasToken: true
      };
    }
    case TOKEN_ACTIONS.failure: {
      return {
        ...state,
        isAuthLoading: false,
        error: action.payload.errorMessage
      };
    }
    default: {
      return state;
    }
  }
}
