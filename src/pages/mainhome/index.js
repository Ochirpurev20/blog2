import React, { useState } from "react";
import style from "./style.module.css";
import { Route } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import { Login } from "../../components/login";
import { Register } from "../../components/register";

export const Mainhome = (props) => {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div className={style.mainhome}>
      <Navbar login={props.login} />
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/" exact>
        <Login
          setstate1={setuser}
          setstate2={setpassword}
          user={user}
          password={password}
        />
      </Route>
    </div>
  );
};
