/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useCallback, FC } from "react";

// libs
import { ErrorBoundary } from "react-error-boundary";

// material core
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

const DefaultPage = ({ children }) => {
  const [boundaryKey, setBoundaryKey] = useState(0);

  const memorizedSyncLog = useCallback(async (message, componentStack) => {
    const params = {
      level: "ERROR",
      datetime: new Date().toUTCString(),
      os: "Window",
      description: "platform.description",
      userId: 1,
      error: JSON.stringify(message),
      componentStack: JSON.stringify(componentStack),
      location: window.location.href,
      version: "1.0.0",
    };
    localStorage.setItem("errorLog", JSON.stringify(params));
  }, []);

  useEffect(() => {
    async function sendLogWhenOnline() {
      const getLogFromStorage = localStorage.getItem("errorLog");
      if (getLogFromStorage) {
        memorizedSyncLog();
      }
    }
    sendLogWhenOnline();

    window.onerror = async (message, _, __, ___, errorObj) => {
      memorizedSyncLog(message, errorObj?.stack);
    };

    return () => {
      window.onerror = null;
    };
  }, [memorizedSyncLog]);

  function ErrorFallbackUI({ resetErrorBoundary }) {
    return (
      <Dialog onClose={resetErrorBoundary} fullWidth open>
        <DialogTitle>
          <Typography variant='h4'>Error</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Something went wrong!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={resetErrorBoundary} color='primary' autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <ErrorBoundary
      resetKeys={[boundaryKey]}
      FallbackComponent={ErrorFallbackUI}
      onReset={() => setBoundaryKey((prev) => prev + 1)}
    >
      {children}
    </ErrorBoundary>
  );
};

export default DefaultPage;
