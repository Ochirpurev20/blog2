import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { Route } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import { Login } from "../../components/login";
import { Register } from "../../components/register";

export const Mainhome = (props) => {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {
    if (user == "ochir" && password == 1) {
      props.setcookie(true);
      props.setGlobalUser("ochir");
    } else if (user == "badral" && password == 1) {
      props.setcookie(true);
      props.setGlobalUser("badral");
    }
  }, [user, password]);

  return (
    <div className={style.mainhome}>
      <Navbar login={props.login} />
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/" exact>
        <Login
          ststateuser={setuser}
          ststatepass={setpassword}
          user={user}
          password={password}
        />
      </Route>
    </div>
  );
};
