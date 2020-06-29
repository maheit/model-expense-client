import { SystemState } from "../types/authTypes";
import {
  AuthActionType,
  LOG_IN,
  LOG_OUT,
  SIGN_UP,
  FETCH_USER,
} from "../types/authActionTypes";

const initialState: SystemState = {
  loggedIn: false,
  sessionId: "",
  user: {
    userName: "",
    email: "",
    userId: "",
  },
};

const Auth = (state = initialState, action: AuthActionType) => {
  switch (action.type) {
    case FETCH_USER: {
      return {
        ...state,
        loggedIn: !!(action.payload && action.payload.googleId) || false,
        user: action.payload,
      };
    }
    case LOG_IN: {
      return {
        ...state,
        loggedIn: true,
        sessionId: action.payload.sessionId,
        user: action.payload.user,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        loggedIn: false,
        sessionId: "",
        user: null,
      };
    }
    default:
      return state;
  }
};

export default Auth;
