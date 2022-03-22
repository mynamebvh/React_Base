import { IAuthActionTypes } from "models/IAuthState";

const initialState = {
  user: null,
  role: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IAuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        role: payload.role,
      };
    case IAuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
      };
    case IAuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        role: null,
      };
    case IAuthActionTypes.SILENT_LOGIN:
      return {
        ...state,
        user: payload.user,
        role: payload.role,
      };
    default:
      return state;
  }
};

export default reducer;
