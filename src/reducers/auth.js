import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILED,
  AUTHENTICATE_USER,
  LOG_OUT_USER,
  CLEAR_AUTH_STATE,
} from "../actions/actionType";

const authIntialState = {
  user: {},
  isLoggedIn: false,
  isInProgress: false,
  error: null,
};
export default function auth(state = authIntialState, action) {
  switch (action.type) {
    case CLEAR_AUTH_STATE: {
        return{...state,error:null}
    }
    case LOGIN_START:
    case SIGN_UP_START: {
      return { ...state, isInProgress: true };
    }
    case LOGIN_SUCCESS:
      case SIGN_UP_SUCCESS: {
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
        isInProgress: false,
        error: null,
      };
    }
    case LOGIN_FAILED:
      case SIGN_UP_FAILED :{
      return { ...state, isInProgress: false, error: action.error };
    }
    case AUTHENTICATE_USER:{
      return {...state, 
        isLoggedIn:true,
        user:action.user
      }
    }
    case LOG_OUT_USER : {
      return {...state,isLoggedIn:false,user:{}}
    }
    default: {
      return state;
    }
  }
}
