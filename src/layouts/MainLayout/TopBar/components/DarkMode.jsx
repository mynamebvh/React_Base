import React, { memo } from "react";

// material core
import IconButton from "@mui/material/IconButton";

// material icon
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// configs
import { THEMES } from "configs";

function DarkMode() {
  const _handleChangeTheme = () => {
    const type = "light" === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    // setModeTheme(type);
  };

  return (
    <IconButton
      aria-label='account of current user'
      aria-controls='menu-appbar'
      aria-haspopup='true'
      color='inherit'
      title='Change Theme'
      onClick={_handleChangeTheme}
    >
      {"light" === THEMES.LIGHT ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
}

export default memo(DarkMode);
