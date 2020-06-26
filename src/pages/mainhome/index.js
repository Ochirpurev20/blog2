import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import style from "./style.module.css";
import { Route } from "react-router-dom";
import Navbar from "../../components/navbar";
import { Login } from "../../components/login";
import { Register } from "../../components/register";
import { connect } from "react-redux";

const Mainhome = (props) => {
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
            props.getTrue();
            // props.setGlobalUser(Cookies.get("LOGIN"));

            // props.setcookie(data.cookie);
          } else console.log("pass buruu bn");
        });
    }
  }, [user, password]);

  return (
    <div className={style.mainhome}>
      <Navbar />
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/" exact>
        <Login ststateuser={setuser} ststatepass={setpassword} />
      </Route>
    </div>
  );
};
const a = (state) => {
  return {
    appscookie: state.cookie,
  };
};
const b = (dispatch) => {
  return {
    getTrue: (ner) => dispatch({ type: "getCookieTrue" }),
  };
};
export default connect(a, b)(Mainhome);
