import React from "react";
import { withStyles, Theme } from "@mui/styles";

// material core
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";

// matrial icon
import HelpIcon from "@mui/icons-material/Help";

// styles
import TypographyBase from "components/atoms/TypographyBase";
import useStyles from "./styles";

const CustomToolTip = withStyles((theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 14,
    maxWidth: 240,
  },
}))(Tooltip);

const TextFieldController = ({
  showRequiredLabel = false,
  showTooltip = false,
  title,
  titleTooltip = "",
  placement = "right",
  maxLength = null,
  value,
  onChangeValue,
  helperText = "",
  showTextLength = true,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        fullWidth
        inputProps={{ maxLength }}
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
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        helperText={
          <strong className={classes.helperText}>
            <span className={classes.textGrow}>{helperText}</span>
            {maxLength && showTextLength && (
              <TypographyBase
                color='textSecondary'
                component='span'
                fontSize='12px'
                className={classes.messageCount}
              >
                {value?.length} / {maxLength}
              </TypographyBase>
            )}
          </strong>
        }
        {...props}
      />
    </div>
  );
};

export default TextFieldController;
