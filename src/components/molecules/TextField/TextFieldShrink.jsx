import React, { useState, useEffect } from "react";
import { withStyles, Theme } from "@mui/styles";

// material core
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

// matrial icon
import HelpIcon from "@mui/icons-material/Help";

// styles
import useStyles from "./styles";

const CustomToolTip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 14,
    maxWidth: 240,
  },
}))(Tooltip);

const TextFieldShrink = ({
  showRequiredLabel = false,
  showTooltip = false,
  title,
  titleTooltip = "",
  placement = "right",
  maxHeight = null,
  value,
  onChangeValue,
  ...props
}) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChangeValue(inputValue || "");
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div>
      <TextField
        fullWidth
        inputProps={{ maxLength: maxHeight }}
        label={
          <div className={classes.textLabel}>
            {showRequiredLabel && <span className={classes.textError}>*</span>}
            <span>{title}</span>
            {showTooltip && (
              <CustomToolTip title={titleTooltip} placement={placement}>
                <HelpIcon />
              </CustomToolTip>
            )}
          </div>
        }
        InputLabelProps={{
          shrink: true,
        }}
        defaultValue={value}
        onChange={(e) => setInputValue(e.target.value)}
        {...props}
      />
      {maxHeight && (
        <div className={classes.messageCount}>
          {value?.length} / {maxHeight}
        </div>
      )}
    </div>
  );
};

export default TextFieldShrink;
