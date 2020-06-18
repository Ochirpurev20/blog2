import React, { useEffect, useState } from "react";
import { Navlink } from "../navlink";
import style from "./style.module.css";
import { Text } from "../../components/text";

//navbar, herev login hiisen bol |uusgeh| jagsaalt buhii navbar butsaana. !login bol |register n holboos gargana
export const Navbar = (props) => {
  if (props.login == true) {
    return (
      <div className={style.navbar}>
        <span>
          <Navlink link="/login/create" text="Үүсгэх" />
          <Navlink link="/login/list" text="Жагсаалт" />
        </span>
        <span>
          <Text value="Ochir" />
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
