import {
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  FETCH_USER,
  AuthActionType,
} from "../types/authActionTypes";
import { SystemState, UserState } from "../types/authTypes";

import axios from "axios";

export function Login(user: UserState): AuthActionType {
  return {
    type: LOG_IN,
    payload: {
      sessionId: "",
      user,
    },
  };
}

export const fetchUser = () => {
  return async (dispatch: any) => {
    const user = await axios.get("/api/auth/getUser");
    Promise.resolve(
      dispatch({
        type: FETCH_USER,
        payload: user.data,
      })
    );
  };
};

export function Logout(): AuthActionType {
  return {
    type: LOG_OUT,
  };
}

//   export const userLogout = () => {
//     return function(dispatch) {
//       axios.get("/api/logout").then(res => {
//         if (res.data.status && res.data.status === "logout") {
//           dispatch({ type: Constants.actions.USER_LOGOUT });
//         }
//       });
//     };
//   };
