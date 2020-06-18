import React, { useState } from "react";
import style from "./style.module.css";
import { Text } from "../../components/text";
import { Textinput } from "../../components/textinput";

//login hiih form butsaah
export const Register = (props) => {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  function clickfunc() {
    alert("user==" + user + " pass==" + pass);
  }

  return (
    <div className={style.login}>
      <form>
        <Text value="Үүсэх хэрэглэгчийн нэр" />
        <Textinput id="user" setstate={setuser} />
        <Text value="Үүсэх нууц үг" />
        <Textinput id="password" type="password" setstate={setpass} />
        <br />
        <button type="button" onClick={clickfunc}>
          Бүртгүүлэх
        </button>
      </form>
    </div>
  );
};
