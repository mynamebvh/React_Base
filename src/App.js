import React, { useEffect } from "react";
import { BrowserRouter as Router, Outlet } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// containers
import Auth from "containers/Auth";

// atomic
import LinearProgress from "components/atoms/LinearProgress";
import Dialog from "components/molecules/Dialog";
import SnackBarBase from "components/molecules/SnackBar";

// routes
import Routes from "routes/Routes";

function App() {
  return (
    <Router>
      <Auth>
        <SnackbarProvider
          autoHideDuration={process.env.REACT_APP_AUTO_HIDE_SNACKBAR || 3000}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          maxSnack={process.env.REACT_APP_MAX_SNACKBAR || 3}
        >
          <LinearProgress />
          <Dialog />
          <Routes />

          <SnackBarBase />
        </SnackbarProvider>
      </Auth>
    </Router>
  );
}

export default App;
