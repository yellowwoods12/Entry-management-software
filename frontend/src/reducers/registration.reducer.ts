// constants
import {
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS
} from "../constants";

// types
import { RegisterState, RegisterActionTypes } from "../types";

const initState: RegisterState = {};

// authentication reducer
const registration = (
  state = initState,
  action: RegisterActionTypes
): RegisterState => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        registering: true
      };
    case USER_REGISTER_SUCCESS:
      return {
        registered: true
      };
    case USER_REGISTER_FAILURE:
      return {
        error: action.payload
      };
    default:
      return state;
  }
};

export default registration;
