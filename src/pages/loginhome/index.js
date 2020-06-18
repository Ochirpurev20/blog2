import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import { Navbar } from "../../components/navbar";
import { List } from "../../pages/list";
import style from "./style.module.css";
import { Create } from "../create";

export const Loginhome = (props) => {
  return (
    <div className={style.loginhome}>
      <Navbar login={props.login} />
      <Route path="/list">
        <List />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
    </div>
  );
};
