import {
  SIGN_UP_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "../actions/actionType";

const signupInitialState = {
  isSignUpInProgress: false,
  error: null,
  user: {},
};

const signUp = (state = signupInitialState, action) => {
  switch (action.type) {
    case SIGN_UP_START: {
      return { ...state, isSignUpInProgress: true };
    }
    case SIGN_UP_SUCCESS: {
      return { ...state, isSignUpInProgress: false };
    }
    case SIGN_UP_FAILED: {
      return { ...state, isSignUpInProgress: false };
    }
    default:
      return state;
  }
};
export default signUp;
