import React from "react";
import style from "./style.module.css";

export const Detail = (props) => {
  let tempId = props.id.match.params.id;

  return (
    <div className={style.detail}>
      detail tempId in {tempId}
      <p>list n id ni:{tempId}</p>
      <p>list n id ni: {tempId}</p>
      <p>list n id ni: {tempId}</p>
      <p>list n id ni: {tempId}</p>
      <p>list n id ni: {tempId}</p>
      <p>list n id ni: {tempId}</p>
      <p>list n id ni: {tempId}</p>
    </div>
  );
};
