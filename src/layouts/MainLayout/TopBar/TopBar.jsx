import React, { memo } from "react";

// libs
import clsx from "clsx";

// material core
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

// material icon
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

// components
import Account from "./components/Account";
import Language from "./components/Language";
import DarkMode from "./components/DarkMode";

// styles
import useStyles from "./styles";

function TopBar({ isDrawer, handleToogleDrawer }) {
  const classes = useStyles();

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isDrawer,
      })}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          className={clsx(classes.menuButton)}
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleToogleDrawer}
          edge='start'
          className={clsx(classes.menuButton)}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.grow} />
        <div className={classes.topBar_setting}>
          <Language {...classes} />
          <DarkMode />
          <Account {...classes} />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default memo(TopBar);
