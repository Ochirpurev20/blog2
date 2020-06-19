import React, { useState } from "react";
import style from "./style.module.css";
import { Text } from "../../components/text";
import { Textinput } from "../../components/textinput";

//login hiih form butsaah
export const Login = (props) => {
  const [tempuser, settempuser] = useState("");
  const [temppass, settemppass] = useState("");

  function clickfunc() {
    props.ststateuser(tempuser);
    props.ststatepass(temppass);
  }

  return (
    <div className={style.login}>
      <form>
        <Text value="Хэрэглэгчийн нэр" />
        <Textinput id="user" setstate={settempuser} />
        <Text value="Нууц үг" />
        <Textinput id="password" type="password" setstate={settemppass} />
        <br />
        <button type="button" onClick={clickfunc}>
          Логин
        </button>
      </form>
    </div>
  );
};
