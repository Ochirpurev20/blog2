import React from "react";
import Route, { NavLink } from "react-router-dom";

export const Navlink = (props) => {
  return <NavLink to={props.link}>{props.text} </NavLink>;
};
