import React from "react";
import style from "./style.module.css";

export const Textarea = (props) => {
  return (
    <textarea
      type="textarea "
      id={props.id}
      cols="55"
      rows="6"
      onChange={(ev) => {
        props.setstate(ev.target.value);
      }}
    />
  );
};
