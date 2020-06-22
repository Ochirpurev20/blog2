import React from "react";
import style from "./style.module.css";

export const UserInfo = (props) => {
  return (
    <div className={style.userinfo}>
      {" "}
      <p>Нэвтэрсэн хэрэглэгчийн нэр: {props.globalUser}</p>
      <p>Нэвтэрсэн хэрэглэгчийн ID: {props.userID}</p>
      <p>Бүртгүүлсэн огноо: {props.userDate}</p>
    </div>
  );
};
