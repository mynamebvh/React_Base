import { IAppActionTypes } from "models/IAppState";

export const setLoading = (isLoading) => ({
  type: IAppActionTypes.SET_LOADING,
  payload: isLoading,
});

export const setDialog = (isShow, type = "error", content = "") => ({
  type: IAppActionTypes.SET_DIALOG,
  payload: {
    dialog: {
      type,
      isShow,
      content,
    },
  },
});

export const enqueueSnackbarAction = (notification) => {
  return {
    type: IAppActionTypes.ENQUEUE_SNACKBAR,
    payload: {
      key: notification.key || new Date().getTime() + Math.random(),
      message: notification.message,
      variant: notification.variant || "success",
    },
  };
};

export const removeSnackbar = (key) => ({
  type: IAppActionTypes.REMOVE_SNACKBAR,
  payload: key,
});
