import React, { useEffect, useState } from "react";
import { Navlink } from "../navlink";
import style from "./style.module.css";

export const Navbar = (props) => {
  if (props.login == true) {
    return (
      <div className={style.navbar}>
        <span>
          <Navlink link="/create" text="Үүсгэх" />
          <Navlink link="/list" text="Жагсаалт" />
        </span>
        <span>
          <p className={style.user}>|| Ochiroo || гарах </p>
        </span>
      </div>
    );
  } else {
    return (
      <div className={style.navbar}>
        {" "}
        <p>Нэвтэрнэ үү </p>
      </div>
    );
  }
};
