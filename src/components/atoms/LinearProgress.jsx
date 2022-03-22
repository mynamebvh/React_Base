import React from "react";
import { useSelector } from "react-redux";

import { makeStyles, createStyles } from "@mui/styles";
import Backdrop from "@mui/material/Backdrop";
import LinearProgress from "@mui/material/LinearProgress";

// selectors
import { isLoadingSelector } from "selectors/app.selector";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "20%",
      backgroundColor: "#fafafa",
      padding: "8px 16px",
      "& span": {
        display: "block",
      },
    },
    backdrop: {
      color: "#fffff",
    },
  }),
);

export default function DefaultPage() {
  const classes = useStyles();
  const isLoading = useSelector(isLoadingSelector);

  return (
    <Backdrop className={classes.backdrop} open={isLoading}>
      <div className={classes.root}>
        <span>Loading...</span>
        <LinearProgress />
      </div>
    </Backdrop>
  );
}
