import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css";

export const Navlink = (props) => {
  return (
    <NavLink clasname={style.link} to={props.link}>
      {props.text}{" "}
    </NavLink>
  );
};
