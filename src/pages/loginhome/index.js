import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import { Navbar } from "../../components/navbar";
import { List } from "../../pages/list";
import style from "./style.module.css";
import { Create } from "../create";
import { UserInfo } from "../../components/userinfo";

export const Loginhome = (props) => {
  return (
    <div className={style.loginhome}>
      <Navbar
        login={props.login}
        globalUser={props.globalUser}
        setcookie={props.setcookie}
      />
      <Route path="/" exact>
        <UserInfo globalUser={props.globalUser} />
      </Route>
      <Route path="/login/list">
        <List />
      </Route>
      <Route path="/login/create">
        <Create />
      </Route>
    </div>
  );
};
