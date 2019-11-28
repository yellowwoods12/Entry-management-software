// constants
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from "../constants";

// services
import { userService } from "../services";

// helpers
import { history } from "../helpers";
import { renderLoginFrom } from "../components/pages/LoginSignup";
// types
import { Dispatch } from "redux";
import { AppActions, User } from "../types";
import { AppState } from "../reducers";

import { SignupForm } from "../components/SignupForm";
// user login action
const login = ({
  email,
  name,
  phone,
  remember = false,
  checkout
}: {
  email: string;
  name: string;
  phone: string;
  remember?: boolean;
  checkout: string;
}) => {
  return (dispatch: Dispatch<AppActions>, useState: () => AppState) => {
    // logging in
    dispatch(request());

    // send login request to server
    userService.login({ email, name, phone }).then(
      user => {
        // login was successful
        dispatch(success(user));
        history.push("/dashboard");
      },
      error => {
        // login failed
        alert(error);
        console.log(error);
        dispatch(failure(error));
        
      }
    );

    function request(): AppActions {
      return { type: USER_LOGIN_REQUEST };
    }
    function success(user: User): AppActions {
      return { type: USER_LOGIN_SUCCESS, payload: user };
    }
    function failure(error: any): AppActions {
      return { type: USER_LOGIN_FAILURE, payload: error };
    }
  };
};

// user register action
const register = ({
  fullName,
  Hostemail,
  Hostphone
}: {
  fullName: string;
  Hostemail: string;
  Hostphone: string;
}) => {
  return (dispatch: Dispatch<AppActions>, useState: () => AppState) => {
    // logging in
    dispatch(request());

    // send login request to server
    userService.register({ fullName, Hostemail, Hostphone }).then(
      () => {
        // register was successful
        dispatch(success());
        
      },
      error => {
        // register failed
        alert(error);
        dispatch(failure(error));
      }
    );

    function request(): AppActions {
      return { type: USER_REGISTER_REQUEST };
    }
    function success(): AppActions {
      return { type: USER_REGISTER_SUCCESS };
    }
    function failure(error: any): AppActions {
      return { type: USER_REGISTER_FAILURE, payload: error };
    }
  };
};

// user logout action
const logout = () => {
  userService.logout();
  history.push("/");
  return { type: USER_LOGOUT };
};

export const userActions: any = {
  login,
  register,
  logout
};
