import React, { useState, useEffect } from "react";
import { Navbar } from "../../components/navbar";
import { List } from "../../pages/list";
import { Redirect } from "react-router-dom";
import style from "./style.module.css";

export const Loginhome = (props) => {
  return (
    <div className={style.loginhome}>
      <Navbar login={props.login} />
      <List />
    </div>
  );
};
