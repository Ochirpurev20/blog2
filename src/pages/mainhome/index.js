import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
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

          if (document.cookie.length > 0) {
            props.setGlobalUser(Cookies.get("LOGIN"));
            props.setUserID(Cookies.get("id"));
            props.setUserDate(Cookies.get("created_dt"));
            props.setcookie(data.cookie);
          } else console.log("pass buruu bn");
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
