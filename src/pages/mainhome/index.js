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
    if (user && password) {
      // console.log(user + "and" + password);
      fetch("api/user/login", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ user, password }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.status);
          if ((data.cookie = true)) {
            props.setGlobalUser(data.result.name);
            props.setUserID(data.result.id);
            props.setUserDate(data.result.created_dt);

            props.setcookie(data.cookie);
          }
        });
    }
  }, [user, password]);

  return (
    <div className={style.mainhome}>
      <Navbar login={props.login} />
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/" exact>
        <Login ststateuser={setuser} ststatepass={setpassword} />
      </Route>
    </div>
  );
};
