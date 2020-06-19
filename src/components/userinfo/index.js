import React from "react";
import style from "./style.module.css";

export const UserInfo = (props) => {
  return (
    <div className={style.userinfo}>
      {" "}
      <p>Нэвтэрсэн хэрэглэгч: {props.globalUser}</p>
      <p>Оруулсан бичлэгүүд ..........</p>
      <p>Бүртгүүлсэн огноо ..........</p>
    </div>
  );
};
