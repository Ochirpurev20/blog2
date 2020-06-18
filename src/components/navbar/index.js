import React, { useEffect, useState } from "react";
import { Navlink } from "../navlink";
import style from "./style.module.css";
import { Redirect } from "react-router-dom";

export const Navbar = (props) => {
  useEffect(() => {
    props.login ? nevtersen() : nevtreegui();
  }, []);
  let [link, setlink] = useState([]);
  const [text, settext] = useState("");
  function nevtersen() {
    for (let i = 0; i < 5; i++) {
      setlink([...link, i]);
      console.log("link i ni" + link[i]);
    }
    settext("үүсгэх");
  }
  return (
    <div className={style.navbar}>
      <Navlink link="/karate" text={text} />
      <p>p dtoroos link== {link[1]}</p>
      {/* <Navlink link={link[1]} text={text[1]} /> */}
    </div>
  );
  function nevtreegui() {
    console.log("nevtreegui");
  }
};
