// types
import { IAuthActionTypes } from "models/IAuthState";

// services
import authService from "services/authService";

// configs
import { PATH_NAME } from "configs";

export const login = (username, roleUser, history) => async (dispatch) => {
  dispatch({ type: IAuthActionTypes.LOGIN_REQUEST });

  const { user, role } = await authService.loginWithAuth0(username, roleUser);
  dispatch({
    type: IAuthActionTypes.LOGIN_SUCCESS,
    payload: { user, role },
  });
  history.push(PATH_NAME.ROOT);
};

export const logout = () => (dispatch) => {
  authService.logOut();
  dispatch({ type: IAuthActionTypes.LOGOUT });
};

export const setUserData = (user, role) => (dispatch) => {
  dispatch({
    type: IAuthActionTypes.SILENT_LOGIN,
    payload: { user, role },
  });
};
