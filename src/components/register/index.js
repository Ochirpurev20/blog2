import React, { useState } from "react";
import style from "./style.module.css";
import { Text } from "../../components/text";
import { Textinput } from "../../components/textinput";
import { Mydate } from "../mydate";

//login hiih form butsaah
export const Register = (props) => {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [mydate, setdate] = useState("");
  function clickfunc() {
    // alert("user==" + user + " pass==" + pass + " mydate= " + mydate);
    fetch("api/user/create", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ user, pass, mydate }),
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className={style.login}>
      <form>
        <Text value="Үүсэх хэрэглэгчийн нэр" />
        <Textinput id="user" setstate={setuser} />
        <Text value="Үүсэх нууц үг" />
        <Textinput id="password" type="password" setstate={setpass} />
        <br />
        <Mydate setstate={setdate} />
        <button type="button" onClick={clickfunc}>
          Бүртгүүлэх
        </button>
      </form>
    </div>
  );
};
