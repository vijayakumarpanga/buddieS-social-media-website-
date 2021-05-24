import { APIUrls } from "../helpers/urls";
import { getFormBody } from "../helpers/Utils";
import { AUTHENTICATE_USER, CLEAR_AUTH_STATE, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOG_OUT_USER } from "./actionType";

export const startLogin = () => {
  return { type: LOGIN_START };
};
export const loginSuccess = (user) => {
  return { type: LOGIN_SUCCESS, user };
};
export const loginFailed = (message) => {
  return { type: LOGIN_FAILED, error: message };
};
export const login = (email, password) => {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.login();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data in login : ", data);
        if (data.success) {
          localStorage.setItem('token',data.data.token)
          dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
};

export const authenticateUser=(user)=>{
  return{
    type : AUTHENTICATE_USER,
    user : user
  }
}
export const logoutUser=()=>{
  return{
    type : LOG_OUT_USER,
    
  }
}
export const clearAuthState=()=>{
  return{
    type : CLEAR_AUTH_STATE
  }
}
