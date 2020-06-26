import React from "react";
import { Navlink } from "../navlink";
import style from "./style.module.css";
import Cookie from "js-cookie";
import { connect } from "react-redux";

//navbar, herev login hiisen bol |uusgeh| jagsaalt buhii navbar butsaana. !login bol |register n holboos gargana
const Navbar = (props) => {
  if (props.login === true) {
    return (
      <div className={style.navbar}>
        <span>
          <Navlink link="/login/create" text="Үүсгэх" />
          <Navlink link="/login/list" text="Жагсаалт" />
        </span>
        <span>
          <Navlink link="/" text={props.globalUser} />
          <button
            onClick={() => {
              props.getFalse();
              // props.setcookie(false);
              Cookie.remove("LOGIN", { path: " ", domain: ".blog.mn" });
              Cookie.remove("id", { path: " ", domain: ".blog.mn" });
              Cookie.remove("created_dt", { path: " ", domain: ".blog.mn" });
            }}
          >
            гарах
          </button>
        </span>
      </div>
    );
  } else {
    return (
      <div className={style.notloginnavbar}>
        <Navlink link="/register" text="Бүртгүүлэх" />
        <Navlink link="/" text="Нэвтрэх" />
      </div>
    );
  }
};
const a = (state) => {
  return {
    appscookie: state.cookie,
  };
};
const b = (dispatch) => {
  return {
    getFalse: (ner) => dispatch({ type: "getCookieFalse" }),
  };
};
export default connect(a, b)(Navbar);
