import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { Text } from "../../components/text";
import { Textinput } from "../../components/textinput";
import { Textarea } from "../../components/textarea";
import { Mydate } from "../../components/mydate";
import { User } from "../../components/user";

export const Create = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [user, setUser] = useState(["СОНГООРОЙ", "ochir", "badral", "chuk"]);
  function clickfunc() {
    alert(
      "title===" +
        title +
        " content ===" +
        content +
        " date ===" +
        date +
        " user==" +
        user
    );
  }
  return (
    <div className={style.create}>
      {" "}
      <Text value="Гарчиг" />
      <br />
      <Textinput id="title" setstate={setTitle} />
      <br />
      <Textarea id="content" setstate={setContent} />
      <br />
      <Mydate setstate={setDate} />
      <br />
      <User users={user} setstate={setUser} />
      <br />
      <button type="button" onClick={clickfunc}>
        hadgalav
      </button>
    </div>
  );
};
