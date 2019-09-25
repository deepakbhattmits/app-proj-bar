import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <div className="ui secondary  menu">
      <div className="item">
        <NavLink className="ui header text-capitalize" to="/">
          Project Name
        </NavLink>
      </div>

      <div className="right menu">
        <NavLink className="item text-uppercase" to="/home">
          home
        </NavLink>
        <NavLink className="item text-uppercase" to="/favorite">
          favorite
        </NavLink>
      </div>
    </div>
  );
};
export default Navigation;
