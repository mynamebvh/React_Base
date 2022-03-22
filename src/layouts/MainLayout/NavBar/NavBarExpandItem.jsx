import React, { useState, memo } from "react";
import clsx from "clsx";

// material core
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";

// material icon
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// types
import { INavBarExpandItem } from "models/INavBar";

// styles
import useStyles from "./styles";

function NavBarExpandItem({
  title,
  icon: Icon,
  open = false,
  children,
  style,
}) {
  const classes = useStyles();
  const [isExpand, setIsExpand] = useState(open);

  const handleToggle = () => {
    setIsExpand((prevOpen) => !prevOpen);
  };

  return (
    <ListItem className={clsx(classes.item)} disableGutters key={title}>
      <Button className={classes.button} onClick={handleToggle} style={style}>
        {Icon && <Icon className={classes.icon} size='20' />}
        <span className={classes.title}>{title}</span>
        {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
      <Collapse in={isExpand}>{children}</Collapse>
    </ListItem>
  );
}

export default memo(NavBarExpandItem);
