import React from "react";

export const Textarea = (props) => {
  return (
    <textarea
      type="textarea"
      id={props.id}
      cols="55"
      rows="6"
      value={props.value}
      onChange={(ev) => {
        props.setstate(ev.target.value);
      }}
    />
  );
};
