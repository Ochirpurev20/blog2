import React, { useState } from "react";
import style from "./style.module.css";

export const Textinput = (props) => {
  return (
    <input
      type="text"
      id={props.id}
      name="title"
      onChange={(ev) => {
        props.setstate(ev.target.value);
      }}
    />
  );
};
