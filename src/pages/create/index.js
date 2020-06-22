import React, { useState } from "react";
import style from "./style.module.css";
import { Text } from "../../components/text";
import { Textinput } from "../../components/textinput";
import { Textarea } from "../../components/textarea";
import { Mydate } from "../../components/mydate";

export const Create = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  function clickfunc() {
    let user = Number(props.userID);

    fetch("/api/create", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ title, content, date, user }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.status));
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
      <Mydate setstate={setDate}> </Mydate>
      <br />
      <Text value="Хэрэглэгчийн нэр" />
      <Text value={props.user} />
      <br />
      <button type="button" onClick={clickfunc}>
        hadgalav
      </button>
    </div>
  );
};
