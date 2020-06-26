import React from "react";
import { Route } from "react-router-dom";

import Navbar from "../../components/navbar";
import { List } from "../../pages/list";
import style from "./style.module.css";
import { Create } from "../create";
import { UserInfo } from "../../components/userinfo";
import { Detail } from "../detail";
import { connect } from "react-redux";

export const Loginhome = (props) => {
  return (
    <div className={style.loginhome}>
      <Navbar
        login={props.login}
        globalUser={props.globalUser}
        setcookie={props.setcookie}
      />
      <Route path="/" exact>
        <UserInfo
          globalUser={props.globalUser}
          userID={props.userID}
          userDate={props.userDate}
        />
      </Route>
      <Route path="/login/list">
        <List />
      </Route>
      <Route path="/login/create">
        <Create user={props.globalUser} />
      </Route>
      <Route
        path="/detail/:id"
        render={(id) => {
          return <Detail id={id} user={props.globalUser} />;
        }}
      />
    </div>
  );
};
