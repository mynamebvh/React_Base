import React, { useState, memo } from "react";

// material core
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";

// material icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// configs
import { LANGUAGE } from "configs";

function Language({ ...classes }) {
  const [anchorEl, setAnchorEl] = (useState < null) | (HTMLElement > null);

  const _handleOpenLanguage = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const _handleChooseLanguage = (lang) => () => {
    // setLanguage(lang);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let language = "VIETNAMESE";
  const renderTextLanguage = () => {
    switch (language) {
      case LANGUAGE.ENGLISH: {
        return "ENGLISH";
      }
      case LANGUAGE.VIETNAMESE: {
        return "VIETNAMESE";
      }
      default:
        return null;
    }
  };

  return (
    <>
      <Button
        className={classes.menuLanguage}
        aria-controls='simple-menu'
        title='Change Language'
        aria-haspopup='true'
        onClick={_handleOpenLanguage}
      >
        {renderTextLanguage()} <ExpandMoreIcon />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          selected={language === LANGUAGE.ENGLISH}
          onClick={_handleChooseLanguage(LANGUAGE.ENGLISH)}
        >
          English
        </MenuItem>
        <MenuItem
          selected={language === LANGUAGE.VIETNAMESE}
          onClick={_handleChooseLanguage(LANGUAGE.VIETNAMESE)}
        >
          Vietnamese
        </MenuItem>
      </Menu>
    </>
  );
}

export default memo(Language);
