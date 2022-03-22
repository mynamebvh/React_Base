import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// configs
import { PATH_NAME } from "configs";

// selectors
import { roleSelector } from "selectors/auth.selector";

const RoleRoute = ({ children, requireRoles = [] }) => {
  const history = useNavigate();
  const role = useSelector(roleSelector);

  useEffect(() => {
    if (!role || requireRoles.length === 0) return;

    const checkRole = requireRoles.includes(role);
    if (!checkRole) {
      history.replace(PATH_NAME.ERROR_403);
    }
  }, [history, role, requireRoles]);

  return <>{children}</>;
};

export default RoleRoute;
