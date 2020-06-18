import React from "react";
import style from "./style.module.css";
import { Text } from "../../components/text";
import { Textinput } from "../../components/textinput";

//login hiih form butsaah
export const Login = (props) => {
  function clickfunc() {
    alert("user==" + props.user + " pass==" + props.password);
  }

  return (
    <div className={style.login}>
      <form>
        <Text value="Хэрэглэгчийн нэр" />
        <Textinput id="user" setstate={props.setstate1} />
        <Text value="Нууц үг" />
        <Textinput id="password" type="password" setstate={props.setstate2} />
        <br />
        <button type="button" onClick={clickfunc}>
          Логин
        </button>
      </form>
    </div>
  );
};
