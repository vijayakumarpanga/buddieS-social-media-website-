import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../actions/actionType";

const authIntialState = {
  user: {},
  isLoggedIn: false,
  isInProgress: false,
  error: null,
};
export default function auth(state = authIntialState, action) {
  switch (action.type) {
    case LOGIN_START: {
      return { ...state, isInProgress: true };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        isInProgress: false,
        error: null,
      };
    }
    case LOGIN_FAILED: {
      return { ...state, isInProgress: false, error: action.error };
    }
    default: {
      return state;
    }
  }
}
