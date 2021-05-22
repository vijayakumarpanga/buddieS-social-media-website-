import { APIUrls } from "../helpers/urls";
import { getFormBody } from "../helpers/Utils";
import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from "./actionType";

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
        content: "application-form-url-encoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data in login : ", data);
        if (data.success) {
          dispatch(loginSuccess(data.user));
        }
        dispatch(loginFailed(data.message));
      });
  };
};
