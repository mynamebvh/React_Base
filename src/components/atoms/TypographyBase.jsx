import React, { FC } from "react";
import clsx from "clsx";

// material core
import { makeStyles } from "@mui/styles";

const useStyles = (props) =>
  makeStyles((theme) => ({
    typography: {
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      wordBreak: "break-word",
      whiteSpace: "pre-wrap",
    },
    primary: {
      color: theme.palette.primary.main,
    },
    secondary: {
      color: theme.palette.secondary.main,
    },
    textPrimary: {
      color: theme.palette.text.primary,
    },
    textSecondary: {
      color: theme.palette.text.secondary,
    },
  }));

const TypographyBase = ({
  color,
  component: Component = "span",
  fontSize = "14px",
  children,
  className,
  fontWeight = "normal",
}) => {
  const classes = useStyles({ fontSize, fontWeight })();

  return (
    <Component
      className={clsx(
        className,
        classes.typography,
        color === "textPrimary" && classes.textPrimary,
        color === "textSecondary" && classes.textSecondary,
        color === "primary" && classes.primary,
        color === "secondary" && classes.secondary,
      )}
    >
      {children}
    </Component>
  );
};

export default TypographyBase;
