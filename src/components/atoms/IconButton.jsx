import React, { FC } from "react";
import clsx from "clsx";

import { makeStyles, Theme } from "@mui/styles";

const useStyles = makeStyles(() => ({
  borderColor: {
    border: "1px solid rgba(0, 0, 0, 0.12)",
  },
}));

const DefaultPage = ({
  title,
  color = "inherit",
  isBorderColor = false,
  children,
  onClick,
  id,
}) => {
  const classes = useStyles();

  return (
    <Tooltip title={title}>
      <IconButton
        id={id}
        color={color}
        onClick={onClick}
        className={clsx(isBorderColor && classes.borderColor)}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default DefaultPage;
