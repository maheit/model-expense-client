export const LOG_IN = "LOGIN";
export const LOG_OUT = "LOGOUT";
export const SIGN_UP = "SIGNUP";
export const FETCH_USER = "FETCH_USER";

import { SystemState, UserState } from "./authTypes";

interface LoginAction {
  type: typeof LOG_IN;
  payload: any;
}

interface LogoutAction {
  type: typeof LOG_OUT;
}

interface SignupAction {
  type: SignupAction;
  payload: any;
}

interface FetchUser {
  type: typeof FETCH_USER;
  payload: any;
}

export type AuthActionType =
  | LoginAction
  | LogoutAction
  | SignupAction
  | FetchUser;
