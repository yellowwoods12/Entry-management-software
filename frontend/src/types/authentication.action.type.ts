// constants
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from "../constants";

// types
import { User } from ".";

// action type for login request
export interface UserLoginRequestAction {
  type: typeof USER_LOGIN_REQUEST;
}

// action type for login success 
export interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  payload: User;
}

// action type for login failure
export interface UserLoginFailureAction {
  type: typeof USER_LOGIN_FAILURE;
  payload: any;
}

// action type for logout
export interface UserLogoutAction {
  type: typeof USER_LOGOUT;
}

// auth action types
export type AuthActionTypes =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginFailureAction
  | UserLogoutAction;

// auth state
export type AuthState = {
  loggedIn?: boolean;
  loggingIn?: boolean;
  user?: User;
  error?: any;
};
