import React, { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// material core
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

// material icon
import AccountCircle from "@mui/icons-material/AccountCircle";

// configs
import { PATH_NAME } from "configs";

// actions
import { logout } from "actions/auth.action";

// selectors
import { roleSelector } from "selectors/auth.selector";

function Account({ ...classes }) {
  const dispatch = useDispatch();
  const history = useNavigate();
  const role = useSelector(roleSelector);
  const [anchorEl, setAnchorEl] = (useState < null) | (HTMLElement > null);

  const _handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const _handleClose = () => {
    setAnchorEl(null);
  };

  const _handleLogout = () => {
    dispatch(logout());
    history.push(PATH_NAME.LOGIN);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={_handleMenu}
        color='inherit'
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={_handleClose}
      >
        <div className={classes.textRole}>{role}</div>
        <Divider />
        <MenuItem>My account</MenuItem>
        <MenuItem className={classes.menuProfile} onClick={_handleLogout}>
          "LOGOUT"
        </MenuItem>
      </Menu>
    </>
  );
}

export default memo(Account);
