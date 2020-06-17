import React, { useEffect } from "react";
import { Navlink } from "../navlink";
import style from "./style.module.css";

export const Navbar = (props) => {
  useEffect(() => {
    console.log("navbar dotroos props.login ===" + props.login);
  }, [props.login]);
  return (
    <div className={style.navbar}>
      <Navlink link="/" text="Эхлэл" />
      <Navlink link="/create" text="Үүсгэх" />
      <Navlink link="/list" text="Жагсаалт" />
    </div>
  );
};
