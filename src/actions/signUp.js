import { APIUrls } from "../helpers/urls";
import { getFormBody } from "../helpers/Utils";
import { SIGN_UP_FAILED, SIGN_UP_START, SIGN_UP_SUCCESS } from "./actionType";
export const signUpStart = () => {
  return { type: SIGN_UP_START };
};
export const signUpFailed = (message) => {
  return { type: SIGN_UP_FAILED, error : message  };
};
export const SignUpSuccess = (user) => {
  return {
    type: SIGN_UP_SUCCESS,
    user: user,
  };
};
export const signUp = (name, email, password, confirmPassword) => {
  return (dispatch) => {
    dispatch(signUpStart());
    const url = APIUrls.signUp();
    console.log("SingUp : ", url);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({
        email,
        password,
        confirm_password: confirmPassword,
        name,
      }),
    })
      .then((response) => response.json)
      .then((data) => {
        console.log("SingUp : ", data);
        if (data.success) {
          console.log("SingUp : ", data);
          localStorage.setItem('token',data.token)
          dispatch(SignUpSuccess(data.data.user));
          return ;
        }
        dispatch(signUpFailed(data.message));
      });
  };
};
