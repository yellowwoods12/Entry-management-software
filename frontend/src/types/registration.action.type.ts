// constants
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAILURE,
  USER_REGISTER_SUCCESS
} from "../constants";

export interface UserRegisterRequestAction {
  type: typeof USER_REGISTER_REQUEST;
}

export interface UserRegisterSuccessAction {
  type: typeof USER_REGISTER_SUCCESS;
}

export interface UserRegisterFailureAction {
  type: typeof USER_REGISTER_FAILURE;
  payload: any;
}

export type RegisterActionTypes =
  | UserRegisterRequestAction
  | UserRegisterSuccessAction
  | UserRegisterFailureAction;

  // auth state
export type RegisterState = {
  registering?: boolean;
  registered?: boolean;
  error?: any;
};
